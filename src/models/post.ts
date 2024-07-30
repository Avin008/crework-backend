import { Schema, Types, model, SchemaTypes } from "mongoose";

const postSchema = new Schema({
  title: String,
  description: String,
});

const postModel = model("Post", postSchema);

export { postModel };
