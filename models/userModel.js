const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (email) {
          // simple check
          return email.includes("@");
        },
        message: (props) => `${props.value} is not a valid Email!`,
      },
      required: [true, "User phone number required"],
    },
    password: { type: String, required: true },
    passwordConfirm: {
      type: String,
      validator: function (pass) {
        // simple check
        return this.password === pass;
      },
      message: (props) => `Passwords is not matching!`,
    },
    isAdmin: { type: Boolean, default: false },
    accountType: {
      type: String,
      enum: ["gold", "silver", "platin"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
