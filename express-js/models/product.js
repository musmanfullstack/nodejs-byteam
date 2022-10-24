const products = [];
module.exports = class Product {
    constructor(t) {
        this.title = t;//creating a variable in a class
    }
    save(){
        products.push(this)
    }
    static fetchAll() {//static keyword is use to call direct class itself and not on an instantiated object
        return products;
    }
}