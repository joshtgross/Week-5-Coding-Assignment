class Pizza {
    constructor (name, topping) {
        this.name = name;
        this.topping = topping;
    }

    describe() {
        return `${this.name} has ${this.topping}.`;
    }
}


class Order {
    constructor (name) {
        this.name = name;
        this.Pizzas = [];
    }


    addPizza(pizza) {
        if (pizza instanceof Pizza) {
            this.pizzas.push(pizza);
        } else {
            throw new Error (`You can only add an instance of Pizzas. Arugment is not a pizza: ${pizza}`);
        }
    }


describe() {
    return `${this.name} has ${this.pizzas.length} pizzas`;
    }
}


class Menu {
    constructor(){
        this.orders= [];
        this.selectedOrders = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1': 
                    this.createOrder();
                    break;
                case '2':
                    this.viewOrder();
                    break;
                case '3':
                    this.deleteOrder();
                    break;
                case '4':
                    this.displayOrder();
                    break;
                    default:
                        selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Thanks for visiting');
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit Menu
        1) Create a new pizza order.
        2) View pizza order.
        3) Delete pizza order.
        4) Show entire order.
        `);
    }
    showOrderMenuOptions(orderInfo) {
        return prompt(`
        0) Return.
        1) Add topping.
        2) Delete topping.
        ---------------
        ${orderInfo}
        `);
    }
    
    
    displayOrder() {
        let orderString = '';
        for (let i =0; i < this.orders.length; i++) {
            orderString += i + ') ' + this.orders[i].name + '\n';
        }
        alert(orderString);
    }
    
    createOrder() {
        let name = prompt ('Enter customer name for pizza order.');
        this.orders.push(new Order(name));
    }


    viewOrder() {
        let index = prompt('Enter the index of the pizza you wish to view:');
        if (index > -1 && index < this.orders.length) {
            this.selectedOrder = this.orders[index];
            let description = 'Order Name: ' + this.selectedOrder.name + '\n';
            

            for (let i =0; i < this.selectedOrder.pizzas.length; i++) {
                description += i + ') ' + this.selectedOrder.pizzas[i].name + '-' 
                    + this.selectedOrder.pizzas[i].topping + '\n';
            }

        let selection = this.showOrderMenuOptions(description);
        switch (selection) {
            case '1':
                this.addTopping();
                break;
            case '2':
                this.deleteTopping();
            }
        }
    }

    deleteOrder(){
        let index = prompt ('Enter the index of the pizza you wish to delete:');
        if (index > -1 && index < this.order.length) {
            this.order.splice(index,1);
        }
    }

        addTopping(){
            let name = prompt('Enter the name of pizza');
            let topping = prompt('Enter toppings for new pizza:');
            this.selectedOrder.toppings.push(new Pizza(name,topping));
        }
        deleteTopping() {
            let index = prompt ('Input the index of the pizza you wish to delete:');
            if (index > -1 && index < this.selectedOrder.pizzas.length) {
                this.selectedOrder.pizzas.splice(index, 1);
            }
        }
}




let menu = new Menu();
menu.start();