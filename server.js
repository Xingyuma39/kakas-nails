/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');
const session = require('express-session');
//configure passport


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const productsCtrl = require('./controllers/products')
const usersCtrl = require('./controllers/users')



/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Create the Express app
--------------------------------------------------------------- */
const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(require('./config/checkLogin'));


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
if(process.env.ON_HEROKU === 'false') {
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
}

// app.use(connectLiveReload());

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    console.log(req.user);
    res.locals.user = req.user;
    res.locals.cart = req.cart;
    next();
});


// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));



/* Mount routes
--------------------------------------------------------------- */
app.get('/', function (req, res) {
    // res.send('Kaka\'s Nails')
    db.Product.find({ isFeatured: true })
        .then(products => {
            res.render('home', {
                products: products
            })
        })
});

// if(process.env.ON_HEROKU === 'false') {
    app.get('/seed', function (req, res) {
        db.Product.deleteMany({})
            .then(removedProducts => {
                console.log(`Removed ${removedProducts.deletedCount} products`)
                db.Product.insertMany(db.seedProducts)
                    .then(addedProducts => {
                        console.log(`Added ${addedProducts.length} products`)
                        res.json(addedProducts)
                    })
            })
    });
// }

app.get('/about', function (req, res) {
    res.render('about')
});

// This tells our app to look at the `controllers/products.js` file 
// to handle all routes that begin with `localhost:3000/products`
app.use('/products', productsCtrl)
app.use('/users', usersCtrl)


// The "catch-all" route: Runs for any other URL that doesn't match the above routes
app.get('*', function (req, res) {
    res.render('404')
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
