import { userModel } from "../models/user";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { CategoryArrModel } from "../models/post";

const createPostController = async (req: Request, res: Response) => {
  const { token, post } = await req.body;

  // @ts-ignore
  const userId = jwt.decode(token)._id;

  try {
    const findPost = await CategoryArrModel.find({
      authorId: userId,
    });

    console.log(findPost);

    return res.status(200).json({ data: findPost });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { createPostController };
