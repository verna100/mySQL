var mysql = require("mysql");
var inquirer = require("inquirer");


// THIS WORKS
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected successfully");
  // afterConnection();
  queryProducts();
  // afterConnection();
});
// This works, query's products table and returns a list of items in the table
function queryProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name +  " | " + res[i].stock_quantity+ " |$" + res[i].price);
            }
            console.log("--------------------------------------------------------");

         inputOne();
    });
}
// asks customer questions
function inputOne() {
    inquirer.prompt([
        {
          name:"item",
          type:"input",
          message: "Please enter the id number of the item you'd like to purchase",
          validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }else{
            console.log("please input a number")
            return false;
              }
          }
        },  
        {
          name: "quantity",
          type: "input",
          message: "How many items would you like to buy?",
          validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }else{
            console.log("please input a number")
            return false;
            }
          }
        }
 //stores customer's choices in a variable 
    ]).then(function (answer) {
        var item = answer.item;
        var quantity = answer.quantity;
        total(item, quantity);
    });
};
// added item and quantity as parameters because when left empty got error that they were not defined
function total(item, quantity) {
    connection.query("SELECT * FROM products WHERE item_id = " + item, function (error, res) {
        if (error) {
            console.log(error);
        };

        if (quantity <= res[0].stock_quantity) {
            var total = res[0].price * quantity;
            console.log("You requested " + quantity + " " + res[0].product_name);
            console.log("Your total is $" + total);
// this updates the quantity in the database per stock purchased
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + quantity + " WHERE item_id = " + item);
        } else{
            console.log("Error: Please see stock quantity for stock");
        };
    });
};

// DID NOT USE THIS BECAUSE GOT THE ERROR: Cannot enqueue Query after invoking quit.
//   function afterConnection() {
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // console.log(res);
//     connection.end();
//   });
// }