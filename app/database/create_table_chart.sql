CREATE TABLE IF NOT EXISTS chart (
    chart_id SERIAL PRIMARY KEY
    note varchar(256),
    symbol varchar(256),
    date_created DATE,
    image bytea,
);

CREATE INDEX idx_chart_id_1 ON chart(chart_id);