CREATE TABLE IF NOT EXISTS chart (chart_id SERIAL PRIMARY KEY,note TEXT,symbol varchar(256),image bytea, entry_point REAL, sell_limit REAL,stop_limit REAL, username VARCHAR(256), date_created DATE, trade_type VARCHAR(256));

CREATE INDEX idx_chart_id_1 ON chart(chart_id);