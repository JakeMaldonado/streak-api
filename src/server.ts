import mongoose from "mongoose";
import express from 'express';

import streakRoutes from './routes/streakRoutes';
import userRoutes from './routes/userRoutes';

const port = process.env || 3000;
const connectionURL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

mongoose.connect(connectionURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});


const app = express();

app.use('/streak', streakRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, (err?: string) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

