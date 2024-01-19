/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all pets
router.get('/', function (req, res) {
    db.Product.find({})
        // .then(products => res.json(products))
        .then(products => {
            res.render('product-index', {
                products: products
            })
        })
})


// Show Route (GET/Read): Will display an individual pet document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Product.findById(req.params.id)
        // .then(product => res.json(product))
        .then(product => {
            res.render('product-details', {
                product: product
            })
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
