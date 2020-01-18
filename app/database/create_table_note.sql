CREATE TABLE IF NOT EXISTS note (
    note_id SERIAL PRIMARY KEY,
    date_created DATE,
    note TEXT,
);

CREATE INDEX idx_note_id_1 ON note(note_id);