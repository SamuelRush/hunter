DROP TABLE IF EXISTS users
CASCADE;
CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR (255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255) NOT NULL,
  email_cookie VARCHAR(255) UNIQUE NOT NULL,
  email_confirmed BOOLEAN NOT NULL,
  applicant BOOLEAN NOT NULL,
  company BOOLEAN NOT NULL,
  premium_applicant BOOLEAN NOT NULL,
  applicant_skill_one VARCHAR(255) NOT NULL,
  applicant_skill_two VARCHAR(255) NOT NULL,
  applicant_skill_three VARCHAR(255) NOT NULL
);
