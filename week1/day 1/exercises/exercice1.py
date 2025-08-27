# Exercice 1:
print("Hello world\n"*4)

# Exercice 2:
number=99**3
print(number*8)

# Exercice 3:
my_name="fatima"
user_name=input("enter your name please: ")

if my_name == user_name:
    print("wooow! i have the same name")
else:
    print("nice to meet you "+user_name+"!")

# Exercice 4:
user_height =int(input("enter you height please: "))

if user_height>145:
    print("you are tall enough to ride.")
else:
    print("you need to grow some more to ride.")

# Exercice 5:
my_fav_numbers={3,10,9}
my_fav_numbers.add(16)
my_fav_numbers.add(8)
my_fav_numbers.pop()
print(my_fav_numbers)
friend_fav_numbers={1,2,14}
our_fav_numbers= my_fav_numbers | friend_fav_numbers
print(our_fav_numbers)

# Exercice 6:
print("Tuples are immutable lists, which means items can’t be changed.")

# Exercice 7:
basket = ["Banana", "Apples", "Oranges", "Blueberries"];
print(basket)
basket.remove("Banana")
print(basket)
basket.remove("Blueberries")
print(basket)
basket.append("kiwi")
print(basket)
basket.insert(0,"Apples")
print(basket)
count_apple=basket.count("Apples")
print(count_apple)
basket.clear()
print(basket)

# Exercice 8:
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders :
    sandwich_orders.remove("Pastrami sandwich")
    print(sandwich_orders)
finished_sandwiches = []

for sandwich in sandwich_orders:
    print(f"i made your {sandwich}")
    finished_sandwiches.insert(0,sandwich)
