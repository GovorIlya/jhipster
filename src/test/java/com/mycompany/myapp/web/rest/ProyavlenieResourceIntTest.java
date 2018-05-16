package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.JhipsterApp;

import com.mycompany.myapp.domain.Proyavlenie;
import com.mycompany.myapp.repository.ProyavlenieRepository;
import com.mycompany.myapp.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static com.mycompany.myapp.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the ProyavlenieResource REST controller.
 *
 * @see ProyavlenieResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = JhipsterApp.class)
public class ProyavlenieResourceIntTest {

    private static final String DEFAULT_TEXT_1 = "AAAAAAAAAA";
    private static final String UPDATED_TEXT_1 = "BBBBBBBBBB";

    @Autowired
    private ProyavlenieRepository proyavlenieRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restProyavlenieMockMvc;

    private Proyavlenie proyavlenie;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final ProyavlenieResource proyavlenieResource = new ProyavlenieResource(proyavlenieRepository);
        this.restProyavlenieMockMvc = MockMvcBuilders.standaloneSetup(proyavlenieResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Proyavlenie createEntity(EntityManager em) {
        Proyavlenie proyavlenie = new Proyavlenie()
            .text1(DEFAULT_TEXT_1);
        return proyavlenie;
    }

    @Before
    public void initTest() {
        proyavlenie = createEntity(em);
    }

    @Test
    @Transactional
    public void createProyavlenie() throws Exception {
        int databaseSizeBeforeCreate = proyavlenieRepository.findAll().size();

        // Create the Proyavlenie
        restProyavlenieMockMvc.perform(post("/api/proyavlenies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(proyavlenie)))
            .andExpect(status().isCreated());

        // Validate the Proyavlenie in the database
        List<Proyavlenie> proyavlenieList = proyavlenieRepository.findAll();
        assertThat(proyavlenieList).hasSize(databaseSizeBeforeCreate + 1);
        Proyavlenie testProyavlenie = proyavlenieList.get(proyavlenieList.size() - 1);
        assertThat(testProyavlenie.getText1()).isEqualTo(DEFAULT_TEXT_1);
    }

    @Test
    @Transactional
    public void createProyavlenieWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = proyavlenieRepository.findAll().size();

        // Create the Proyavlenie with an existing ID
        proyavlenie.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restProyavlenieMockMvc.perform(post("/api/proyavlenies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(proyavlenie)))
            .andExpect(status().isBadRequest());

        // Validate the Proyavlenie in the database
        List<Proyavlenie> proyavlenieList = proyavlenieRepository.findAll();
        assertThat(proyavlenieList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllProyavlenies() throws Exception {
        // Initialize the database
        proyavlenieRepository.saveAndFlush(proyavlenie);

        // Get all the proyavlenieList
        restProyavlenieMockMvc.perform(get("/api/proyavlenies?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(proyavlenie.getId().intValue())))
            .andExpect(jsonPath("$.[*].text1").value(hasItem(DEFAULT_TEXT_1.toString())));
    }

    @Test
    @Transactional
    public void getProyavlenie() throws Exception {
        // Initialize the database
        proyavlenieRepository.saveAndFlush(proyavlenie);

        // Get the proyavlenie
        restProyavlenieMockMvc.perform(get("/api/proyavlenies/{id}", proyavlenie.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(proyavlenie.getId().intValue()))
            .andExpect(jsonPath("$.text1").value(DEFAULT_TEXT_1.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingProyavlenie() throws Exception {
        // Get the proyavlenie
        restProyavlenieMockMvc.perform(get("/api/proyavlenies/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateProyavlenie() throws Exception {
        // Initialize the database
        proyavlenieRepository.saveAndFlush(proyavlenie);
        int databaseSizeBeforeUpdate = proyavlenieRepository.findAll().size();

        // Update the proyavlenie
        Proyavlenie updatedProyavlenie = proyavlenieRepository.findOne(proyavlenie.getId());
        // Disconnect from session so that the updates on updatedProyavlenie are not directly saved in db
        em.detach(updatedProyavlenie);
        updatedProyavlenie
            .text1(UPDATED_TEXT_1);

        restProyavlenieMockMvc.perform(put("/api/proyavlenies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedProyavlenie)))
            .andExpect(status().isOk());

        // Validate the Proyavlenie in the database
        List<Proyavlenie> proyavlenieList = proyavlenieRepository.findAll();
        assertThat(proyavlenieList).hasSize(databaseSizeBeforeUpdate);
        Proyavlenie testProyavlenie = proyavlenieList.get(proyavlenieList.size() - 1);
        assertThat(testProyavlenie.getText1()).isEqualTo(UPDATED_TEXT_1);
    }

    @Test
    @Transactional
    public void updateNonExistingProyavlenie() throws Exception {
        int databaseSizeBeforeUpdate = proyavlenieRepository.findAll().size();

        // Create the Proyavlenie

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restProyavlenieMockMvc.perform(put("/api/proyavlenies")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(proyavlenie)))
            .andExpect(status().isCreated());

        // Validate the Proyavlenie in the database
        List<Proyavlenie> proyavlenieList = proyavlenieRepository.findAll();
        assertThat(proyavlenieList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteProyavlenie() throws Exception {
        // Initialize the database
        proyavlenieRepository.saveAndFlush(proyavlenie);
        int databaseSizeBeforeDelete = proyavlenieRepository.findAll().size();

        // Get the proyavlenie
        restProyavlenieMockMvc.perform(delete("/api/proyavlenies/{id}", proyavlenie.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Proyavlenie> proyavlenieList = proyavlenieRepository.findAll();
        assertThat(proyavlenieList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Proyavlenie.class);
        Proyavlenie proyavlenie1 = new Proyavlenie();
        proyavlenie1.setId(1L);
        Proyavlenie proyavlenie2 = new Proyavlenie();
        proyavlenie2.setId(proyavlenie1.getId());
        assertThat(proyavlenie1).isEqualTo(proyavlenie2);
        proyavlenie2.setId(2L);
        assertThat(proyavlenie1).isNotEqualTo(proyavlenie2);
        proyavlenie1.setId(null);
        assertThat(proyavlenie1).isNotEqualTo(proyavlenie2);
    }
}
