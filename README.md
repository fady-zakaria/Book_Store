# Book_Store
It is a simple book store web application, the admin add books and we can add to the cart to buy it.

>### Steps To run the Web application:
    - Download Project Folder
    - Run commend (cmd) in the folder that you downloaded project in it 
    - Open the server by write in cmd (node index.js) 
    - Write http://localhost:3000/ in the browser

>### Sequence of the Book_store website:
  ##### There are 2 sequences in this app (admin / user)
   ###### - User Sequence
    1) After opening the server and getting localhost:3000
    2) Choose the book that you want to buy by click to add to cart and remove from cart
    3) you will notice that there is a number beside cart icon in the header, 
    		this for indecation about the numbers that you chosen
    4) When you finished click to the cart icon 
    5) Fill the information and click done button

###### - Admin Sequence "if you are the admin and you want to add book to the library(Home)"
    1) Go to http://localhost:3000/admin => this will take it to server side 
    2) Enter password admin => 1234
    3) Add book's information that you want to add into database and Home and click add book button
    ----> the book will be added to database and from that you can buy it in client side
    4) When you return to http://localhost:3000/ --> you will notice that the book will added in the last of the home page
  
