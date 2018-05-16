package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Proyavlenie;

import com.mycompany.myapp.repository.ProyavlenieRepository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Proyavlenie.
 */
@RestController
@RequestMapping("/api")
public class ProyavlenieResource {

    private final Logger log = LoggerFactory.getLogger(ProyavlenieResource.class);

    private static final String ENTITY_NAME = "proyavlenie";

    private final ProyavlenieRepository proyavlenieRepository;

    public ProyavlenieResource(ProyavlenieRepository proyavlenieRepository) {
        this.proyavlenieRepository = proyavlenieRepository;
    }

    /**
     * POST  /proyavlenies : Create a new proyavlenie.
     *
     * @param proyavlenie the proyavlenie to create
     * @return the ResponseEntity with status 201 (Created) and with body the new proyavlenie, or with status 400 (Bad Request) if the proyavlenie has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/proyavlenies")
    @Timed
    public ResponseEntity<Proyavlenie> createProyavlenie(@RequestBody Proyavlenie proyavlenie) throws URISyntaxException {
        log.debug("REST request to save Proyavlenie : {}", proyavlenie);
        if (proyavlenie.getId() != null) {
            throw new BadRequestAlertException("A new proyavlenie cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Proyavlenie result = proyavlenieRepository.save(proyavlenie);
        return ResponseEntity.created(new URI("/api/proyavlenies/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /proyavlenies : Updates an existing proyavlenie.
     *
     * @param proyavlenie the proyavlenie to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated proyavlenie,
     * or with status 400 (Bad Request) if the proyavlenie is not valid,
     * or with status 500 (Internal Server Error) if the proyavlenie couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/proyavlenies")
    @Timed
    public ResponseEntity<Proyavlenie> updateProyavlenie(@RequestBody Proyavlenie proyavlenie) throws URISyntaxException {
        log.debug("REST request to update Proyavlenie : {}", proyavlenie);
        if (proyavlenie.getId() == null) {
            return createProyavlenie(proyavlenie);
        }
        Proyavlenie result = proyavlenieRepository.save(proyavlenie);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, proyavlenie.getId().toString()))
            .body(result);
    }

    /**
     * GET  /proyavlenies : get all the proyavlenies.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of proyavlenies in body
     */
    @GetMapping("/proyavlenies")
    @Timed
    public List<Proyavlenie> getAllProyavlenies() {
        log.debug("REST request to get all Proyavlenies");
        return proyavlenieRepository.findAll();
        }

    /**
     * GET  /proyavlenies/:id : get the "id" proyavlenie.
     *
     * @param id the id of the proyavlenie to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the proyavlenie, or with status 404 (Not Found)
     */
    @GetMapping("/proyavlenies/{id}")
    @Timed
    public ResponseEntity<Proyavlenie> getProyavlenie(@PathVariable Long id) {
        log.debug("REST request to get Proyavlenie : {}", id);
        Proyavlenie proyavlenie = proyavlenieRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(proyavlenie));
    }

    /**
     * DELETE  /proyavlenies/:id : delete the "id" proyavlenie.
     *
     * @param id the id of the proyavlenie to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/proyavlenies/{id}")
    @Timed
    public ResponseEntity<Void> deleteProyavlenie(@PathVariable Long id) {
        log.debug("REST request to delete Proyavlenie : {}", id);
        proyavlenieRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
