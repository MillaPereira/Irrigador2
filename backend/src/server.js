const express = require('express');
const mongoose = require('mongoose');
const HttpError = require('./models/HttpError');
const http = require('http');
const ws = require('ws');

const dotenv =  require('dotenv');
const cors = require('cors');
const routes = require('./routes');

const app = express(); // habilita as funções do express;

app.use(cors({
  origin: '*'
}))

const server = http.createServer(app)
const wss = new ws.WebSocketServer({ server });

dotenv.config();

wss.on('connection', (ws) => {
  console.log("New connection!");

  ws.on('message', message => {
    console.log("Received message: ", message.toString());

    wss.clients.forEach(client => {
      if (client !== ws) {
        client.send(message.toString())
      }
    })
  })
})

app.use(express.json()); // diz que está usando json
app.use(routes);

// catch wrong routes
app.use((req, res, next) => {
  return next(new HttpError("This route does not exists!", 404));
});

// catch errors
app.use((err,request,response,next) => {
    if (err instanceof HttpError) {
      response.status(err.errorCode);
      return response.json({ message: err.message });
    }

    return response.status(500).json({ errorMessage: "Unknown error" });
  }
);

const db_uri = process.env.DB_URI;
(async () => {
    try {
        await mongoose.connect(db_uri);
        console.log("Connected to the database!");
    } catch(err) {
        throw new Error("Connection to the database failed!");
    }
})();



const port = process.env.PORT;
server.listen(3333, () => {
    console.log(`Listening on port ${port}`);
})