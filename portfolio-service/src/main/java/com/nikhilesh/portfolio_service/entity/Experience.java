package com.nikhilesh.portfolio_service.entity;

import com.nikhilesh.portfolio_service.dto.ProjectWork;
import jakarta.persistence.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import tools.jackson.databind.JsonNode;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "experience")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String designation;

    private String location;

    @Column(name = "company_logo")
    private String companyLogo;

    @Column(name = "from_date", nullable = false)
    private LocalDate fromDate;

    @Column(name = "to_date")
    private LocalDate toDate;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "projects_work_done", columnDefinition = "jsonb")
    private List<ProjectWork> projectsWorkDone;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "major_technologies", columnDefinition = "jsonb")
    private List<String> majorTechnologies;

    @Column(name = "display_order", nullable = false)
    private Integer displayOrder;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    public Experience() {
    }

    public Long getId() {
        return id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public String getDesignation() {
        return designation;
    }

    public String getLocation() {
        return location;
    }

    public String getCompanyLogo() {
        return companyLogo;
    }

    public LocalDate getFromDate() {
        return fromDate;
    }

    public LocalDate getToDate() {
        return toDate;
    }

    public String getSummary() {
        return summary;
    }

    public Integer getDisplayOrder() {
        return displayOrder;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public List<ProjectWork> getProjectsWorkDone() {
        return projectsWorkDone;
    }

    public void setProjectsWorkDone(List<ProjectWork> projectsWorkDone) {
        this.projectsWorkDone = projectsWorkDone;
    }

    public List<String> getMajorTechnologies() {
        return majorTechnologies;
    }

    public void setMajorTechnologies(List<String> majorTechnologies) {
        this.majorTechnologies = majorTechnologies;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setCompanyLogo(String companyLogo) {
        this.companyLogo = companyLogo;
    }

    public void setFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
    }

    public void setToDate(LocalDate toDate) {
        this.toDate = toDate;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public void setDisplayOrder(Integer displayOrder) {
        this.displayOrder = displayOrder;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}