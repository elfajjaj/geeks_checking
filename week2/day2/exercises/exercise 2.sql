-- _1

select * from customer;

-- _2

select first_name ||' '|| last_name As full_name
from customer;

-- _3

select distinct create_date from customer;

-- _4

select * from customer
order by first_name desc;

-- _5

select film_id , title, description, release_year, rental_rate 
from film
order by rental_rate;

-- _6

select a.address, a.phone
from customer c
JOIN address a ON c.address_id = a.address_id
where a.district = 'Texas';

-- _7

select * from film 
where film_id in (15,150);

-- _8

select film_id, title, description , length , rental_rate
from film
where title = 'Prison Break';

-- _9

select film_id, title, description , length , rental_rate
from film
where title LIKE 'Pr%';


-- _10

select * from film
order by rental_rate 
limit 10;

-- _11

select *
from (
    select *, row_number() over (order by rental_rate asc) as row_num
    from film
) sub
where row_num > 10 and row_num <= 20;

-- _12

select c.first_name, c.last_name, p.amount, p.payment_date
from customer c
join payment p on c.customer_id = p.customer_id
order by c.customer_id;

-- _13

select *
from film f
where not exists (
    select 1
    from inventory i
    where i.film_id = f.film_id
);

-- _14

select ci.city, co.country
from city ci
join country co on ci.country_id = co.country_id;

-- _15

select c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
from customer c
join payment p on c.customer_id = p.customer_id
order by p.staff_id;
 