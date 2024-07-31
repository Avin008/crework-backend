import { userModel } from "../models/user";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { CategoryArrModel } from "../models/post";

const getPostController = async (req: Request, res: Response) => {
  const { token } = await req.body;

  // @ts-ignore
  const userId = jwt.decode(token)._id;

  try {
    const findPosts = await CategoryArrModel.find({
      authorId: userId,
    });

    return res.status(200).json({ data: findPosts });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { getPostController };
