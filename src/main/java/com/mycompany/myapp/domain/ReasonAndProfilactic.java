package com.mycompany.myapp.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A ReasonAndProfilactic.
 */
@Entity
@Table(name = "reason_and_profilactic")
public class ReasonAndProfilactic implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "text_2")
    private String text2;

    @Column(name = "text_3")
    private String text3;

    @ManyToOne
    private Proyavlenie proyavlenie;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText2() {
        return text2;
    }

    public ReasonAndProfilactic text2(String text2) {
        this.text2 = text2;
        return this;
    }

    public void setText2(String text2) {
        this.text2 = text2;
    }

    public String getText3() {
        return text3;
    }

    public ReasonAndProfilactic text3(String text3) {
        this.text3 = text3;
        return this;
    }

    public void setText3(String text3) {
        this.text3 = text3;
    }

    public Proyavlenie getProyavlenie() {
        return proyavlenie;
    }

    public ReasonAndProfilactic proyavlenie(Proyavlenie proyavlenie) {
        this.proyavlenie = proyavlenie;
        return this;
    }

    public void setProyavlenie(Proyavlenie proyavlenie) {
        this.proyavlenie = proyavlenie;
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
        ReasonAndProfilactic reasonAndProfilactic = (ReasonAndProfilactic) o;
        if (reasonAndProfilactic.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), reasonAndProfilactic.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ReasonAndProfilactic{" +
            "id=" + getId() +
            ", text2='" + getText2() + "'" +
            ", text3='" + getText3() + "'" +
            "}";
    }
}
