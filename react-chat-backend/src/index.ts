import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import { UserController, DialogController, MessageController } from './controllers';

const app = express();

app.use(bodyParser.json());

const User = new UserController();
const Dialog = new DialogController();
const Messages = new MessageController();

mongoose.connect('mongodb://localhost:27017/chat');

app.get('/user/:id', User.show);
app.delete('/user/:id', User.delete);
app.post('/user/registration', User.create);

app.get('/dialogs', Dialog.index);
app.delete('/dialogs/:id', Dialog.delete);
app.post('/dialogs', Dialog.create);

app.get('/messages', Messages.index);
app.post('/messages', Messages.create);
app.delete('/messages/:id', Messages.delete);

const port = 4000;

app.listen(port, function () {
  console.log(`server started, port is ${port}`);
});
