package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.ReasonAndProfilactic;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the ReasonAndProfilactic entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ReasonAndProfilacticRepository extends JpaRepository<ReasonAndProfilactic, Long> {

}
