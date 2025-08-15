# class Etudiant:
# #constricteur = methode magique
     
#      def __init__(self,name,monAge,maNote):
#          self.nom = name
#          self.age = monAge
#          self.note = maNote
#      def ajouterNotes(self,points):
#          print(self.note + points)
    

# #creation d'un objet de la classe Etudiant = 'instranciation'

# etd1 = Etudiant("ali",26,17)
# etd1.ajouterNotes(2)
# print(etd1.nom)

#################################################################

# class Dog():
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog

# shelter_dog = Dog('Rex')
# other_shelter_dog = Dog("Jimmy")


############################################################

# class Dog():
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog

#     def bark(self):
#         print(f"{self.name} barks ! WAF")

#     def walk(self, number_of_meters):
#         print(f"{self.name} walked {number_of_meters} meters")

#     def rename(self, new_name):
#         self.name = new_name
#         print("name is : "+ self.name)

# shelter_dog = Dog("Rex")
# shelter_dog.rename("Paul")

##############################################################3

# class Person():
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

#   def show_details(self):
#     print("Hello my name is " + self.name)

# first_person = Person("John", 36)
# first_person.show_details()

##############################################################"

# class Computer():

#     def description(self, name):
#         """
#         This is a totally useless function
#         """
#         print("I am a computer, my name is", name)
#         #Analyse the line below
#         print(self)

# mac_computer = Computer()
# mac_computer.brand = "Apple"
# print(mac_computer.brand)

# dell_computer = Computer()

# Computer.description(dell_computer, "Mark")
# # IS THE SAME AS:
# dell_computer.description("Mark")

##########################################################""

# class BankAccount:

#     def __init__(self, account_number, balance=0):
#         self.account_number = account_number
#         self.balance = balance
#         self.transactions = []

#     def view_balance(self):
#         self.transactions.append("View Balance")
#         print(f"Balance for account {self.account_number}: {self.balance}")

#     def deposit(self, amount):
#         if amount <= 0:
#             print("Invalid amount")
#         elif amount < 100:
#             print("Minimum deposit is 100")
#         else:
#             self.balance += amount
#             self.transactions.append(f"Deposit: {amount}")
#             print("Deposit Succcessful")

#     def withdraw(self, amount):
#         if amount > self.balance:
#             print("Insufficient Funds")
#         else:
#             self.balance -= amount
#             self.transactions.append(f"Withdraw: {amount}")
#             print("Withdraw Approved")
#             return amount

#     def view_transactions(self):
#         print("Transactions:")
#         print("-------------")
#         for transaction in self.transactions:
#             print(transaction)


#############################################################

# class Door:
#     def __init__(self, is_opened=False):
#         self.is_opened = is_opened

#     def open_door(self):
#         if not self.is_opened:
#             self.is_opened = True
#             print("The door is now open.")
#         else:
#             print("The door is already open.")

#     def close_door(self):
#         if self.is_opened:
#             self.is_opened = False
#             print("The door is now closed.")
#         else:
#             print("The door is already closed.")


# class BlockedDoor(Door):
#     def open_door(self):
#         raise Exception("Error: A blocked door cannot be opened.")

#     def close_door(self):
#         raise Exception("Error: A blocked door cannot be closed.")


# # Example usage
# normal_door = Door()
# normal_door.open_door()   # Works fine
# normal_door.close_door()  # Works fine

# blocked_door = BlockedDoor()

###################################################################


# class Parrot():

#     def fly(self):
#         print("Parrot can fly")

#     def swim(self):
#         print("Parrot can't swim")

# class Penguin():

#     def fly(self):
#         print("Penguin can't fly")

#     def swim(self):
#         print("Penguin can swim")

# # common interface
# def flying_test(bird):
#     bird.fly()

# #instantiate objects
# blu = Parrot()
# peggy = Penguin()

# # passing the object
# flying_test(blu)
# # >> Parrot can fly

# flying_test(peggy)
# # >> Penguin can't fly

##########################################################


# class Book():
#     def __init__(self, title, author, publication_date, price):
#         self.title = title
#         self.author = author
#         self.publication = publication_date
#         self.price = price

#     def present(self):
#         print(f'Title: {self.title}')

# class Fiction(Book):
#     def __init__(self, title, author, publication_date, price, is_awesome):
#         super().__init__(title, author, publication_date, price)
#         self.genre = 'Fiction'
#         self.is_awesome = is_awesome
#         if self.is_awesome:
#             self.bored = False
#             print('Woow this is an awesome book')
#         else:
#             self.bored = True
#             print('I am very bored')

# if __name__ == '__main__':
#     foundation = Fiction('Asimov', 'Foundation', '1966', '5£', True)
#     foundation.present()
#     print(foundation.price)
#     print(foundation.bored)
#     boring_book = Fiction('boring_guy', 'boring_title', 'boring_date', '9000£', False)
#     print(boring_book.bored)

    ############################################################################
    # class attribut

# class Dog():
#     number_of_dogs = 0
#     dogs_king = "Bernie IV"

#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog
#         # Increment the number of dogs
#         Dog.number_of_dogs += 1

#     def bark(self):
#         print(f"{self.name} barks ! WAF")

#     def walk(self, number_of_meters):
#         print(f"{self.name} walked {number_of_meters} meters")

#     def rename(self, new_name):
#         self.name = new_name

# my_dog = Dog("Rex")
# my_dog2 = Dog("Bernie V")
# print(f"Curently, there are {Dog.number_of_dogs} dogs")

##############################################################################

class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter
        printself.diameter
    
    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
       return Circle.color

circle1 = Circle(2)
print(circle1.color)
print(Circle.color)
print(circle1.get_color())
circle1.grow(3)
print(circle1.diameter)