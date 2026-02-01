import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["patient", "doctor"],
    required: true,
  },
  photoUrl: {
    type: String,
    default: "",
  },
  resetOtp: {
    type: "String",
  },
  otpExpires: {
    type: Date,
  },
  isOtpVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
},{
  timestamps: true
});

const User = mongoose.model("user", userSchema);

export default User;