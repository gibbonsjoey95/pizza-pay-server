const Size = require('../models/Size');
const Crust = require('../models/Crust');
const ToppingType = require('../models/ToppingType');
const Sauce = require('../models/toppings/Sauce');
const Cheese = require('../models/toppings/Cheese');
const Meat = require('../models/toppings/Meat');
const Veggie = require('../models/toppings/Veggie');

const getAllProducts = async (req, res) => {
  const sizes = await Size.find({});
  const crusts = await Crust.find({});
  const toppingTypes = await ToppingType.find({});

  const sauces = await Sauce.find({});
  const cheeses = await Cheese.find({});
  const meats = await Meat.find({});
  const veggies = await Veggie.find({});

  const toppings = { sauces, cheeses, meats, veggies };

  res.status(200).json({
    sizes,
    crusts,
    toppingTypes,
    toppings,
  });

  const getAllOrderItems = async (req, res) => {
    res.json({ msg: 'This will be all of ther order items' });
  };
};

module.exports = { getAllProducts, getAllOrderItems };
