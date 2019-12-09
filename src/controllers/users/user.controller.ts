import * as express from 'express';
import UserModel from '../../models/user';
import { v4 as uuid } from 'uuid';
import crypto from 'crypto';
import pbkdf2 from 'pbkdf2';
 
class UsersController {
  public path = '/users';
  public newUserPath = '/new_user';
  public router = express.Router();
  private iterations = 872791;
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.post(this.path, this.getUser);
    this.router.post(this.newUserPath, this.createUser);
  }
 
  public getUser = async (request: express.Request, response: express.Response) => {
    const username = request.body.username;
    const passwordAttempt = request.body.password;

    console.log(`Requested user ${username}`);

    const user = await UserModel.findOne({ username });

    const sendUser = user && await this.checkPasswordMatch(passwordAttempt, user.hash, user.salt, user.iterations);

    if(sendUser) {
      console.log('Sent user')
      return response.json(user);
    }

    console.log('error getting user')
    return response.status(404).send('error');
  }
 
  public createUser = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    console.log('Creating user');
    console.log(request.body);
    const { username, password } = request.body;

    console.log(await this.hashPassword(password));

    const hashObj = await this.hashPassword(password);

    const user = new UserModel({
      userId: uuid(),
      username,
      ...hashObj
    });

    try {
      await user.save();
      return response.send('success!');
    } catch (error) {
      return next(error);
    }
  }
  
  private hashPassword = async (password) => {
    const salt = crypto.randomBytes(128).toString('base64');
    const hash = pbkdf2(password, salt, this.iterations);

    return {
      salt: salt,
      hash: hash,
      iterations: this.iterations
    };
  }

  private checkPasswordMatch = async (savedHash, passwordAttempt, savedSalt, savedIterations) => {
    return savedHash == pbkdf2(passwordAttempt, savedSalt, savedIterations);
  }
}
 
export default UsersController;
