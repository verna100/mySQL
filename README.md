# mySQL
mySQL homework


Task: In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory.

Challenge #1: Customer View 
Create a MySQL Database called bamazon.
Then create a Table inside of that database called products.
The products table should have each of the following columns:

*item_id (unique id for each product)

*product_name (Name of product)

*department_name

*price (cost to customer)

*stock_quantity (how much of the product is available in stores)

**Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
Screenshot:


<img width="629" alt="screen shot 2018-12-22 at 9 43 56 pm" src="https://user-images.githubusercontent.com/24796624/50380349-c84afd80-0632-11e9-937f-00d19e8f3316.png">

Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

1. The app should then prompt users with two messages.

*The first should ask them the ID of the product they would like to buy.

*The second message should ask how many units of the product they would like to buy.
