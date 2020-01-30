DROP TABLE IF EXISTS postings
CASCADE;
CREATE TABLE postings
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  trait_one VARCHAR(255) UNIQUE NOT NULL,
  trait_two VARCHAR(255) UNIQUE NOT NULL,
  trait_three VARCHAR(255) UNIQUE NOT NULL,
  job_title VARCHAR(255) UNIQUE NOT NULL,
  job_descriptions VARCHAR(255) UNIQUE NOT NULL,
  expiry DATE NOT NULL,
  active BOOLEAN NOT NULL
);
