import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import { UserModel } from './schemas';
import { UserController } from './controllers';

const app = express();

app.use(bodyParser.json());

const User = new UserController();

mongoose.connect('mongodb://localhost:27017/chat');

app.get('/user/:id', User.show);
app.delete('/user/:id', User.delete);
app.post('/user/registration', User.create);

const port = 4000;

app.listen(port, function () {
  console.log(`server started, port is ${port}`);
});
