package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.JhipsterApp;

import com.mycompany.myapp.domain.ReasonAndProfilactic;
import com.mycompany.myapp.repository.ReasonAndProfilacticRepository;
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
 * Test class for the ReasonAndProfilacticResource REST controller.
 *
 * @see ReasonAndProfilacticResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = JhipsterApp.class)
public class ReasonAndProfilacticResourceIntTest {

    private static final String DEFAULT_TEXT_2 = "AAAAAAAAAA";
    private static final String UPDATED_TEXT_2 = "BBBBBBBBBB";

    private static final String DEFAULT_TEXT_3 = "AAAAAAAAAA";
    private static final String UPDATED_TEXT_3 = "BBBBBBBBBB";

    @Autowired
    private ReasonAndProfilacticRepository reasonAndProfilacticRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restReasonAndProfilacticMockMvc;

    private ReasonAndProfilactic reasonAndProfilactic;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final ReasonAndProfilacticResource reasonAndProfilacticResource = new ReasonAndProfilacticResource(reasonAndProfilacticRepository);
        this.restReasonAndProfilacticMockMvc = MockMvcBuilders.standaloneSetup(reasonAndProfilacticResource)
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
    public static ReasonAndProfilactic createEntity(EntityManager em) {
        ReasonAndProfilactic reasonAndProfilactic = new ReasonAndProfilactic()
            .text2(DEFAULT_TEXT_2)
            .text3(DEFAULT_TEXT_3);
        return reasonAndProfilactic;
    }

    @Before
    public void initTest() {
        reasonAndProfilactic = createEntity(em);
    }

    @Test
    @Transactional
    public void createReasonAndProfilactic() throws Exception {
        int databaseSizeBeforeCreate = reasonAndProfilacticRepository.findAll().size();

        // Create the ReasonAndProfilactic
        restReasonAndProfilacticMockMvc.perform(post("/api/reason-and-profilactics")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(reasonAndProfilactic)))
            .andExpect(status().isCreated());

