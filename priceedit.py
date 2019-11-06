"""How much does it cost?"""
import json
def main():
    """cost"""
    glist = []
    group = {}
    count = 0
    food = input()
    food = json.loads(food)
    while 1:
        name = input()
        if name == "End":
            break
        group[name] = 0
    for i, j in food.items():
        while 1:
            name = input()
            if name == "End":
                break
            glist.append(name)
            count += 1
        total = j/count
        for i in glist:
            group[i] = group.get(i)+total
        count = 0
        glist = []
    print(group)
main()
