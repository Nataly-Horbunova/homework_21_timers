const menu = {
    burgerMenu: [
        {
            item: 'Burger',
            time: 2000
        },

        {
            item: 'Cola',
            time: 500
        },

        {
            item: 'Ff',
            time: 1000
        }
    ],

    pizzaMenu: [
        {
            item: 'Pizza',
            time: 3000
        },

        {
            item: 'Pepsi',
            time: 500
        },

        {
            item: 'Souse',
            time: 500
        }
    ]
};

function containsEmpty(arr) {
    const empty = arr.findIndex((item) => !item);
    const notFoundIndex = -1;
    return (empty === notFoundIndex) ? false : true;
}

function createOrder(order, cb) {
    const readyOrder = [];

    order.forEach((dish, index) => {
        setTimeout(() => {
            readyOrder[index] = `${dish.item} done`;

            if (!containsEmpty(readyOrder) && readyOrder.length === order.length) {
                cb(readyOrder);
            }

        }, dish.time);
    });
}

createOrder(menu.burgerMenu, (result) => alert(result));
createOrder(menu.pizzaMenu, (result) => alert(result));

