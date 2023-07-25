import mongoose from "mongoose";

const Schema = mongoose.Schema;
const pasteSchema = new Schema(
  {
    title: {
      type: String,
    },
    scripts: {
      type: String,
    },
    description: {
      type: String,
    },
    gameLink: {
      type: String,
    },
  },
  {
    autoIndex: true,
    timestamps: true,
    toJSON: { getters: true },
  }
);
const PasteModel = mongoose.model("Paste", pasteSchema, "pastes");

export default PasteModel;
