CREATE TABLE IF NOT EXISTS trade (
    trade_id SERIAL PRIMARY KEY
    note_id INTEGER REFERENCES note,
    chart_id INTEGER REFERENCES chart,
    trader_id INT,
    entry_price FLOAT,
    exit_price FLOAT,
    time_entered DATE,
    time_exit DATE,
    symbol varchar(256),
    date_created DATE,
);

CREATE INDEX idx_trade_id_1 ON trade(trade_id);