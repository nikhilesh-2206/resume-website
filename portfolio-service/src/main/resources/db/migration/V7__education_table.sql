CREATE TABLE education (
                           id BIGSERIAL PRIMARY KEY,
                           degree VARCHAR(255) NOT NULL,
                           field_of_study VARCHAR(255),
                           institution VARCHAR(255) NOT NULL,
                           location VARCHAR(255),
                           start_year INT,
                           end_year INT,
                           description TEXT,
                           display_order INT DEFAULT 0
);