create table items(
item_id SERIAL Primary Key,
name VARCHAR(50) Not Null,
price INT Not Null
);

INSERT INTO items (name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

create table customers (
customer_id SERIAL Primary Key,
first_name VARCHAR(50),
last_name VARCHAR(50)
);

INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

select * from items;
select * from customers;

select * from items where price > 80;
select * from items where price <= 300;
select * from customers where last_name= 'Smith';
select * from customers where last_name = 'Jones';
select * from customers where first_name !='Scott';

