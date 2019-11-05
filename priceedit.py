"""How much does it cost?"""
import json
def main():
    """cost"""
    foodandprice = input()
    foodandprice = json.loads(foodandprice)
    pay = {}
    count = 0
    for i,j in foodandprice.items():
        while 1:
            name = input()
            pay[name] = 0
            if name == "End":
                break
            count += 1
        total = j/count
        pay[name] += total
        count = 0
    print(pay)
main()
