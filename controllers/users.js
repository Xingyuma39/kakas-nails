/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const User = require('../models/user.js')


/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all pets
router.get('/', function (req, res) {
    User.find({})
        .then(users => res.json(users))
})

// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new pet document using the form data, 
// and redirects the user to the new pet's show page
router.post("/", async function create(req, res) {
    const user = await User.create(req.body);
    // const newCart = await Cart.create({user: user._id});
    req.session.userId = user._id;
    req.session.save(function (err) {
        if (err) next(err)
        // regenerate the session, which is good practice to help
        // guard against forms of session fixation
        req.session.regenerate(function (err) {
            if (err) next(err)
            res.redirect('/') // redirect wherever you want to go to!
        })
  })
})

// Login (GET/Read): This route renders a form 
router.get('/login', (req, res) => {
    res.render('login')
})

router.post("/login", async function (req, res) {
    try {
        const user = await User.findOne({ email: req.body.email});
        if (req.body.password !== user.password) {
           req.session.userId = null;
           res.redirect("/")
        }
        req.session.userId = user._id
        req.session.save(function (err) {
            if (err) next(err)
        })
        res.redirect('/') // redirect wherever you want to go to!
     } catch(err) {
          console.log(err)
     }
});

router.get('/logout', (req, res) => {
    req.session.userId = null;
    res.redirect('/');
})


// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('new-user-form')
})

// Show Route (GET/Read): Will display an individual pet document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    User.findById(req.params.id)
        .then(user => res.json(user))
})

// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified pet document using the form data,
// and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(product => res.redirect('/products/' + product._id))
})

// Destroy Route (DELETE/Delete): This route deletes a product document 
// using the URL parameter (which will always be the product document's ID)
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(product => res.redirect('/products'))

})

// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing product
router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.render('edit-user-form', {user: user}))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
