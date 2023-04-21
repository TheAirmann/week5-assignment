//Here is my attempt at creating a simple menu app for the Week 5 assignment
//I will be making a menu app that represents a garage sale

//Defines the items to be listed for sale
class SaleItem {
    constructor(name, price, description,) {
        this.name = name;
        this.price = price;
        this.desc = description;
    }
}

//Defines the menu that'll represent the garage sale inventory
class GarageSale {
    constructor() {
        this.stock = [];
        this.selectedItem = null;
    }

    start() {
        let selection = this.showMenuOptions();
        //Once the input value is assigned to 'selection', it's used in a switch statement to determine the corresponding action
        while (selection != 4) {
            switch (selection) {
                case '1':
                    this.offerItem();
                    break;
                case '2':
                    this.itemsInfo();
                    break;
                case '3':
                    this.sellItem();
                    break;
                default:
                    alert("Invalid input!");
            }
            selection = this.showMenuOptions();
        }
        //The while loop continues to display the menu options until option 0 is selected
        //When 0 is selected, the menu will close and the "Goodbye!" msg will be displayed
        alert("Seeya, chump!");
    }
    //This method is what actually displays the main menu options and returns the selected input
    showMenuOptions() {
        return prompt(`
        Welcome to your garage sale!
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Choose an option:
            1) Offer new item for sale
            2) Items info
            3) Sell item
            4) End garage sale
        `);
    }

    offerItem() {
        let name = prompt("What are you selling?:");
        let price = prompt("How much is it worth?:");
        let desc = prompt("Give it a brief description: ");
        this.stock.push(new SaleItem(name, price, desc));
        alert(`${name} is officially for sale!`);
    }

    itemsInfo() {
        let itemsString = '';
        for (let i = 0; i < this.stock.length; i++) {
            itemsString += (i + 1) + ') ' + this.stock[i].name + '\n';
        }
        let index = prompt(itemsString + "Enter the index of the item you wish to view: ");
        if (index > 0 && index <= this.stock.length) {
            this.selectedItem = this.stock[index - 1];
            alert(`
            Item name:   ${this.selectedItem.name}
            Price:   ${this.selectedItem.price}
            Description:   "${this.selectedItem.desc}"`);
        }
    }

    sellItem() {
        let index = prompt("Enter the index of the item you want to sell:");
        if (index > 0 && index <= this.stock.length) {
            this.selectedItem = this.stock[index - 1];
            this.stock.splice(index - 1, 1);
            alert(`Sold ${this.selectedItem.name}!`)
        }
    }
}

let sale = new GarageSale();
sale.start();