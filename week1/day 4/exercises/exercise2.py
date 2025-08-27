class Dog():

    def __init__(self,name, age, weight):
        self.name=name
        self.age=age
        self.weight=weight

    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return (self.weight /self.age)*10
    
    def fight(self,other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} won the fight against {other_dog.name}"
        elif self_power < other_power:
            return f"{other_dog.name} won the fight against {self.name}"
        else:
            return f"{self.name} and {other_dog.name} are evenly matched"


dog1 = Dog("Max", 5, 20)
dog2 = Dog("Buddy", 3, 15)
dog3 = Dog("Rocky", 4, 25)

# Test barking
print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

# Test running speed
print(f"{dog1.name}'s speed: {dog1.run_speed()}")
print(f"{dog2.name}'s speed: {dog2.run_speed()}")
print(f"{dog3.name}'s speed: {dog3.run_speed()}")

# Test fighting
print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))