# challenge :

class Farm():

    def __init__(self,farm_name):
        self.name = farm_name
        self.animals = {}
        
    def add_animal(self,animal_type,count= 1):
    
        if animal_type in self.animals:
            self.animals[animal_type] += count 
        else:
            self.animals[animal_type] = count

    def get_info(self): 
        print(f"{self.name}'s farm : \n")
        for animal_type,count in self.animals.items():
           print(f"{animal_type :<10} : {count}")
        print("\nE-I-E-I-O!")

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        anim_list = []
        for a in self.get_animal_types():
            if  self.animals[a]> 1:
                anim_list.append(a + "s")
            else:
                anim_list.append(a)

        animals_str = ", ".join(anim_list[:-1]) + " and " + anim_list[-1]
        print(f"{self.name}'s farm has {animals_str}.")
        


Macdonalds = Farm("McDonald")
Macdonalds.add_animal("cow",5)
Macdonalds.add_animal("sheep")
Macdonalds.add_animal("sheep")
Macdonalds.add_animal("goat", 12)
Macdonalds.get_animal_types()
Macdonalds.get_info()
Macdonalds.get_short_info()





