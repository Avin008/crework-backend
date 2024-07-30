import { userModel } from "../models/user";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const getUserController = async (req: Request, res: Response) => {
  const { token } = await req.body;

  // @ts-ignore
  const userID = jwt.decode(token)._id;

  try {
    const findUser = await userModel.findById({
      _id: userID,
    });

    return res.status(200).json({ data: findUser });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { getUserController };
