/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const Product = require('../models/product.js')


/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all pets
router.get('/', function (req, res) {
    Product.find({})
        // .then(products => res.json(products))
        .then(products => {
            res.render('product-index', {
                products: products
            })
        })
})

// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new pet document using the form data, 
// and redirects the user to the new pet's show page
router.post('/', (req, res) => {
    Product.create(req.body)
        // .then(product => res.json(product))
        .then(product => res.redirect('/products/' + product._id))
    })


// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('new-form')
})

// Show Route (GET/Read): Will display an individual pet document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    Product.findById(req.params.id)
        // .then(product => res.json(product))
        .then(product => {
            res.render('product-details', {
                product: product
            })
        })
        .catch(() => res.render('404'))
})

// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified pet document using the form data,
// and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(product => res.redirect('/products/' + product._id))
})

// Destroy Route (DELETE/Delete): This route deletes a product document 
// using the URL parameter (which will always be the product document's ID)
router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => res.redirect('/products'))

})

// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing product
router.get('/:id/edit', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.render('edit-form', {product: product}))
})

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
