CRETE DATABASE asfus_db IF NOT EXISTS;

CREATE TABLE associates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  approved BOOLEAN DEFAULT false
);

CREATE TABLE dependents (
  id SERIAL PRIMARY KEY,
  associate_id INT REFERENCES associates(id) ON DELETE CASCADE,
  name VARCHAR(100),
  age INT
);
