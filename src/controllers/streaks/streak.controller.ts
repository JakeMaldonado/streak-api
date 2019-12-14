import * as express from 'express';
import StreakModel from '../../models/streak';

class StreaksController {
  public path = '/streaks/:id';
  public router = express.Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllStreaks);
    this.router.post(this.path, this.createStreak);
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
    const { userId, title, description, startDate, countBy } = request.body;
    const streak = new StreakModel({
      userId,
      title,
      description,
      startDate,
      countBy,
      streakId: '1',
    });

    try {
      await streak.save();
      return response.send({
        userId,
        title,
        description,
        startDate,
        countBy,
        streakId: '1',
      });
    } catch (error) {
      return next(error);
    }
  }
}
 
export default StreaksController;
