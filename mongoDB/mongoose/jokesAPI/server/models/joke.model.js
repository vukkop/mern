const mongoose = require("mongoose");

// Create a Schema for Jokes
const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Setup is requiered"],
    },
    punchline: {
      type: String,
      required: [true, "Punchline is requiered"],
    },
  },
  { timestamps: true }
);
// create a constructor function for our model and store in variable 'Joke'
module.exports = mongoose.model("Joke", JokeSchema);
