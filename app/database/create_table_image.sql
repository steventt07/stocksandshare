CREATE TABLE IF NOT EXISTS image (
    image_id SERIAL PRIMARY KEY,
    image_name varchar(256),
    image_type varchar(256),
    image_bytes bytea,
    symbol varchar(256),
    username varchar(256) REFERENCES trader,
    date_created DATE
);

CREATE INDEX idx_image_id_1 ON image(image_id);