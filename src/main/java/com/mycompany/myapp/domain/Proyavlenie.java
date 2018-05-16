package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Proyavlenie.
 */
@Entity
@Table(name = "proyavlenie")
public class Proyavlenie implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "text_1")
    private String text1;

    @ManyToOne
    private TypesProblems typesProblems;

    @OneToMany(mappedBy = "proyavlenie")
    @JsonIgnore
    private Set<ReasonAndProfilactic> reasonAndProfilactics = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText1() {
        return text1;
    }

    public Proyavlenie text1(String text1) {
        this.text1 = text1;
        return this;
    }

    public void setText1(String text1) {
        this.text1 = text1;
    }

    public TypesProblems getTypesProblems() {
        return typesProblems;
    }

    public Proyavlenie typesProblems(TypesProblems typesProblems) {
        this.typesProblems = typesProblems;
        return this;
    }

    public void setTypesProblems(TypesProblems typesProblems) {
        this.typesProblems = typesProblems;
    }

    public Set<ReasonAndProfilactic> getReasonAndProfilactics() {
        return reasonAndProfilactics;
    }

    public Proyavlenie reasonAndProfilactics(Set<ReasonAndProfilactic> reasonAndProfilactics) {
        this.reasonAndProfilactics = reasonAndProfilactics;
        return this;
    }

    public Proyavlenie addReasonAndProfilactic(ReasonAndProfilactic reasonAndProfilactic) {
        this.reasonAndProfilactics.add(reasonAndProfilactic);
        reasonAndProfilactic.setProyavlenie(this);
        return this;
    }

    public Proyavlenie removeReasonAndProfilactic(ReasonAndProfilactic reasonAndProfilactic) {
        this.reasonAndProfilactics.remove(reasonAndProfilactic);
        reasonAndProfilactic.setProyavlenie(null);
        return this;
    }

    public void setReasonAndProfilactics(Set<ReasonAndProfilactic> reasonAndProfilactics) {
        this.reasonAndProfilactics = reasonAndProfilactics;
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
        Proyavlenie proyavlenie = (Proyavlenie) o;
        if (proyavlenie.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), proyavlenie.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Proyavlenie{" +
            "id=" + getId() +
            ", text1='" + getText1() + "'" +
            "}";
    }
}
