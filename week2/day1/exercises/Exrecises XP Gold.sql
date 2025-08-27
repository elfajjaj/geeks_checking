select first_name,last_name, birth_date 
from students 
order by last_name  
limit 4 ;

select first_name,last_name, birth_date
from students
order by birth_date desc
limit 1;

select first_name,last_name, birth_date
from students
limit 3
offset 2;










