package com.mycompany.myapp.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A ResearchMethod.
 */
@Entity
@Table(name = "research_method")
public class ResearchMethod implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "head_string")
    private String headString;

    @Lob
    @Column(name = "research_method")
    private String researchMethod;

    @Lob
    @Column(name = "method_image")
    private byte[] methodImage;

    @Column(name = "method_image_content_type")
    private String methodImageContentType;

    @Lob
    @Column(name = "jhi_file")
    private byte[] file;

    @Column(name = "jhi_file_content_type")
    private String fileContentType;

    @ManyToOne
    private Unit unit;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHeadString() {
        return headString;
    }

    public ResearchMethod headString(String headString) {
        this.headString = headString;
        return this;
    }

    public void setHeadString(String headString) {
        this.headString = headString;
    }

    public String getResearchMethod() {
        return researchMethod;
    }

    public ResearchMethod researchMethod(String researchMethod) {
        this.researchMethod = researchMethod;
        return this;
    }

    public void setResearchMethod(String researchMethod) {
        this.researchMethod = researchMethod;
    }

    public byte[] getMethodImage() {
        return methodImage;
    }

    public ResearchMethod methodImage(byte[] methodImage) {
        this.methodImage = methodImage;
        return this;
    }

    public void setMethodImage(byte[] methodImage) {
        this.methodImage = methodImage;
    }

    public String getMethodImageContentType() {
        return methodImageContentType;
    }

    public ResearchMethod methodImageContentType(String methodImageContentType) {
        this.methodImageContentType = methodImageContentType;
        return this;
    }

    public void setMethodImageContentType(String methodImageContentType) {
        this.methodImageContentType = methodImageContentType;
    }

    public byte[] getFile() {
        return file;
    }

    public ResearchMethod file(byte[] file) {
        this.file = file;
        return this;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public String getFileContentType() {
        return fileContentType;
    }

    public ResearchMethod fileContentType(String fileContentType) {
        this.fileContentType = fileContentType;
        return this;
    }

    public void setFileContentType(String fileContentType) {
        this.fileContentType = fileContentType;
    }

    public Unit getUnit() {
        return unit;
    }

    public ResearchMethod unit(Unit unit) {
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
        ResearchMethod researchMethod = (ResearchMethod) o;
        if (researchMethod.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), researchMethod.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ResearchMethod{" +
            "id=" + getId() +
            ", headString='" + getHeadString() + "'" +
            ", researchMethod='" + getResearchMethod() + "'" +
            ", methodImage='" + getMethodImage() + "'" +
            ", methodImageContentType='" + getMethodImageContentType() + "'" +
            ", file='" + getFile() + "'" +
            ", fileContentType='" + getFileContentType() + "'" +
            "}";
    }
}
