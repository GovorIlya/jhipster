package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.ReasonAndProfilactic;

import com.mycompany.myapp.repository.ReasonAndProfilacticRepository;
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
 * REST controller for managing ReasonAndProfilactic.
 */
@RestController
@RequestMapping("/api")
public class ReasonAndProfilacticResource {

    private final Logger log = LoggerFactory.getLogger(ReasonAndProfilacticResource.class);

    private static final String ENTITY_NAME = "reasonAndProfilactic";

    private final ReasonAndProfilacticRepository reasonAndProfilacticRepository;

    public ReasonAndProfilacticResource(ReasonAndProfilacticRepository reasonAndProfilacticRepository) {
        this.reasonAndProfilacticRepository = reasonAndProfilacticRepository;
    }

    /**
     * POST  /reason-and-profilactics : Create a new reasonAndProfilactic.
     *
     * @param reasonAndProfilactic the reasonAndProfilactic to create
     * @return the ResponseEntity with status 201 (Created) and with body the new reasonAndProfilactic, or with status 400 (Bad Request) if the reasonAndProfilactic has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/reason-and-profilactics")
    @Timed
    public ResponseEntity<ReasonAndProfilactic> createReasonAndProfilactic(@RequestBody ReasonAndProfilactic reasonAndProfilactic) throws URISyntaxException {
        log.debug("REST request to save ReasonAndProfilactic : {}", reasonAndProfilactic);
        if (reasonAndProfilactic.getId() != null) {
            throw new BadRequestAlertException("A new reasonAndProfilactic cannot already have an ID", ENTITY_NAME, "idexists");
        }
        ReasonAndProfilactic result = reasonAndProfilacticRepository.save(reasonAndProfilactic);
        return ResponseEntity.created(new URI("/api/reason-and-profilactics/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /reason-and-profilactics : Updates an existing reasonAndProfilactic.
     *
     * @param reasonAndProfilactic the reasonAndProfilactic to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated reasonAndProfilactic,
     * or with status 400 (Bad Request) if the reasonAndProfilactic is not valid,
     * or with status 500 (Internal Server Error) if the reasonAndProfilactic couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/reason-and-profilactics")
    @Timed
    public ResponseEntity<ReasonAndProfilactic> updateReasonAndProfilactic(@RequestBody ReasonAndProfilactic reasonAndProfilactic) throws URISyntaxException {
        log.debug("REST request to update ReasonAndProfilactic : {}", reasonAndProfilactic);
        if (reasonAndProfilactic.getId() == null) {
            return createReasonAndProfilactic(reasonAndProfilactic);
        }
        ReasonAndProfilactic result = reasonAndProfilacticRepository.save(reasonAndProfilactic);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, reasonAndProfilactic.getId().toString()))
            .body(result);
    }

    /**
     * GET  /reason-and-profilactics : get all the reasonAndProfilactics.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of reasonAndProfilactics in body
     */
    @GetMapping("/reason-and-profilactics")
    @Timed
    public List<ReasonAndProfilactic> getAllReasonAndProfilactics() {
        log.debug("REST request to get all ReasonAndProfilactics");
        return reasonAndProfilacticRepository.findAll();
        }

    /**
     * GET  /reason-and-profilactics/:id : get the "id" reasonAndProfilactic.
     *
     * @param id the id of the reasonAndProfilactic to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the reasonAndProfilactic, or with status 404 (Not Found)
     */
    @GetMapping("/reason-and-profilactics/{id}")
    @Timed
    public ResponseEntity<ReasonAndProfilactic> getReasonAndProfilactic(@PathVariable Long id) {
        log.debug("REST request to get ReasonAndProfilactic : {}", id);
        ReasonAndProfilactic reasonAndProfilactic = reasonAndProfilacticRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(reasonAndProfilactic));
    }

    /**
     * DELETE  /reason-and-profilactics/:id : delete the "id" reasonAndProfilactic.
     *
     * @param id the id of the reasonAndProfilactic to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/reason-and-profilactics/{id}")
    @Timed
    public ResponseEntity<Void> deleteReasonAndProfilactic(@PathVariable Long id) {
        log.debug("REST request to delete ReasonAndProfilactic : {}", id);
        reasonAndProfilacticRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
