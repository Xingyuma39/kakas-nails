# kakas-nails
A MEN-stack application hosted on Heroku that displays my sister's creations.

## Link to Deployed App
https://kakas-nails-a9a4eee159ed.herokuapp.com/

## Embedded Screenshot

## Application Screenshots

### Home Screen

### Product Page

### About Page

### Login Page

### Sign Up Page

## Wire Frames
Home Page
 ![kakasnails home](https://media.git.generalassemb.ly/user/51683/files/43998d1c-79ff-4156-972f-2a5349af0972)

Products Page
![kakasnails products](https://media.git.generalassemb.ly/user/51683/files/ae46ebc8-7255-4608-bd7c-fdf56a643ed6)

About Page
![kakasnails about](https://media.git.generalassemb.ly/user/51683/files/2bcd36d6-bef9-4c62-963e-4effa3006550)

## Technologies Used
- https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white Heroku
- https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white Node.js
- https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white HTML5
- https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white CSS3
- https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E Javascript
- https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white Markdown
- https://img.shields.io/badge/Express.js-404D59?style=for-the-badge Express.js
- https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white Bootstrap
- https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white MongoDB
- Mongoose
- EJS

## User Stories
- As a friend or family member, I want to check out Kaka's creations, so that I can enjoy the art and support her.
- As a customer, I want to be kept up to date on new releases, so that I won't miss any.
- As a customer, I want to be able to contact Kaka in case I have any inquiries or want to buy product.

## MVP Goals (How your specific project will look & behave in order to accomplish MVP)
- A working full-stack application, using Node.js, Mongoose, Express, EJS, and CSS
- Adhere to the MVC file structure: Models, Views, Controllers
- Create and use two distinct schemas. nailSchema & keychainSchema
- One of my schemas will be used to make a model with all 7 RESTful routes and full CRUD.
- Will have routes for create, new, index, delete, show, update, destroy, edit.
- Be styled professionally and have responsive design.
- Hosted on Heroku.
- Be able to let new users sign up
- Be able to let new users login with their email and password

## Route Table
Route table that will define and describe what each route in our application is doing. 

|       **URL**   | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**   |
| --------------- | -------------- | ------------- | --------------- | ------------------- |
| /               |                | GET           | read            | home.ejs            |
| /products       | index          | GET           | read            | product-index.ejs   |
| /products/:id   | show           | GET           | read            | product-details.ejs |
| /products/new   | new            | GET           |                 | new-product.ejs     |
| /products       | create         | POST          | create          |                     |
| /products/:id/edit  | edit           | GET           | read            | edit-product.ejs    |
| /products/:id   | update         | PATCH/PUT     | update          |                     |
| /products/:id   | destroy        | DELETE        | delete          |                     |
| /users/new       | new          | GET           | read            | new-user-form.ejs   |
| /users/login       | show          | GET           | read            | login.ejs   |
| /cart       | index          | GET           | read            | cart -index.ejs   |
| /cart/new   | new            | GET           |                 | new-cart .ejs     |
| /cart | create         | POST          | create          |                     |
| /cart/:id/edit  | edit           | GET           | read            | edit-cart.ejs    |
| /cart/:id   | update         | PATCH/PUT     | update          |                     |
| /seed           |                | GET           | delete & create |                     |
| /about          |                | GET           |                 | about.ejs           |
| /*              |                | GET           |                 | 404.ejs             |

## Stretch Goals (How your specific project look & behave *AFTER* you accomplish MVP)
- Add a shopping cart feature that lets users add/remove items from each product details page.
- Add a Cart Page that will show the total price, as well as allow users to add/remove items from the cart.
- Add color schemes
- Add fonts
- Add settings page
- Add different product types, e.g. appointments for nail sessions, custom nails/keychains etc.
- Add Chat feature or email feature that can directly contact Kaka from the site