        // Validate the ReasonAndProfilactic in the database
        List<ReasonAndProfilactic> reasonAndProfilacticList = reasonAndProfilacticRepository.findAll();
        assertThat(reasonAndProfilacticList).hasSize(databaseSizeBeforeCreate + 1);
        ReasonAndProfilactic testReasonAndProfilactic = reasonAndProfilacticList.get(reasonAndProfilacticList.size() - 1);
        assertThat(testReasonAndProfilactic.getText2()).isEqualTo(DEFAULT_TEXT_2);
        assertThat(testReasonAndProfilactic.getText3()).isEqualTo(DEFAULT_TEXT_3);
    }

    @Test
    @Transactional
    public void createReasonAndProfilacticWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = reasonAndProfilacticRepository.findAll().size();

        // Create the ReasonAndProfilactic with an existing ID
        reasonAndProfilactic.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restReasonAndProfilacticMockMvc.perform(post("/api/reason-and-profilactics")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(reasonAndProfilactic)))
            .andExpect(status().isBadRequest());

        // Validate the ReasonAndProfilactic in the database
        List<ReasonAndProfilactic> reasonAndProfilacticList = reasonAndProfilacticRepository.findAll();
        assertThat(reasonAndProfilacticList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllReasonAndProfilactics() throws Exception {
        // Initialize the database
        reasonAndProfilacticRepository.saveAndFlush(reasonAndProfilactic);

        // Get all the reasonAndProfilacticList
        restReasonAndProfilacticMockMvc.perform(get("/api/reason-and-profilactics?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(reasonAndProfilactic.getId().intValue())))
            .andExpect(jsonPath("$.[*].text2").value(hasItem(DEFAULT_TEXT_2.toString())))
            .andExpect(jsonPath("$.[*].text3").value(hasItem(DEFAULT_TEXT_3.toString())));
    }

    @Test
    @Transactional
    public void getReasonAndProfilactic() throws Exception {
        // Initialize the database
        reasonAndProfilacticRepository.saveAndFlush(reasonAndProfilactic);

        // Get the reasonAndProfilactic
        restReasonAndProfilacticMockMvc.perform(get("/api/reason-and-profilactics/{id}", reasonAndProfilactic.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(reasonAndProfilactic.getId().intValue()))
            .andExpect(jsonPath("$.text2").value(DEFAULT_TEXT_2.toString()))
            .andExpect(jsonPath("$.text3").value(DEFAULT_TEXT_3.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingReasonAndProfilactic() throws Exception {
        // Get the reasonAndProfilactic
        restReasonAndProfilacticMockMvc.perform(get("/api/reason-and-profilactics/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateReasonAndProfilactic() throws Exception {
        // Initialize the database
        reasonAndProfilacticRepository.saveAndFlush(reasonAndProfilactic);
        int databaseSizeBeforeUpdate = reasonAndProfilacticRepository.findAll().size();

        // Update the reasonAndProfilactic
        ReasonAndProfilactic updatedReasonAndProfilactic = reasonAndProfilacticRepository.findOne(reasonAndProfilactic.getId());
        // Disconnect from session so that the updates on updatedReasonAndProfilactic are not directly saved in db
        em.detach(updatedReasonAndProfilactic);
        updatedReasonAndProfilactic
            .text2(UPDATED_TEXT_2)
            .text3(UPDATED_TEXT_3);

        restReasonAndProfilacticMockMvc.perform(put("/api/reason-and-profilactics")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedReasonAndProfilactic)))
            .andExpect(status().isOk());

        // Validate the ReasonAndProfilactic in the database
        List<ReasonAndProfilactic> reasonAndProfilacticList = reasonAndProfilacticRepository.findAll();
        assertThat(reasonAndProfilacticList).hasSize(databaseSizeBeforeUpdate);
        ReasonAndProfilactic testReasonAndProfilactic = reasonAndProfilacticList.get(reasonAndProfilacticList.size() - 1);
        assertThat(testReasonAndProfilactic.getText2()).isEqualTo(UPDATED_TEXT_2);
        assertThat(testReasonAndProfilactic.getText3()).isEqualTo(UPDATED_TEXT_3);
    }

    @Test
    @Transactional
    public void updateNonExistingReasonAndProfilactic() throws Exception {
        int databaseSizeBeforeUpdate = reasonAndProfilacticRepository.findAll().size();

        // Create the ReasonAndProfilactic

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restReasonAndProfilacticMockMvc.perform(put("/api/reason-and-profilactics")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(reasonAndProfilactic)))
            .andExpect(status().isCreated());

        // Validate the ReasonAndProfilactic in the database
        List<ReasonAndProfilactic> reasonAndProfilacticList = reasonAndProfilacticRepository.findAll();
        assertThat(reasonAndProfilacticList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteReasonAndProfilactic() throws Exception {
        // Initialize the database
        reasonAndProfilacticRepository.saveAndFlush(reasonAndProfilactic);
        int databaseSizeBeforeDelete = reasonAndProfilacticRepository.findAll().size();

        // Get the reasonAndProfilactic
        restReasonAndProfilacticMockMvc.perform(delete("/api/reason-and-profilactics/{id}", reasonAndProfilactic.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<ReasonAndProfilactic> reasonAndProfilacticList = reasonAndProfilacticRepository.findAll();
        assertThat(reasonAndProfilacticList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ReasonAndProfilactic.class);
        ReasonAndProfilactic reasonAndProfilactic1 = new ReasonAndProfilactic();
        reasonAndProfilactic1.setId(1L);
        ReasonAndProfilactic reasonAndProfilactic2 = new ReasonAndProfilactic();
        reasonAndProfilactic2.setId(reasonAndProfilactic1.getId());
        assertThat(reasonAndProfilactic1).isEqualTo(reasonAndProfilactic2);
        reasonAndProfilactic2.setId(2L);
        assertThat(reasonAndProfilactic1).isNotEqualTo(reasonAndProfilactic2);
        reasonAndProfilactic1.setId(null);
        assertThat(reasonAndProfilactic1).isNotEqualTo(reasonAndProfilactic2);
    }
}
