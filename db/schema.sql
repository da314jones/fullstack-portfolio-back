DROP DATABASE IF EXISTS journal_entries_dev;
CREATE DATABASE journal_entries_dev;

/c journal_entries_dev;

CREATE TABLE journal_entries_dev (
    id SERIAL PRIMARY KEY,
    "remaining table values upon app idea approval"
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);