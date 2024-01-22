const User = require('../models/user');

module.exports = async function (req, res, next) {
      try {
          if (req.session?.userId) {
              req.user = await User.findById(req.session.userId);
            //   req.cart = await Cart.findOne({ user: req.user._id, isPaid: false });
              return next();
          } else {
              req.session.userId = null;
              return next();
          }
      } catch (err) {
          console.log(err);
          return next();
      }        
}

