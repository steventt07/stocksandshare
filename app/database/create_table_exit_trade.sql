CREATE TABLE IF NOT EXISTS exit_trade (
    exit_trade_id SERIAL PRIMARY KEY,
    image_id INTEGER REFERENCES image,
    exit_price REAL,
    date_created DATE,
    username varchar(256) REFERENCES trader,
    note TEXT
);

CREATE INDEX idx_exit_trade_id_1 ON exit_trade(exit_trade_id);