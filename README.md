# Summer Project 2019
My final project for my Masters degree. This took place over the summer of 2019 and I worked from home by myself. This project uses a Javascript backend through the use of a NodeJS server with ExpressJS and an AngularJS front-end with Bootstrap CSS. The database used was MySQL. The application is an online piano store based on the place where I bought my very own piano from and all the pianos' details used in the database were taken from that store. 

How to install the application:
1. Download the code by cloning the repository or downloading the zip folder directly.
2. Create the database by running the database/PianoStore.sql file in a local MySQL server (You will need the MySQL Workbench to do this. You can download this here: https://dev.mysql.com/downloads/workbench/)
3. You will need NodeJS to run this project so make you install it. It can be downloaded from here: https://nodejs.org/en/
4. To run the application server, open a Terminal/Command Prompt and run the command 'npm start' in the Summer_Project/ directory. Open a second Terminal instance and got to Summer_Project/client/ and run 'npm start' to run the application. Then go to http/:localhost:4200/ on your browser to open the application.

How to use the application:
1. Once the webpage has been opened you are free to navigate the site as you please. There is a navigation bar in the middle of the webpage which will allow you to browse the website. There is also login functionality in the top right of the webpage where you can register an account or login if you already have an account.
2. To create an account, click the 'Register' link in the top right of the webpage. Here you can enter you details like your username and password. Click 'Register' to create your account and you will be automatically logged in and brought to your profile page.
3. If you wish to change your account details, you can do this from the profile page which can only be accessed if you are already logged in, by clicking 'Hello User' in the top right of the page. Click 'Change profile details' on the profile page and you will be allowed to change your profile details. Click 'Update' and your new changes will be saved.
4. You can logout of the application by clicking 'Logout' on the top right of the page and this will bring you back to the home page.
5. To view the list of pianos click the 'Store' tab to display the different categories of pianos on sale. Clicking a category will list all pianos in that category along with the pricing and details of that piano.
