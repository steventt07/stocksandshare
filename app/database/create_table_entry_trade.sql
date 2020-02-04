CREATE TABLE IF NOT EXISTS entry_trade (
    entry_trade_id SERIAL PRIMARY KEY,
    image_id INTEGER REFERENCES image,
    entry_price REAL,
    sell_limit REAL,
    stop_limit REAL,
    date_created DATE,
    username varchar(256) REFERENCES trader,
    note TEXT
);

CREATE INDEX idx_entry_trade_id_1 ON entry_trade(entry_trade_id);