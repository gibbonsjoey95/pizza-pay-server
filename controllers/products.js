const Size = require('../models/Size');
const Crust = require('../models/Crust');
const ToppingType = require('../models/ToppingType');
const Sauce = require('../models/toppings/Sauce');
const Cheese = require('../models/toppings/Cheese');
const Meat = require('../models/toppings/Meat');
const Veggie = require('../models/toppings/Veggie');

const Item = require('../models/Item');

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
};

// const getSizes = async (req, res) => {
//   const { id: sizeID } = req.params;
//   const size = await Size.findOne({ _id: sizeID });
//   if (!size) {
//     return res.status(404).json({ success: false, msg: 'Not Found' });
//   }

//   res.status(200).json({ size });
// };

const getAllOrderItems = async (req, res) => {
  const items = await Item.find({});

  // const sauces = await Sauce.find({ active: true });
  // const cheeses = await Cheese.find({ active: true });

  // const sauceTopping = sauces.map((topping) => {
  //   return topping.name;
  // });

  // const cheeseTopping = cheeses.map((topping) => {
  //   return topping.name;
  // });

  // const allToppings = [...sauceTopping, ...cheeseTopping];

  // console.log('topping', allToppings);

  res.status(200).json({ items });
};

const createOrderItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    if (item) {
      console.log('req.body', req.body);
      res.status(201).json({ item });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOrderItem = async (req, res) => {
  const { id: itemID } = req.params;
  const item = await Item.findOne({ _id: itemID });
  if (!item) {
    return res.status(404).json({ success: false, msg: 'Not Found' });
  }

  res.status(200).json({ item });
};

const deleteItem = async (req, res, next) => {
  const { id: itemID } = req.params;
  const item = await Item.findOneAndDelete({ _id: itemID });

  if (!item) {
    return res.status(404).json({ success: false, msg: 'Not Found' });
  }

  res.status(200).json({ item });
};

const updateItem = async (req, res) => {
  const { id: itemID } = req.params;

  const item = await Item.findByIdAndUpdate({ _id: itemID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    return res.status(404).json({ success: false, msg: 'Not Found' });
  }

  res.status(200).json({ item });
};

module.exports = {
  getAllProducts,
  // getSizes,
  getAllOrderItems,
  createOrderItem,
  getOrderItem,
  deleteItem,
  updateItem,
};
