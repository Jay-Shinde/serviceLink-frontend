import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  bio: String,
  onboarded: {
    type: Boolean,
    default: false,
  },
  creater: {
    type: Boolean,
    default: false,
  },
  keywords: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Keyword",
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
