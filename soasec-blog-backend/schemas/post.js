const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema(
  {
    // AUTO-GENERATED ID

    user_id: {
      type: String,
      required: true
    },

    members_only: {
      type: Boolean,
      required: true
    },

    premium: {
      type: Boolean,
      required: true
    },

    author: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    title: {
      type: String,
      required: true
    },

    short_text: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
    
    image: {
      type: String,
      required: false
    },

    views:{
      type: Number,
      required:true,
      default:0
    }
  },
  {
    collection: "posts",
  }
);


const Post = mongoose.model("Post", post);

module.exports = Post;
