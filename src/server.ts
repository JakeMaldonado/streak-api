import App from './app';
import StreaksController from './controllers/streak.controller';
import UsersController from './controllers/user.controller';

const port = process.env || 3000;
 
const app = new App(
  [
    new StreaksController(),
    new UsersController()
  ],
  port,
);
 
app.listen();
