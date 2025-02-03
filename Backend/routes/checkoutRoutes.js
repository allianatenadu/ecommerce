const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const Order = require("../models/Order"); // Import the Order model
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, deliveryDate, cartItems } = req.body;

  if (!name || !email || !phone || !deliveryDate || !cartItems.length) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Save the order in the database
    const newOrder = new Order({
      name,
      email,
      phone,
      deliveryDate,
      cartItems,
    });

    await newOrder.save(); // Save the order

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Generate order summary with images (CID method)
    const cartHTML = cartItems
      .map(
        (item, index) => `
      <div style="margin-bottom: 15px;">
        <img src="cid:image${index}" alt="${item.name}" style="width: 120px; height: auto; display: block; margin-bottom: 10px;" />
        <p><strong>${item.name}</strong> (Category: ${item.category}) - $${item.price}</p>
      </div>
    `
      )
      .join("");

    const emailHTML = `
      <h2>New Order Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Delivery Date:</strong> ${deliveryDate}</p>
      <h3>Cart Items:</h3>
      ${cartHTML}
    `;

    // Attach images for inline embedding
    const attachments = cartItems
      .map((item, index) => {
        const imagePath = path.resolve(
          __dirname,
          "../images",
          path.basename(item.image)
        );

        // Check if file exists
        if (!fs.existsSync(imagePath)) {
          console.warn(`⚠️ Warning: Image file not found: ${imagePath}`);
          return null;
        }

        return {
          filename: `product${index}.jpg`,
          path: imagePath,
          cid: `image${index}`,
        };
      })
      .filter(Boolean); // Remove null entries

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.SELLER_EMAIL,
      subject: "🛒 New Order Received",
      html: emailHTML,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Order email sent successfully");

    res.status(200).json({ message: "Checkout successful, email sent" });
  } catch (error) {
    console.error("❌ Error:", error);
    res
      .status(500)
      .json({ error: "Error placing order", details: error.message });
  }
});

module.exports = router;
