import { userModel } from "../models/user";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./signup.controller";
import { Request, Response } from "express";
import { postModel } from "../models/post";

const postController = async (req: Request, res: Response) => {
  const { post, token } = await req.body;

  const { title, description } = post;

  //   @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const createdPost = await postModel.create({
      author: userId,
      title: title,
      description: description,
    });

    return res.status(201).json({
      message: `post created successfully`,
      data: {
        createdPost,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { postController };
