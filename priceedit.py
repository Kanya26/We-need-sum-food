"""How much does it cost?"""
import json
def main():
    """Use dictionary as input. if you want to stop to input yourname ,you can input("End")"""
    group_of_list = []
    group = {}
    count = 0
    dict_input_food_and_price = input()
    dict_input_food_and_price = json.loads(dict_input_food_and_price)
    while True:
        yourname = input()
        if yourname == "End":
            break
        group[yourname] = 0
    for food, price in dict_input_food_and_price.items():
        while True:
            yourname = input()
            if yourname == "End":
                break
            group_of_list.append(yourname)
            count += 1
        total = price/count
        for food in group_of_list:
            group[food] = group.get(food)+total
        count = 0
        group_of_list = []
    print(group)
main()
