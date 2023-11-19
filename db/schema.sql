DROP DATABASE IF EXISTS journal_dev;
CREATE DATABASE journal_dev;

\c journal_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    service_branch VARCHAR(255),
    years_of_service INTEGER
);

CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    moodRating INTEGER,
    is_veteran_specific BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    mood INTEGER NOT NULL,
    description TEXT,
    service_related_notes TEXT,
    activity_id INTEGER,
    activity_rating INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (activity_id) REFERENCES ActivitySuggestions(id)
);

