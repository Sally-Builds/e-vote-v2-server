const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE_LOCAL;
// const DB = 'mongodb://127.0.0.1:27017/blog';
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db connected'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

//test
