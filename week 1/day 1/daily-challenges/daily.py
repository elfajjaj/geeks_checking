# challenge 1:

user_number = int(input("number : "))
user_length = int(input("length : "))
list_mult = []

for  nub in range(1,user_length + 1):
    list_mult.append(user_number * nub)

print(list_mult)


# challenge 2:

user_string = input("user's word : ")

result = ""

for i in range(len(user_string)):
    if i == 0 or user_string[i] != user_string[i - 1]:
        result += user_string[i]

print(result)

  

