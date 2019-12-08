import * as express from 'express';
import UserModel from '../../models/user';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt-nodejs';
 
class UsersController {
  public path = '/users';
  public newUserPath = '/new_user';
  public router = express.Router();
  private saltRounds = 10;
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.post(this.path, this.getUser);
    this.router.post(this.newUserPath, this.createUser);
  }
 
  getUser = async (request: express.Request, response: express.Response) => {
    // TODO:  get by hashed PW
    const username = request.body.username;
    const password = request.body.password;

    console.log(`Requested user ${username}`);

    const user = await UserModel.findOne({ username });

    if(user && this.checkPasswordMatch(password, user.password)) {
      console.log('Sent user')
      return response.json(user);
    }

    console.log('error getting user')
    return response.status(404).send('error');

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
      password: this.hashPassword(password),
    });

    try {
      await user.save();
      return response.send('success!');
    } catch (error) {
      return next(error);
    }
  }
  
  hashPassword(password: string) {
    bcrypt.genSalt(this.saltRounds, function (err, salt) {
      if (err) {
        throw err;
      } else {
        bcrypt.hash(password, salt, function(err, hash) {
          if (err) {
            throw err;
          } else {
            return hash;
          }
        });
      }
    });
  }

  checkPasswordMatch(password: string, hash: string) {
    bcrypt.compare(password, hash, function(err, isMatch) {
      if (err) {
        throw err
      } else if (!isMatch) {
        console.log("Password doesn't match!")
        return false;
      } else {
        console.log("Password matches!")
        return true;
      }
    })
  }
}
 
export default UsersController;
