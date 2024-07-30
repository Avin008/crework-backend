import { Schema, Types, model, SchemaTypes } from "mongoose";

const userSchema = new Schema({
  profilePic: String,
  email: String,
  fullname: String,
  password: String,
});

const userModel = model("User", userSchema);

export { userModel };
