SELECT ANIMAL_TYPE, count(*) as count
from ANIMAL_INS
group by animal_type
order by animal_type asc;
