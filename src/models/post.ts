import { Schema, Types, model, SchemaTypes } from "mongoose";

const postSchema = new Schema({
  authorId: String,
  title: String,
  description: String,
  status: String,
  priority: String,
  deadline: Number,
  postText: String,
});

const postModel = model("Post", postSchema);

export { postModel };
