const Size = require('../models/Size');

const getAllProducts = async (req, res) => {
  const sizes = await Size.find({});
  res.status(200).json({ sizes, sizeHits: sizes.length });
};

module.exports = { getAllProducts };
