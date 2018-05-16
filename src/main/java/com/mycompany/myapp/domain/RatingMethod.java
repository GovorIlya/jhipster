package com.mycompany.myapp.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A RatingMethod.
 */
@Entity
@Table(name = "rating_method")
public class RatingMethod implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "rating_head")
    private String ratingHead;

    @Lob
    @Column(name = "rating_method")
    private String ratingMethod;

    @Lob
    @Column(name = "rating_image")
    private byte[] ratingImage;

    @Column(name = "rating_image_content_type")
    private String ratingImageContentType;

    @Lob
    @Column(name = "rating_document")
    private byte[] ratingDocument;

    @Column(name = "rating_document_content_type")
    private String ratingDocumentContentType;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRatingHead() {
        return ratingHead;
    }

    public RatingMethod ratingHead(String ratingHead) {
        this.ratingHead = ratingHead;
        return this;
    }

    public void setRatingHead(String ratingHead) {
        this.ratingHead = ratingHead;
    }

    public String getRatingMethod() {
        return ratingMethod;
    }

    public RatingMethod ratingMethod(String ratingMethod) {
        this.ratingMethod = ratingMethod;
        return this;
    }

    public void setRatingMethod(String ratingMethod) {
        this.ratingMethod = ratingMethod;
    }

    public byte[] getRatingImage() {
        return ratingImage;
    }

    public RatingMethod ratingImage(byte[] ratingImage) {
        this.ratingImage = ratingImage;
        return this;
    }

    public void setRatingImage(byte[] ratingImage) {
        this.ratingImage = ratingImage;
    }

    public String getRatingImageContentType() {
        return ratingImageContentType;
    }

    public RatingMethod ratingImageContentType(String ratingImageContentType) {
        this.ratingImageContentType = ratingImageContentType;
        return this;
    }

    public void setRatingImageContentType(String ratingImageContentType) {
        this.ratingImageContentType = ratingImageContentType;
    }

    public byte[] getRatingDocument() {
        return ratingDocument;
    }

    public RatingMethod ratingDocument(byte[] ratingDocument) {
        this.ratingDocument = ratingDocument;
        return this;
    }

    public void setRatingDocument(byte[] ratingDocument) {
        this.ratingDocument = ratingDocument;
    }

    public String getRatingDocumentContentType() {
        return ratingDocumentContentType;
    }

    public RatingMethod ratingDocumentContentType(String ratingDocumentContentType) {
        this.ratingDocumentContentType = ratingDocumentContentType;
        return this;
    }

    public void setRatingDocumentContentType(String ratingDocumentContentType) {
        this.ratingDocumentContentType = ratingDocumentContentType;
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
        RatingMethod ratingMethod = (RatingMethod) o;
        if (ratingMethod.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), ratingMethod.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "RatingMethod{" +
            "id=" + getId() +
            ", ratingHead='" + getRatingHead() + "'" +
            ", ratingMethod='" + getRatingMethod() + "'" +
            ", ratingImage='" + getRatingImage() + "'" +
            ", ratingImageContentType='" + getRatingImageContentType() + "'" +
            ", ratingDocument='" + getRatingDocument() + "'" +
            ", ratingDocumentContentType='" + getRatingDocumentContentType() + "'" +
            "}";
    }
}
