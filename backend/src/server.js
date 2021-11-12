const express = require('express');
const mongoose = require('mongoose');
const HttpError = require('./models/HttpError');

const cors = require('cors');

const app = express(); // habilita as funções do express;

app.use(cors({
  origin: '*'
}))


const routes = require('./routes');
const dotenv =  require('dotenv');


dotenv.config();

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
app.listen(3333, () => {
    console.log(`Listening on port ${port}`);
})