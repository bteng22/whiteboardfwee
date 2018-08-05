const config = require('../config');
const stripe = require("stripe")(config.stripe.secretKey);

const chargeUser = async (req, res) => {
  try {
    console.log('+++req body', req.body);
    const {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
};

module.exports = {
  chargeUser
};
