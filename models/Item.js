const mongoose = require("mongoose");

const Item = mongoose.model("Item", {
  id: Number,
  name: String,
  vista: Number,
  prazo: Number,
  viagem: Number,
  quantidade: Number,
  compra: Number,
});

module.exports = Item;
