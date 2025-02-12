const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required:true,
  },
  phone: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  payment_purpose:{
    type: String,
  },
  payment_date: {
    type: Date,
    default: Date.now,
  },
  payment_mode: {
    type: String,
    required: true,
  },
  transaction_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
