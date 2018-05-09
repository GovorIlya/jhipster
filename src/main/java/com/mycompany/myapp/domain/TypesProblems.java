package com.mycompany.myapp.domain;


import javax.persistence.*;

import java.io.Serializable;
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
    @Column(name = "proyavlenie")
    private String proyavlenie;

    @Lob
    @Column(name = "reasons")
    private String reasons;

    @Lob
    @Column(name = "profilactika")
    private String profilactika;

    @Lob
    @Column(name = "problem_image")
    private byte[] problemImage;

    @Column(name = "problem_image_content_type")
    private String problemImageContentType;

    @Lob
    @Column(name = "types_document")
    private byte[] typesDocument;

    @Column(name = "types_document_content_type")
    private String typesDocumentContentType;

    @ManyToOne
    private Unit unit;

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

    public String getProyavlenie() {
        return proyavlenie;
    }

    public TypesProblems proyavlenie(String proyavlenie) {
        this.proyavlenie = proyavlenie;
        return this;
    }

    public void setProyavlenie(String proyavlenie) {
        this.proyavlenie = proyavlenie;
    }

    public String getReasons() {
        return reasons;
    }

    public TypesProblems reasons(String reasons) {
        this.reasons = reasons;
        return this;
    }

    public void setReasons(String reasons) {
        this.reasons = reasons;
    }

    public String getProfilactika() {
        return profilactika;
    }

    public TypesProblems profilactika(String profilactika) {
        this.profilactika = profilactika;
        return this;
    }

    public void setProfilactika(String profilactika) {
        this.profilactika = profilactika;
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

    public byte[] getTypesDocument() {
        return typesDocument;
    }

    public TypesProblems typesDocument(byte[] typesDocument) {
        this.typesDocument = typesDocument;
        return this;
    }

    public void setTypesDocument(byte[] typesDocument) {
        this.typesDocument = typesDocument;
    }

    public String getTypesDocumentContentType() {
        return typesDocumentContentType;
    }

    public TypesProblems typesDocumentContentType(String typesDocumentContentType) {
        this.typesDocumentContentType = typesDocumentContentType;
        return this;
    }

    public void setTypesDocumentContentType(String typesDocumentContentType) {
        this.typesDocumentContentType = typesDocumentContentType;
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
            ", proyavlenie='" + getProyavlenie() + "'" +
            ", reasons='" + getReasons() + "'" +
            ", profilactika='" + getProfilactika() + "'" +
            ", problemImage='" + getProblemImage() + "'" +
            ", problemImageContentType='" + getProblemImageContentType() + "'" +
            ", typesDocument='" + getTypesDocument() + "'" +
            ", typesDocumentContentType='" + getTypesDocumentContentType() + "'" +
            "}";
    }
}
