import "./lib/db";
import express from "express";
import { router as userRouter } from "../src/routes/user";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
