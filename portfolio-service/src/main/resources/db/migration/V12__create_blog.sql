CREATE TABLE blogs (
                       id BIGSERIAL PRIMARY KEY,

                       title VARCHAR(255) NOT NULL,

                       slug VARCHAR(255) NOT NULL UNIQUE,

                       excerpt TEXT NOT NULL,

                       content TEXT NOT NULL,

                       category VARCHAR(100) NOT NULL,

                       cover_image VARCHAR(500),

                       reading_time INTEGER,

                       published_at TIMESTAMP,

                       display_order INTEGER,

                       published BOOLEAN NOT NULL DEFAULT FALSE,

                       created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

                       updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);