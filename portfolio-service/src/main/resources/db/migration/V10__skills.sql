CREATE TABLE skills (
                        id BIGSERIAL PRIMARY KEY,

                        category_id BIGINT NOT NULL,

                        name VARCHAR(100) NOT NULL,

                        display_order INTEGER NOT NULL,

                        CONSTRAINT fk_skill_category
                            FOREIGN KEY (category_id)
                                REFERENCES skill_categories(id)
                                ON DELETE CASCADE
);