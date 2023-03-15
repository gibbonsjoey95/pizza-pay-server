require('dotenv').config();

const connectDB = require('./db/connect');
const Size = require('./models/Size');

const jsonSize = require('./productsSize.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Size.deleteMany();
    await Size.create(jsonSize);
    console.log('Success');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
