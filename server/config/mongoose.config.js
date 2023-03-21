const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.PASSWORD;
const dbUri = process.env.DB_URI;
const uri = `mongodb+srv://${username}:${pw}${dbUri}/${dbName}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log('WOWZERS WE HAVE DONE THE CONNECTED TO THE DATABASESE')
  )
  .catch((err) =>
    console.log('Something went wrong when connecting to the database', err)
  );