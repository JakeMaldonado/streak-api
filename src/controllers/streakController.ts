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
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.streaks);
  }
 
  createAPost = (request: express.Request, response: express.Response) => {
    const streak: Streak = request.body;
    this.streaks.push(streak);
    response.send(streak);
  }
}
 
export default StreaksController;
