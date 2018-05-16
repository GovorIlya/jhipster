package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Proyavlenie;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Proyavlenie entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProyavlenieRepository extends JpaRepository<Proyavlenie, Long> {

}
