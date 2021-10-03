BEGIN;
DROP TABLE IF EXISTS users, products, cart, cart_items CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE products (
     id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL, 
    price VARCHAR(10) NOT NULL,
    category VARCHAR(100) NOT NULL
);
CREATE TABLE cart_items (
     id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    quentity INTEGER NOT NULL
);

COMMIT;