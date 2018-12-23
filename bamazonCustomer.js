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
 
});


  
// THIS WORKS
function queryProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name +  " | " + res[i].stock_quantity+ " |$" + res[i].price);
      }
      console.log("--------------------------------------------------------");
     
  });
  inputOne();
}


// inputTwo();
// function w/ questions
var inputOne = function(){
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
    ]).then (function(answer){
      var item = answer.item;
      var quantity = answer.quantity;
      console.log("Item Id: " + item);
      console.log("Quantity: " + quantity);
      })

}



// function total(item, quantity){
//   var query= connection.query("SELECT item_id, stock_quantity, price FROM products" + item, function (error, response) {
//     if (error) {
//         console.log(error);
//     }else{
//       console.log(item + quantity);
//     }
// })
// };





// total();

// var inputTwo =function(res){
//   inquirer.prompt({
//     
//       }
//   })
// }

// inputTwo();




// function to deal with answers
// function to calculate items bought





//   function afterConnection() {
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // console.log(res);
//     connection.end();
//   });
// }