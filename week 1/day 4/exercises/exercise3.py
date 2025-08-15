from exercise2 import Dog

class PetDog(Dog):

    def __init__(self,trained=False):
        self.trained = trained

    def train(self):
        print(f"{self.bark()}")
        self.trained = True

    def play(self,*args):
        name_dogs=self.name +*args

        