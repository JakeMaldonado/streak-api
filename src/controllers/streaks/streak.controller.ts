import * as express from 'express';
import StreakModel from '../../models/streak';
import { v4 as uuid } from 'uuid';

class StreaksController {
  public path = '/streaks/:id';
  public router = express.Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllStreaks);
    this.router.post(this.path, this.createStreak);
    this.router.delete(this.path, this.deleteStreak);
    this.router.patch(this.path, this.updateStreak);
  }
 
  getAllStreaks = async (request: express.Request, response: express.Response) => {
    console.log('Requested all streaks')
    const userId = request.params.id;
    console.log(userId)

    // going to have to use a session key instead of user id to be secure
    // TODO: make an auth middleware to check if user is relevant before these methods run
    const userStreaks = await StreakModel.find({ userId });

    response.send(userStreaks);

    console.log('Sent all streaks')
  }
 
  async createStreak(request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log('Creating streak');
    console.log(request.body);

    // IMPORTANT: Fix all streaks getting this ID, wtf
    const { userId, title, description, startDate, countBy } = request.body;
    const streak = new StreakModel({
      userId,
      title,
      description,
      startDate,
      countBy,
      streakId: uuid(),
    });

    try {
      const newStreak = await streak.save();
      return response.send(newStreak);
    } catch (error) {
      return next(error);
    }
  }

  async deleteStreak(request: express.Request, response: express.Response, next: express.NextFunction) {
    const userId = request.params.id;
    const streakId: string = request.body.streakId;

    console.log('Deleting streak');
    console.log(streakId);

    try {
      return await StreakModel.deleteOne({ streakId, userId });
    } catch (error) {
      return next(error);
    }
  }

  async updateStreak(request: express.Request, response: express.Response, next: express.NextFunction) {
    const userId = request.params.id;
    const streakId: string = request.body.streakId;
    const updates: object = request.body.updates;

    console.log('Updating streak');
    console.log(streakId);

    try {
      const userStreak = await StreakModel.findOne({ userId, streakId }); 
      await userStreak.overwrite({
        streakId,
        userId,
        ...updates
      });
      await userStreak.save();
      return response.json(userStreak)
    } catch (error) {
      return next(error);
    }
  }
}
 
export default StreaksController;
