CREATE TABLE IF NOT EXISTS trader (
    username varchar(256) PRIMARY KEY,
    first_name varchar(256),
    last_name varchar(256),
    date_created DATE

);

CREATE INDEX idx_trader_id_1 ON trader(trader_id);