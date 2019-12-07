import * as mongoose from "mongoose";

export interface iUser extends mongoose.Document {
  username: string; 
  password: string;
}

export const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
});

export default mongoose.model<iUser>("User", UserSchema);
