import mongoose, { Document, Schema } from "mongoose";
import { passwordEncrypt } from "../utils/passwordEncrypt";
import { emailValidation } from "../utils/emailValidation";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isActive: boolean;
  isAdmin: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [emailValidation, "Invalid email format"],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      set: (val: string) => passwordEncrypt(val),
    },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    isActive: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true, collection: "users" }
);

export default mongoose.model<IUser>("User", UserSchema);
