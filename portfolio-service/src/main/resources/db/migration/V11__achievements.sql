CREATE TABLE achievements (
                              id BIGSERIAL PRIMARY KEY,

                              title VARCHAR(255) NOT NULL,

                              description TEXT NOT NULL,

                              organization VARCHAR(255),

                              achievement_date VARCHAR(100),

                              display_order INTEGER NOT NULL,

                              featured BOOLEAN NOT NULL DEFAULT FALSE
);