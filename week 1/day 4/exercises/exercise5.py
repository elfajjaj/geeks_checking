from exercise4 import Family

class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{name}'s power is: {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old!")
                return
        print(f"No member named {name} found.")

    def incredible_presentation(self):
        print("\n*** Here is our powerful family ***")
        super().family_presentation()

incredibles_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
     'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
     'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles_family = TheIncredibles("Incredibles", incredibles_members)
incredibles_family.incredible_presentation()
incredibles_family.use_power("Michael")

incredibles_family.born(name="Baby Jack", age=1, gender="Male",
                        is_child=True, power="Unknown Power", incredible_name="Jackie")

incredibles_family.incredible_presentation()