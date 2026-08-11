CREATE TABLE social_link (

                             id BIGSERIAL PRIMARY KEY,

                             hero_id BIGINT NOT NULL,

                             type VARCHAR(50) NOT NULL,

                             url VARCHAR(500) NOT NULL,

                             display_order INTEGER NOT NULL,

                             CONSTRAINT fk_social_link_hero
                                 FOREIGN KEY (hero_id)
                                     REFERENCES hero(id)
                                     ON DELETE CASCADE
);

CREATE INDEX idx_social_link_hero
    ON social_link(hero_id);