-- Drop existing database and create a new one
DROP DATABASE IF EXISTS journal_dev;
CREATE DATABASE journal_dev;

\c journal_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    service_branch VARCHAR(255) NOT NULL,
    years_of_service INTEGER NOT NULL
);

CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    mood_rating INTEGER,
    is_veteran_specific BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    mood INTEGER NOT NULL,
    description TEXT NOT NULL,
    service_related_notes TEXT,
    custom_activity TEXT, 
    activity_rating INTEGER CHECK (activity_rating >= 1 AND activity_rating <= 5),
    activity_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (activity_id) REFERENCES activities(id)
);
