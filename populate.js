require('dotenv').config();

const connectDB = require('./db/connect');
// const Size = require('./models/Size');
// const Crust = require('./models/Crust');
// const ToppingType = require('./models/ToppingType');
// const Sauce = require('./models/toppings/Sauce');
// const Cheese = require('./models/toppings/Cheese');
// const Meat = require('./models/toppings/Meat');
// const Veggie = require('./models/toppings/Veggie');
const Item = require('./models/Item');

// const jsonSize = require('./productsSize.json');
// const jsonCrust = require('./productsCrust.json');
// const jsonToppingType = require('./productsToppingType.json');
// const jsonSauce = require('./productsSauce.json');
// const jsonCheese = require('./productsCheese.json');
// const jsonMeat = require('./productsMeat.json');
// const jsonVeggie = require('./productsVeggie.json');
const jsonItem = require('./orderItems.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Item.deleteMany();
    await Item.create(jsonItem);
    console.log('Success');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
