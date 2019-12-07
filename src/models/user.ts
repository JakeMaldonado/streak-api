import * as mongoose from "mongoose";

export interface iUser extends mongoose.Document {
  userId: string;
  username: string; 
  password: string;
}

export const UserSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
});

export default mongoose.model<iUser>("User", UserSchema);
