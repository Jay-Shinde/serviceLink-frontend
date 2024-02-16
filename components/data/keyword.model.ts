import mongoose from "mongoose";

const keywordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
})

const Keyword = mongoose.models.Keyword || mongoose.model("Keyword", keywordSchema);

export { Keyword};
