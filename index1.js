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
        amount: undefined,
    }
]


function add(n) {
    if (n <= goods.length) {
        basket[0].good.push(goods[n - 1].id) 
    }

    basket[0].amount = basket[0].good.length
} 


function deleteId(n) {
    if (basket[0].good.includes(n)) {
        index = basket[0].good.indexOf(n)
        delete basket[0].good.splice(index, 1)
    }

    basket[0].amount = basket[0].good.length
}


function clear() {
    basket[0].good.length = 0
    basket[0].amount = basket[0].good.length
}


function total() {
    let totalPrice = 0
    for (let number = 0; number < basket[0].good.length; number++) {
        let result = goods.find(item => item.id == basket[0].good[number])
        totalPrice += result.price
    }
    return {totalAmount: `${basket[0].good.length}`, totalSum: `${totalPrice}`}
}

add(2); add(2); add(5); add(3);
deleteId(2); deleteId(3)
// clear()

console.log(basket)
console.log(total())
