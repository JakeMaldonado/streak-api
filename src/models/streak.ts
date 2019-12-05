import * as mongoose from "mongoose";

export interface iStreak extends mongoose.Document {
  userId: string;
  streakId: string;
  title: string;
  description: string;
  startDate: Date;
  countBy: string;
}

export const StreakSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  streakId: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  startDate: {type: Date, required: true},
  countBy: {type: String, required: true},
});

export default mongoose.model<iStreak>("Streak", StreakSchema);
