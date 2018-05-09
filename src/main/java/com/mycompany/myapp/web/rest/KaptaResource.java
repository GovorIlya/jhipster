package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import com.mycompany.myapp.web.rest.util.PaginationUtil;
import com.mycompany.myapp.web.rest.vm.KaptaSaveVM;
import com.mycompany.myapp.web.rest.vm.KaptaLoadVM;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Kapta.
 */
@RestController
@RequestMapping("/api/k-apta")
public class KaptaResource {

    private final Logger log = LoggerFactory.getLogger(KaptaResource.class);

    /**
     * POST  /k-apta : Save KAPTA.
     *
     * @param kaptaSaveVM the KAPTA to save
     * @return the ResponseEntity with status 201 (Created) and with body the new KaptaSaveVM, or with status 400 (Bad Request) if the KAPTA has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/k-apta")
    @Timed
    public ResponseEntity postKapta(@RequestBody KaptaSaveVM kaptaSaveVM) throws URISyntaxException {
        log.debug("REST request to save KaptaSaveVM : {}", kaptaSaveVM);
        //TODO please code the save of page data.
        return ResponseEntity.ok().build();
    }
    /**
     * GET  /k-apta : get KAPTA.
     *
     * @return the ResponseEntity with status 200 (OK) and with body the kaptaLoadVM, or with status 404 (Not Found)
     */
    @GetMapping("/k-apta")
    @Timed
    public ResponseEntity<KaptaLoadVM> getKapta() {
        log.debug("REST request to get KaptaLoadVM");
        KaptaLoadVM kaptaLoadVM = null;
        //TODO please code the load referential data or any utils data to load the page.
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(kaptaLoadVM));
    }


}
