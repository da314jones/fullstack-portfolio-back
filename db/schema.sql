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

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    rating_before INTEGER CHECK (rating_before >= 1 AND rating_before <= 5),
    adjective_before VARCHAR(255), -- Assuming you store the mood adjective directly
    description TEXT NOT NULL,
    service_related_notes TEXT,
    activity VARCHAR(255),
    custom_activity TEXT,
    adjective_after VARCHAR(255), -- Assuming you store the mood adjective directly
    rating_after INTEGER CHECK (rating_after >= 1 AND rating_after <= 5),
    updated_at DATE DEFAULT CURRENT_DATE
);
