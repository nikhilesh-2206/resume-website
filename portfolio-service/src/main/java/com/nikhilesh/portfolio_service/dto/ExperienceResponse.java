package com.nikhilesh.portfolio_service.dto;


import tools.jackson.databind.JsonNode;

import java.time.LocalDate;

public class ExperienceResponse {

    private Long id;
    private String companyName;
    private String designation;
    private String location;
    private String companyLogo;
    private LocalDate fromDate;
    private LocalDate toDate;
    private String summary;
    private JsonNode projectsWorkDone;
    private JsonNode majorTechnologies;
    private Integer displayOrder;

    public ExperienceResponse() {
    }

    public ExperienceResponse(
            Long id,
            String companyName,
            String designation,
            String location,
            String companyLogo,
            LocalDate fromDate,
            LocalDate toDate,
            String summary,
            JsonNode projectsWorkDone,
            JsonNode majorTechnologies,
            Integer displayOrder
    ) {
        this.id = id;
        this.companyName = companyName;
        this.designation = designation;
        this.location = location;
        this.companyLogo = companyLogo;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.summary = summary;
        this.projectsWorkDone = projectsWorkDone;
        this.majorTechnologies = majorTechnologies;
        this.displayOrder = displayOrder;
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

    public JsonNode getProjectsWorkDone() {
        return projectsWorkDone;
    }

    public JsonNode getMajorTechnologies() {
        return majorTechnologies;
    }

    public Integer getDisplayOrder() {
        return displayOrder;
    }

    public void setId(Long id) {
        this.id = id;
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

    public void setProjectsWorkDone(JsonNode projectsWorkDone) {
        this.projectsWorkDone = projectsWorkDone;
    }

    public void setMajorTechnologies(JsonNode majorTechnologies) {
        this.majorTechnologies = majorTechnologies;
    }

    public void setDisplayOrder(Integer displayOrder) {
        this.displayOrder = displayOrder;
    }
}