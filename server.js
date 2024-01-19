/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const productsCtrl = require('./controllers/products')


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//     // wait for nodemon to fully restart before refreshing the page
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//     }, 100);
// });


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
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

app.use(express.static('public'))

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.use(connectLiveReload());


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

if(process.env.ON_HEROKU === 'false') {
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
}

// This tells our app to look at the `controllers/products.js` file 
// to handle all routes that begin with `localhost:3000/pets`
app.use('/products', productsCtrl)

// The "catch-all" route: Runs for any other URL that doesn't match the above routes
app.get('*', function (req, res) {
    res.send('404 Not Found')
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
