import * as express from 'express';
import UserModel from '../../models/user';
import { v4 as uuid } from 'uuid';

class UsersController {
  public path = '/users';
  public newUserPath = '/new_user';
  public router = express.Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.post(this.path, this.getUser);
    this.router.post(this.newUserPath, this.createUser);
  }
 
  getUser = async (request: express.Request, response: express.Response) => {
    // TODO:  get by hashed PW
    console.log('Requested user')
    const username = request.params.username;
    const password = request.params.password;

    const user = await UserModel.find({ username, password });
    console.log(user)

    if(user.length) {
      response.send(user);
    }

    response.status(404).send(user);

    console.log('Sent user')
  }
 
  async createUser(request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log('Creating user');
    console.log(request.body);
    const { username, password } = request.body;

    // TODO: Hash password!!
    // for now i will add users to the DB manually
    const user = new UserModel({
      userId: uuid(),
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
