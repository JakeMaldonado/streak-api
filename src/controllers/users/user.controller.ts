import * as express from 'express';
import User from './user.interface';

class UsersController {
  public path = '/users';
  public router = express.Router();
 
  private users: User[] = [
    {
      userId: 'dsa7q93fs',
      username: 'test_user',
      password: 'William.B.Hashed',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createUser);
  }
 
  getAllUsers = (request: express.Request, response: express.Response) => {
    response.send(this.users);
    console.log('Sent all users');
  }
 
  createUser = (request: express.Request, response: express.Response) => {
    const user: User = request.body;
    this.users.push(user);
    response.send(user);
    console.log('Created a user');
  }
}
 
export default UsersController;
