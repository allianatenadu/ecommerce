const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  deliveryDate: { type: String, required: true },
  cartItems: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
