-- Exercice 1:

-- 1.1/

SELECT rating, COUNT(*) AS total_films
FROM film
GROUP BY rating;

-- 1.2/

SELECT film_id, title, rating
FROM film
WHERE rating IN ('G', 'PG-13');

-- 1.2.1/

SELECT film_id, title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;

-- 3/

UPDATE customer
SET first_name = 'Fatima',
    last_name = 'Ezzahra',
    email = 'fatimaezzahra@example.com'
WHERE customer_id = 1;

-- 4/

SELECT address
FROM address 

UPDATE address
SET address = '123 Main Street',
WHERE address_id = 5;



-- Exercice 2:

-- UPDATE

-- 1/
UPDATE students
SET birth_date = '1998-11-02'
WHERE first_name = 'Lea' AND last_name = 'Benichou'
   OR first_name = 'Marc' AND last_name = 'Benichou';

-- 2/

UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

-- DELETE

-- 1/

DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

-- COUNT

-- 1/

SELECT COUNT(*) AS total_students
FROM students;

-- 2/

SELECT COUNT(*) AS born_after_2000
FROM students
WHERE birth_date > '2000-01-01';

-- Insert / Alter

-- 1/

ALTER TABLE students
ADD COLUMN math_grade INT;

-- 2/

UPDATE students SET math_grade = 80 WHERE id = 1;

-- 3/

UPDATE students SET math_grade = 90 WHERE id IN (2,4);

-- 4/
UPDATE students SET math_grade = 40 WHERE id = 6;

-- 5/
SELECT COUNT(*) AS above_83
FROM students
WHERE math_grade > 83;

-- 6/

INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '1998-11-02', 70);

-- 7/
SELECT first_name, last_name, COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name, last_name;

-- SUM

-- 1/

SELECT SUM(math_grade) AS total_sum
FROM students;


-- Exercice 3:

-- PART1:

CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    item_id INT REFERENCES items(item_id),
    quantity_purchased INT
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT item_id FROM items WHERE name = 'Fan'),
    1
);


INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT item_id FROM items WHERE name = 'Large Desk'),
    10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT item_id FROM items WHERE name = 'Small Desk'),
    2
);


-- PART2:
-- 1.1/

SELECT * FROM purchases;

-- 1.2/

SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id;

-- 1.3/

SELECT * 
FROM purchases
WHERE customer_id = 5;

-- 1.4/

SELECT p.id, c.first_name, c.last_name, i.name AS item_name, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id
WHERE i.name IN ('Large Desk', 'Small Desk');

-- 2/

SELECT DISTINCT c.first_name, c.last_name, i.name AS item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id;

-- 3/

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (2, NULL, 1);