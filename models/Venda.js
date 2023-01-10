const mongoose = require("mongoose");

const Sale = mongoose.model("Sale", {
  id: Number,
  pagamento: String,
  data: String,
  items: Array,
  name: String,
  rota: String,
});

module.exports = Sale