package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Unit.
 */
@Entity
@Table(name = "unit")
public class Unit implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "unit_name", nullable = false)
    private String unitName;

    @OneToOne
    @JoinColumn(unique = true)
    private UnitDescription unitDescription;

    @OneToMany(mappedBy = "unit")
    @JsonIgnore
    private Set<Image> images = new HashSet<>();

    @OneToMany(mappedBy = "unit")
    @JsonIgnore
    private Set<ResearchMethod> researchMethods = new HashSet<>();

    @OneToMany(mappedBy = "unit")
    @JsonIgnore
    private Set<TypesProblems> typesProblems = new HashSet<>();

    @OneToMany(mappedBy = "unit")
    @JsonIgnore
    private Set<RatingMethod> ratingMethods = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUnitName() {
        return unitName;
    }

    public Unit unitName(String unitName) {
        this.unitName = unitName;
        return this;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }

    public UnitDescription getUnitDescription() {
        return unitDescription;
    }

    public Unit unitDescription(UnitDescription unitDescription) {
        this.unitDescription = unitDescription;
        return this;
    }

    public void setUnitDescription(UnitDescription unitDescription) {
        this.unitDescription = unitDescription;
    }

    public Set<Image> getImages() {
        return images;
    }

    public Unit images(Set<Image> images) {
        this.images = images;
        return this;
    }

    public Unit addImage(Image image) {
        this.images.add(image);
        image.setUnit(this);
        return this;
    }

    public Unit removeImage(Image image) {
        this.images.remove(image);
        image.setUnit(null);
        return this;
    }

    public void setImages(Set<Image> images) {
        this.images = images;
    }

    public Set<ResearchMethod> getResearchMethods() {
        return researchMethods;
    }

    public Unit researchMethods(Set<ResearchMethod> researchMethods) {
        this.researchMethods = researchMethods;
        return this;
    }

    public Unit addResearchMethod(ResearchMethod researchMethod) {
        this.researchMethods.add(researchMethod);
        researchMethod.setUnit(this);
        return this;
    }

    public Unit removeResearchMethod(ResearchMethod researchMethod) {
        this.researchMethods.remove(researchMethod);
        researchMethod.setUnit(null);
        return this;
    }

    public void setResearchMethods(Set<ResearchMethod> researchMethods) {
        this.researchMethods = researchMethods;
    }

    public Set<TypesProblems> getTypesProblems() {
        return typesProblems;
    }

    public Unit typesProblems(Set<TypesProblems> typesProblems) {
        this.typesProblems = typesProblems;
        return this;
    }

    public Unit addTypesProblems(TypesProblems typesProblems) {
        this.typesProblems.add(typesProblems);
        typesProblems.setUnit(this);
        return this;
    }

    public Unit removeTypesProblems(TypesProblems typesProblems) {
        this.typesProblems.remove(typesProblems);
        typesProblems.setUnit(null);
        return this;
    }

    public void setTypesProblems(Set<TypesProblems> typesProblems) {
        this.typesProblems = typesProblems;
    }

    public Set<RatingMethod> getRatingMethods() {
        return ratingMethods;
    }

    public Unit ratingMethods(Set<RatingMethod> ratingMethods) {
        this.ratingMethods = ratingMethods;
        return this;
    }

    public Unit addRatingMethod(RatingMethod ratingMethod) {
        this.ratingMethods.add(ratingMethod);
        ratingMethod.setUnit(this);
        return this;
    }

    public Unit removeRatingMethod(RatingMethod ratingMethod) {
        this.ratingMethods.remove(ratingMethod);
        ratingMethod.setUnit(null);
        return this;
    }

    public void setRatingMethods(Set<RatingMethod> ratingMethods) {
        this.ratingMethods = ratingMethods;
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
        Unit unit = (Unit) o;
        if (unit.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), unit.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Unit{" +
            "id=" + getId() +
            ", unitName='" + getUnitName() + "'" +
            "}";
    }
}
