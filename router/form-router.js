const express = require("express");
const router = express.Router();
const multer = require("multer");
const Form = require("../controller/form-controller");
const Payment = require("../models/payment-model");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Check if the file exists
    if (!file) {
      cb(null, true); // No file uploaded, continue without error
    } else if (file.fieldname === "GaitImage" || file.fieldname === "PostureImage") {
      cb(null, true); // File uploaded and matches the specified fieldnames
    } else {
      cb(new Error("Invalid field!")); // File uploaded but does not match the specified fieldnames
    }
  }
});

// Handle form submissions with optional file uploads
router.route("/form").post(upload.fields([{ name: 'GaitImage', maxCount: 1 }, { name: 'PostureImage', maxCount: 1 }]), Form);

// Add the payment route
router.post("/payment", async (req, res) => {
  try {
    const paymentData = req.body;
    console.log("Received payment data:", paymentData);

    // Validation example:
    if (!paymentData.amount || !paymentData.payment_mode || !paymentData.name || !paymentData.phone || !paymentData.transaction_id) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Set the payment_date to the current date and time
    paymentData.payment_date = new Date(); // This captures the current date and time

    const newPayment = new Payment(paymentData); // Create a new payment instance
    await newPayment.save(); // Save to the database

    res.status(201).json({ success: true, message: "Payment processed successfully", payment: newPayment });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ success: false, message: "Failed to process payment" });
  }
});


module.exports = router;
