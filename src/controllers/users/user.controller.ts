import * as express from 'express';
import User from './user.interface';
import UserModel from '../../models/user';

class UsersController {
  public path = '/users';
  public router = express.Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getUser);
    this.router.post(this.path, this.createUser);
  }
 
  getUser = async (request: express.Request, response: express.Response) => {
    // TODO:  get by hashed PW
    console.log('Requested user')
    const username = request.params.username;
    const password = request.params.password;

    const user = await UserModel.find({ username, password });

    response.send(user);

    console.log('Sent user')
  }
 
  async createUser(request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log('Creating user');
    console.log(request.body);
    const { username, password } = request.body;

    // TODO: Hash password!!
    const user = new UserModel({
      username,
      password,
    });

    try {
      await user.save();
      return response.send('success!');
    } catch (error) {
      return next(error);
    }
  }
}
 
export default UsersController;
