package com.mycompany.myapp.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A UnitDescription.
 */
@Entity
@Table(name = "unit_description")
public class UnitDescription implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "create_year")
    private String createYear;

    @Column(name = "square")
    private String square;

    @Column(name = "collesctors")
    private String collesctors;

    @Column(name = "prst")
    private Integer prst;

    @Column(name = "sbros")
    private String sbros;

    @Lob
    @Column(name = "description")
    private String description;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCreateYear() {
        return createYear;
    }

    public UnitDescription createYear(String createYear) {
        this.createYear = createYear;
        return this;
    }

    public void setCreateYear(String createYear) {
        this.createYear = createYear;
    }

    public String getSquare() {
        return square;
    }

    public UnitDescription square(String square) {
        this.square = square;
        return this;
    }

    public void setSquare(String square) {
        this.square = square;
    }

    public String getCollesctors() {
        return collesctors;
    }

    public UnitDescription collesctors(String collesctors) {
        this.collesctors = collesctors;
        return this;
    }

    public void setCollesctors(String collesctors) {
        this.collesctors = collesctors;
    }

    public Integer getPrst() {
        return prst;
    }

    public UnitDescription prst(Integer prst) {
        this.prst = prst;
        return this;
    }

    public void setPrst(Integer prst) {
        this.prst = prst;
    }

    public String getSbros() {
        return sbros;
    }

    public UnitDescription sbros(String sbros) {
        this.sbros = sbros;
        return this;
    }

    public void setSbros(String sbros) {
        this.sbros = sbros;
    }

    public String getDescription() {
        return description;
    }

    public UnitDescription description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UnitDescription unitDescription = (UnitDescription) o;
        if (unitDescription.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), unitDescription.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "UnitDescription{" +
            "id=" + getId() +
            ", createYear='" + getCreateYear() + "'" +
            ", square='" + getSquare() + "'" +
            ", collesctors='" + getCollesctors() + "'" +
            ", prst=" + getPrst() +
            ", sbros='" + getSbros() + "'" +
            ", description='" + getDescription() + "'" +
            "}";
    }
}
