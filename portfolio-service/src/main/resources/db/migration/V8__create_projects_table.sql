CREATE TABLE projects (
                          id BIGSERIAL PRIMARY KEY,

                          name VARCHAR(255) NOT NULL,

                          short_description TEXT NOT NULL,

                          description TEXT,

                          technologies TEXT,

                          github_url VARCHAR(500),

                          image_url VARCHAR(500),

                          display_order INTEGER NOT NULL DEFAULT 0,

                          featured BOOLEAN NOT NULL DEFAULT FALSE
);