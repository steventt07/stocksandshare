CREATE TABLE IF NOT EXISTS trade (
    trade_id SERIAL PRIMARY KEY,
    entry_trade_id INTEGER REFERENCES entry_trade,
    exit_trade_id INTEGER REFERENCES exit_trade,
    username varchar(256) REFERENCES trader,
    trade_type varchar(256),
    symbol varchar(256),
    chart_id INTEGER REFERENCES chart
);

CREATE INDEX idx_trade_id_1 ON trade(trade_id);