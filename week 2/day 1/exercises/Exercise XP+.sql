-- create table students(
-- id serial primary key,
-- first_name varchar (50),
-- last_name varchar (50),
-- birth_date date 
-- );


-- INSERT INTO students (first_name, last_name, birth_date) 
-- VALUES ('Marc', 'Benichou', '1998-11-02');

-- INSERT INTO students (first_name, last_name, birth_date) 
-- VALUES ('Yoan', 'Cohen', '2010-12-03');

-- INSERT INTO students (first_name, last_name, birth_date) 
-- VALUES ('Lea', 'Benichou', '1987-07-27');

-- INSERT INTO students (first_name, last_name, birth_date) 
-- VALUES ('Amelia', 'Dux', '1996-04-07');

-- INSERT INTO students (first_name, last_name, birth_date) 
-- VALUES ('David', 'Grez', '2003-06-14');

-- INSERT INTO students (first_name, last_name, birth_date) 
-- VALUES ('Omer', 'Simpson', '1980-10-03');



select * from students;

select first_name, last_name from students;
select first_name, last_name from students where id = 2
select first_name, last_name from students where first_name ='Marc' and last_name = 'Benichou';
select first_name, last_name from students where last_name='Benichou' or first_name = 'Marc';
select first_name, last_name from students where first_name LIKE '%a%';
select first_name, last_name from students where first_name LIKE 'a%';
select first_name, last_name from students where first_name LIKE '%a';
select first_name, last_name from students where first_name LIKE '%a_'; 
select first_name, last_name from students where id in (1,3);

select * from students where birth_date >= '2000-01-01';
