CREATE TABLE IF NOT EXISTS chart (chart_id SERIAL PRIMARY KEY,note varchar(256),symbol varchar(256),date_created DATE,image bytea, entrypoint INT, sellLimit INT,stopLimit INT, USERNAME VARCHAR(256))  );

CREATE INDEX idx_chart_id_1 ON chart(chart_id);