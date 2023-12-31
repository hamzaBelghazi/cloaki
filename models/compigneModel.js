const { Schema, model } = require("mongoose");

const CompigneSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "the compigne must be named!"],
    },
    url: {
      type: String,
      required: [true, "please add a URL"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    isEnabeled: {
      type: String,
    },
    cloakedLink: {
      type: String,
      default: function () {
        const link = this.url.split("/")[2];
        return link;
      },
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = model("Compigne", CompigneSchema);
