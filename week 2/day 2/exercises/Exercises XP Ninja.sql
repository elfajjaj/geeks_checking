-- Exercise 1 : Bonus Public Database (Continuation of XP)

-- Instructions

-- 1.Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.


SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC, last_name ASC
LIMIT 2 OFFSET (
    SELECT COUNT(*) - 2 FROM customers
);

-- 2.Use SQL to delete all purchases made by Scott.

DELETE FROM purchases
WHERE customer_id = (
    SELECT customer_id FROM customers
    WHERE first_name = 'Scott' AND last_name = 'Scott'
);


-- 3.Does Scott still exist in the customers table, even though he has been deleted? Try and find him.

SELECT * 
FROM customers
WHERE first_name = 'Scott' AND last_name = 'Scott';


-- 4.Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order will appear, although instead of the customer’s first and last name, you should only see empty/blank. (Which kind of join should you use?).

SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.customer_id;


-- 5.Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order will NOT appear. (Which kind of join should you use?)

SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.customer_id;