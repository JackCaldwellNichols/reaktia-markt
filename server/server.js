require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/api/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

app.listen(3000);
