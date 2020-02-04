CREATE TABLE IF NOT EXISTS watchlist (
    watchlist_id SERIAL PRIMARY KEY,
    username varchar(256) REFERENCES trader,
    image_id INTEGER REFERENCES image,
    symbol varchar(256),
    date_created DATE,
    note TEXT,
    chart_id INTEGER REFERENCES chart
);

CREATE INDEX idx_watchlist_id_1 ON watchlist(watchlist_id);