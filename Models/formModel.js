import { model, Schema } from "mongoose";

const formSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: "User Email is required",
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 5,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Indian: +91XXXXXXXXXX or 10 digits, USA: +1XXXXXXXXXX or (XXX) XXX-XXXX
        return /^(\+91\d{10}|\d{10}|\+1\d{10}|(\(\d{3}\)\s?\d{3}-\d{4}))$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  service: {
    type: String,
    required: true,
    enum: [
      "web application",
      "ads services",
      "Search Engine Optimization",
      "Social Media Management",
    ],
  },
  budget: {
    type: Number,
    required: true,
    min: [2000,"more than 2 thousend"],
  },
  message: {
    type: String,
    trim: true,
    maxLength: 1000,
  },
  work: {
    type: String,
    enum: ["done", "pending", "reject", "ongoing", "default"],
    default: "default",
  },
},{timestamps:true});

export default model("Form", formSchema);
