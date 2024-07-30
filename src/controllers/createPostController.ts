import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./signup.controller";
import { Request, Response } from "express";
import { postModel } from "../models/post";

const createPostController = async (req: Request, res: Response) => {
  const { post, token } = await req.body;

  //   @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const createdPost = await postModel.create({
      authorId: userId,
      ...post,
    });

    return res.status(201).json({
      message: `post created successfully`,
      post: createdPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { createPostController };
