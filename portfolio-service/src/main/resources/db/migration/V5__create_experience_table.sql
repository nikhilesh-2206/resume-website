CREATE TABLE experience (
                            id BIGSERIAL PRIMARY KEY,

                            company_name VARCHAR(255) NOT NULL,

                            designation VARCHAR(255) NOT NULL,

                            location VARCHAR(255),

                            company_logo VARCHAR(500),

                            from_date DATE NOT NULL,

                            to_date DATE,

                            summary TEXT,

                            projects_work_done JSONB,

                            major_technologies JSONB,

                            display_order INTEGER NOT NULL,

                            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

                            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);