const products = [
    {
        name: "Blue Glittery Nail Set",
        type: "nails",
        description: "Blue base with glitter and silver decorations",
        rating: 5,
        size: "S",
        price: 49.99,
        quantity: 3,
        photo: "/assets/blue.jpg",
        isFeatured: true
    },
    {
        name: "One Piece Nail Set",
        type: "nails",
        description: "White base with glitter and pirate-themed decorations",
        rating: 5,
        size: "M",
        price: 59.99,
        quantity: 1,
        photo: "/assets/onepiece.jpg",
        isFeatured: false
    },
    {
        name: "Coral Nail Set",
        type: "nails",
        description: "Black base with glitter and red coral decorations",
        rating: 5,
        size: "L",
        price: 69.99,
        quantity: 2,
        photo: "/assets/coral.jpg",
        isFeatured: true
    },
    {
        name: "X'Mas Nail Set",
        type: "nails",
        description: "Red/Green base with X'Mas-themed decorations",
        rating: 5,
        size: "M",
        price: 59.99,
        quantity: 1,
        photo: "/assets/xmas.jpg",
        isFeatured: false
    },
    {
        name: "Peach Glittery Nail Set",
        type: "nails",
        description: "Peach/Cream base with glitter and pink decorations",
        rating: 5,
        size: "S",
        price: 39.99,
        quantity: 5,
        photo: "/assets/peach.jpg",
        isFeatured: false
    },
    {
        name: "Sunflower Keychain",
        type: "keychain",
        description: "Acrylic keychain with cute sunflower design",
        rating: 4.5,
        size: "M",
        price: 15.99,
        quantity: 2,
        photo: "/assets/sunflower.jpg",
        isFeatured: false
    },
    {
        name: "Baby Yoda Keychain",
        type: "keychain",
        description: "Acrylic keychain with cute baby Yoda design",
        rating: 5,
        size: "S",
        price: 9.99,
        quantity: 4,
        photo: "/assets/babyyoda.jpg",
        isFeatured: true
    },
    {
        name: "Pokemon Gengar Keychain",
        type: "keychain",
        description: "Acrylic keychain with Pokemon Gengar design",
        rating: 5,
        size: "S",
        price: 9.99,
        quantity: 2,
        photo: "/assets/gengar.jpg",
        isFeatured: false
    },
    {
        name: "Pig & Bee Keychain",
        type: "keychain",
        description: "Acrylic keychain with cute pig & bee design",
        rating: 5,
        size: "S",
        price: 9.99,
        quantity: 1,
        photo: "/assets/pigbee.jpg",
        isFeatured: false
    }
]

// Export the seed data to `models/index.js`
module.exports = products
