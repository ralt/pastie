-- CREATE EXTENSION "uuid-ossp" must be run as root to support the UUID type.

CREATE TABLE pastie (
    uuid uuid PRIMARY KEY,
    content text NOT NULL
)
