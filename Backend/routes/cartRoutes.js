const express = require("express");
const Cart = require("../models/CartItem"); // Import the Cart model
const router = express.Router();

// Add an item to the cart
router.post("/", async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    // Check if all fields are present
    if (!name || !price || !quantity) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const newItem = new Cart({ name, price, quantity });
    await newItem.save();
    res.status(201).json(newItem); // Respond with the saved item
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

// Get all items in the cart
router.get("/", async (req, res) => {
  try {
    const items = await Cart.find();
    res.status(200).json(items); // Respond with the cart items
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

// Remove an item from the cart
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id); // Delete the item by ID
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove item from cart" });
  }
});

module.exports = router;
