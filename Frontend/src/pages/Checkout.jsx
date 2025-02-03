import React, { useState } from "react";

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deliveryDate: "",
    location: "",
  });

  const [error, setError] = useState(""); // Added state to manage error messages
  const [loading, setLoading] = useState(false); // Added loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before sending it
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.location ||
      !formData.deliveryDate
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const orderData = {
      ...formData,
      cartItems,
    };

    try {
      setLoading(true); // Start loading when submitting
      const response = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      setLoading(false); // Stop loading when response is received

      if (response.ok) {
        alert("Order submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          deliveryDate: "",
          location: "",
        }); // Clear the form after submission
      } else {
        setError("Failed to submit order.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      setLoading(false); // Stop loading in case of error
      setError("Error submitting order.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-[5rem]">
      <div className="bg-white p-8 shadow-lg rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Checkout
        </h1>

        {/* Display error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="text"
            name="location"
            placeholder="Delivery Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading} // Disable button while submitting
            className={`w-full ${
              loading ? "bg-gray-500" : "bg-green-500"
            } text-white py-3 px-4 rounded-lg hover:bg-green-600 transition duration-200`}
          >
            {loading ? "Submitting..." : "Submit Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
