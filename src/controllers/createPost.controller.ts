import { userModel } from "../models/user";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { CategoryArrModel } from "../models/post";

const createPostController = async (req: Request, res: Response) => {
  const { token, posts } = await req.body;

  // @ts-ignore
  const userId = jwt.decode(token)._id;

  try {
    const createPost = await CategoryArrModel.findOneAndUpdate({
      authorId: userId,
      category: posts,
    });

    return res.status(200).json({ data: createPost });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { createPostController };
