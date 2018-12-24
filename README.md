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
Screenshot: (shows database created and products populated onto the table)


<img width="629" alt="screen shot 2018-12-22 at 9 43 56 pm" src="https://user-images.githubusercontent.com/24796624/50380349-c84afd80-0632-11e9-937f-00d19e8f3316.png">

Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

1. The app should then prompt users with two messages.

*The first should ask them the ID of the product they would like to buy.

*The second message should ask how many units of the product they would like to buy.

**Screenshot: (shows successful connection to mySQL and the table being read, list of items, questions being asked of the customer. Once the update goes through, show the customer the total cost of their purchase.

<img width="771" alt="screen shot 2018-12-23 at 10 53 05 pm" src="https://user-images.githubusercontent.com/24796624/50390483-99518c00-0705-11e9-915a-1e5946189821.png">


Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

**Screenshot (shows error message when customer picks item whose quantity does not match the stock quantity)

<img width="668" alt="screen shot 2018-12-23 at 10 58 18 pm" src="https://user-images.githubusercontent.com/24796624/50390542-488e6300-0706-11e9-867b-95ce1679981b.png">


However, if your store does have enough of the product, you should fulfill the customer's order.

This means updating the SQL database to reflect the remaining quantity. (see screeshot below- 2nd database pic, to see the database being updated)



**Screenshot: (shows items being removed from database inventory. See 1st picture for original amounts.)

<img width="492" alt="screen shot 2018-12-23 at 10 54 15 pm" src="https://user-images.githubusercontent.com/24796624/50390496-bab27800-0705-11e9-80a5-6dfe241fc35b.png">
