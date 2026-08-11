CREATE TABLE hero (
                      id BIGSERIAL PRIMARY KEY,
                      name VARCHAR(100) NOT NULL,
                      role VARCHAR(150) NOT NULL,
                      tagline TEXT,
                      description TEXT,
                      profile_image VARCHAR(255),
                      resume_url VARCHAR(255),
                      github_url VARCHAR(255),
                      linkedin_url VARCHAR(255),
                      email VARCHAR(255)
);