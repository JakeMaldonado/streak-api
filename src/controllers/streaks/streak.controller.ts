import * as express from 'express';
import Streak from './streak.interface';

class StreaksController {
  public path = '/streaks';
  public router = express.Router();
 
  private streaks: Streak[] = [
    {
      userId: 'sad31f1fqs',
      streakId: 'bw1323f231dsaA32',
      title: "Streak!",
      description: "This is a sample streak",
      startDate: new Date(),
      countBy: 'day',
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createStreak);
  }
 
  getAllUsers = (request: express.Request, response: express.Response) => {
    console.log('Sent all streaks')
    response.send(this.streaks);
  }
 
  createStreak = (request: express.Request, response: express.Response) => {
    console.log('Created streak!')
    const streak: Streak = request.body;
    this.streaks.push(streak);
    response.send(streak);
  }
}
 
export default StreaksController;
