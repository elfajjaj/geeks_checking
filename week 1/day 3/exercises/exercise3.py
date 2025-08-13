# exercise 1:
    
class Cat():
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat("lolo", 1)
cat2 = Cat("soso", 4)
cat3 = Cat("mimi", 3)

def oldest_cat():
    oldest = cat1 
    for cat in [cat1,cat2,cat3]:
        if cat.age > oldest.age:
            oldest= cat
    return oldest
oldest = oldest_cat()     
print(f"The oldest cat is {oldest.name}, is {oldest.age} years old")


# exercise 2:
class dog():
    def __init__(self,name,height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        print(f"{self.name} jumps {self.height *2} cm high!")

davids_dog=dog("Rex",50)
print(f"Davids's dog name: {davids_dog.name}")
print(f"Davids's dog height: {davids_dog.height}")

davids_dog.bark()
davids_dog.jump()

sarahs_dog=dog("Teacup",20)
print(f"Sarah's dog name : {sarahs_dog.name}")
print(f"Sarah's dog height : {sarahs_dog.height}")

sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger")
else:
    print(f"{sarahs_dog.name} is bigger")


# exercise 3:

class Song():
    def __init__(self,lyrics):
        self.lyrics=lyrics
    def sing_me_a_song(self):
        for i in self.lyrics:
            print(i)

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# exercise 4:


class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        print(f"Animals in {self.name}:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} not found in the zoo.")

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []
            grouped_animals[first_letter].append(animal)
        return grouped_animals

    def get_groups(self):
        groups = self.sort_animals()
        print("Animal Groups:")
        for letter, animals in groups.items():
            if len(animals) == 1:
                print(f"{letter}: {animals[0]}")
            else:
                print(f"{letter}: {animals}")

new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")

new_york_zoo.get_animals()

new_york_zoo.sell_animal("Bear")
new_york_zoo.get_animals()

new_york_zoo.get_groups()