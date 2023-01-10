const mongoose = require("mongoose");

const Client = mongoose.model("Client", {
  id: Number,
  name: String,
  pagamento: String,
  cpf: String,
  telefone: String,
  email: String,
  cidade: String,
  rua: String,
  numero: Number,
  firstIndi: String,
  secondIndi: String,
  thirdIndi: String,
});

module.exports = Client;
