import App from './app';
import StreaksController from './controllers/streaks/streak.controller';
import UsersController from './controllers/users/user.controller';

const port = process.env || 3000;
 
const app = new App(
  [
    new StreaksController(),
    new UsersController()
  ],
  port,
);
 
app.listen();
