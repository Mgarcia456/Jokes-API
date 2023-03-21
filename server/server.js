require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const routes = require('./routes/joke.routes');
routes(app);

app.listen(port, () => console.log('Express server fired up on port', port));