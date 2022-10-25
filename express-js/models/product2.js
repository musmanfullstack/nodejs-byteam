const fs = require('fs');//js file system module helps us store, access, and manage data on our operating system. Commonly used features of the fs module include fs. readFile to read data from a file, fs. writeFile to write data to a file and replace the file if it already exists, fs.
const path = require('path');
module.exports = class Product {
    constructor(t) {
        this.title = t;//creating a variable in a class
    }
    save(){
        const p = path.join(__dirname, '../', 'data', 'products.json');//Redirecting the data to save into this folder and the name of the file is this.
        // const p = path.join(path.dirname(process.mainModule.filename,'data','products.json'));
        fs.readFile(p,(err , filecontent) =>{
            let products = [];
            if (!err){
                products = JSON.parse(filecontent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{//The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {//static keyword is use to call direct class itself and not on an instantiated object and the cb is function which means call back.
        const p = path.join(__dirname, '../', 'data', 'products.json');//Showing the data from the folder name this to file name this.
        fs.readFile(p, (err, fileContent)=>{
            if (err){
                cb([]);//call back data into arrays.
            }
            cb(JSON.parse(fileContent));//we are using call back function in the fetch to call back the data store into files if we dont use that call back function the error cames in that the array length is not recognize.
        });
    }
};