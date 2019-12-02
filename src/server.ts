// import express from 'express';
// import * as bodyParser from 'body-parser';
// import mongoose from "mongoose";
 
// import streakRoutes from './routes/streakRoutes';
// import userRoutes from './routes/userRoutes';

// const port = process.env || 3000;
// const connectionURL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

// mongoose.connect(connectionURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
//   () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
// ).catch(err => {
//   console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
//   // process.exit();
// });


// function loggerMiddleware(request: express.Request, response: express.Response, next) {
//   console.log(`${request.method} ${request.path}`);
//   next();
// }
 
// const app = express();
 
// app.use(loggerMiddleware);
// app.use(bodyParser.json());
 
// app.get('/hello', (request, response) => {
//   response.send('Hello world!');
// });
 
// app.use('/streak', streakRoutes);
// app.use('/user', userRoutes);

// app.listen(port, (err?: string) => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(`server is listening on ${port}`);
// });

// app.listen(port);

import App from './app';
import StreaksController from './controllers/streakController';

const port = process.env || 3000;
 
const app = new App(
  [
    StreaksController
  ],
  port,
);
 
app.listen();
