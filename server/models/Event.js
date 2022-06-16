const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    whyattend: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0.99,
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    link: {
      type: String,
    },
    createdAt: {
      type: String,
    },
    comments: [
      {
        body: String,
        author: String,
      },
    ],
    likeCount: {
      type: Number,
    },
  },
  { timestamps: true }
);

eventSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
