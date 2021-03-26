

# Harvester Solo Project

Harvester is a mobile application designed to help independent construction contractors / any small business to manage their project from their phone throughout the day. Working with many such contractors from years of painting houses, I noticed that the last thing they want to do after sweating all day is to input data to an excel sheet. Harvester tracks expenses for individual projects for easier analysis and management. 


## Getting Started

See deployed version at https://secret-stream-65008.herokuapp.com/#/home+
login with:
 - Username: jvedane 
 - Password: 1234

If you wish to spin this project up locally: 
1. Install node if not installed. 
2. Open up the file in your editor of choice and run 'npm install' in the terminal. 
3. Create a PostgreSQL database from the database.sql file in this project. Also, ensure your database matches the database configuration found in './server/modules/pool.js'
4. Type 'npm run server' in the terminal
5. Open another terminal in the same project and type 'npm run client'
6. Go to 'localhost:3000' in your browser to use the app. Upon starting the client, the app should automatically open.


## Built With
React
Redux / Redux-Saga
Node
Express
postgreSQL
Material UI
passport

### Future Features
1. There are some large components in this project, namely the forms. Will break those out into separate components .
2. Store hours worked and create admin/employee views. To accomplish this, I would need to refactor the database which in turn would require changing up data handling app wide. This would be a really large task. I'm thinking it would take adding a column for access levels on the user table. For wages, that would be a separate table. But it would need to link up with the users, and project_expenses table at a minimum. If you have ideas on how to accomplish this, I'm all ears! 
3. Allow users to add documentation to each project. i.e. contracts, licenses, permits, and notes from verbal communication with clients. 
4. Add a search feature to the dashboard view.
5. Add a sort feature to the table in project details view. 
6. Add pagination to the dashboard. Loading more than 5~7 projects takes some time, especially if there is an image attached to them. 
7. Speaking of images, let's do some image upload ability. It would be cool to be able to upload a local image from your phone. I'm not sure exactly how that works but It'll be fun learning all about it!


### Acknowledgments 
* Thank you to the instructors at Prime Digital Academy for helping me out on this project. Especially on the scoping aspect and helping me to know how much I can accomplish in two weeks. 
* Thank you to Brian Codex for inspiration for the Navigation menu. 

