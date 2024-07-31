import { model, Schema, Types } from "mongoose";

const categorySchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  items: [
    {
      id: String,
      title: String,
      description: String,
      priority: String,
      timestamp: { type: Number, default: () => new Date().getTime() },
      createdAt: {
        type: Number,
        default: () => new Date().getTime(),
      },
    },
  ],
});

const categorySchemaArr = new Schema({
  category: [categorySchema],
  authorId: { type: Types.ObjectId },
});

const CategoryModel = model("Category", categorySchema);
const CategoryArrModel = model("CategoryArr", categorySchemaArr);

export { CategoryModel, CategoryArrModel };
