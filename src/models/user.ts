import * as mongoose from "mongoose";

export interface iUser extends mongoose.Document {
  userId: string;
  username: string; 
  hash: string;
  salt: string;
  iterations: number;
}

export const UserSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  username: {type: String, required: true},
  hash: {type: String, required: true},
  salt: {type: String, required: true},
  iterations: {type: Number, required: true},
});

export default mongoose.model<iUser>("User", UserSchema);
