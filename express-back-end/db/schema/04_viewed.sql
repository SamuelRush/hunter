DROP TABLE IF EXISTS viewed
CASCADE;
CREATE TABLE viewed
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  posting_id INTEGER REFERENCES postings(id) ON DELETE CASCADE,
  favourite BOOLEAN NOT NULL
);
