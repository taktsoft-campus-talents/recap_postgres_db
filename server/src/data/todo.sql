DROP TABLE IF EXISTS todo;

CREATE TABLE todo (
id SERIAL PRIMARY KEY,
title VARCHAR(255),
description VARCHAR(255)
)

INSERT INTO todo (title, description) VALUES ('Title 1', 'Description 1'), ('Title 2', 'Description 2'), ('Title 3', 'Description 3')