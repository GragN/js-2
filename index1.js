const goods = [
    {
        id: 1,
        name: "продукт 1",
        description: "Описание",
        sizes: "размеры",
        price: 100,
        available: "доступность"
    },
    {
        id: 2,
        name: "продукт 2",
        description: "Описание",
        sizes: "размеры",
        price: 200,
        available: "доступность"
    },
    {
        id: 3,
        name: "продукт 3",
        description: "Описание",
        sizes: "размеры",
        price: 300,
        available: "доступность"
    },
    {
        id: 4,
        name: "продукт 4",
        description: "Описание",
        sizes: "размеры",
        price: 400,
        available: "доступность"
    },
    {
        id: 5,
        name: "продукт 5",
        description: "Описание",
        sizes: "размеры",
        price: 500,
        available: "доступность"
    },
]

const basket = [
    {
        good: [],
        amount: [],
    }
]


function add(n) {
    let number = goods.find(item => item.id == n)
    if (basket[0].good.includes(number.id)) {
        for (i of basket[0].amount) {
            if (i[0] == number.id) {
                i[1] += 1
            }
        }
    } else {
        basket[0].good.push(number.id)
        basket[0].amount.push([number.id, 1])
    }

} 


function deleteId(n) {
    let number = goods.find(item => item.id == n)
    if (basket[0].good.includes(number.id)) {
        for (i of basket[0].amount) {
            if (i[0] == number.id && i[1] == 1) {
                let index = basket[0].good.indexOf(number.id)
                basket[0].good.splice(index, 1)
                let index1 = basket[0].amount.indexOf(i)
                basket[0].amount.splice(index1, 1)
            } else if (i[0] == number.id && i[1] > 1) {
                i[1] -= 1
            }
        }
    }
}


function clear() {
    basket[0].good.length = 0
    basket[0].amount = basket[0].good.length
}


function total() {
    let totalPrice = 0
    let totalAmount = 0
    for (let number = 0; number < basket[0].amount.length; number++) {
        let result = goods.find(item => item.id == basket[0].amount[number][0])
        totalPrice += (basket[0].amount[number][1]) * result.price
        totalAmount += (basket[0].amount[number][0])
    }
    return (`totalAmount: ${totalAmount} \ntotalPrice: ${totalPrice}`)
}

add(1); add(1); add(1); add(2); add(2); add(3); add(3); add(1); add(2)
deleteId(1); deleteId(1); deleteId(1); deleteId(1);
// clear()

console.log(basket[0])

console.log(total())
