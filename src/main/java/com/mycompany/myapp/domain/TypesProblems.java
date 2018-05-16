package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A TypesProblems.
 */
@Entity
@Table(name = "types_problems")
public class TypesProblems implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name_of_type")
    private String nameOfType;

    @Lob
    @Column(name = "problem_image")
    private byte[] problemImage;

    @Column(name = "problem_image_content_type")
    private String problemImageContentType;

    @ManyToOne
    private Unit unit;

    @OneToMany(mappedBy = "typesProblems")
    @JsonIgnore
    private Set<Proyavlenie> proyavlenies = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameOfType() {
        return nameOfType;
    }

    public TypesProblems nameOfType(String nameOfType) {
        this.nameOfType = nameOfType;
        return this;
    }

    public void setNameOfType(String nameOfType) {
        this.nameOfType = nameOfType;
    }

    public byte[] getProblemImage() {
        return problemImage;
    }

    public TypesProblems problemImage(byte[] problemImage) {
        this.problemImage = problemImage;
        return this;
    }

    public void setProblemImage(byte[] problemImage) {
        this.problemImage = problemImage;
    }

    public String getProblemImageContentType() {
        return problemImageContentType;
    }

    public TypesProblems problemImageContentType(String problemImageContentType) {
        this.problemImageContentType = problemImageContentType;
        return this;
    }

    public void setProblemImageContentType(String problemImageContentType) {
        this.problemImageContentType = problemImageContentType;
    }

    public Unit getUnit() {
        return unit;
    }

    public TypesProblems unit(Unit unit) {
        this.unit = unit;
        return this;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public Set<Proyavlenie> getProyavlenies() {
        return proyavlenies;
    }

    public TypesProblems proyavlenies(Set<Proyavlenie> proyavlenies) {
        this.proyavlenies = proyavlenies;
        return this;
    }

    public TypesProblems addProyavlenie(Proyavlenie proyavlenie) {
        this.proyavlenies.add(proyavlenie);
        proyavlenie.setTypesProblems(this);
        return this;
    }

    public TypesProblems removeProyavlenie(Proyavlenie proyavlenie) {
        this.proyavlenies.remove(proyavlenie);
        proyavlenie.setTypesProblems(null);
        return this;
    }

    public void setProyavlenies(Set<Proyavlenie> proyavlenies) {
        this.proyavlenies = proyavlenies;
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
        TypesProblems typesProblems = (TypesProblems) o;
        if (typesProblems.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), typesProblems.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TypesProblems{" +
            "id=" + getId() +
            ", nameOfType='" + getNameOfType() + "'" +
            ", problemImage='" + getProblemImage() + "'" +
            ", problemImageContentType='" + getProblemImageContentType() + "'" +
            "}";
    }
}
