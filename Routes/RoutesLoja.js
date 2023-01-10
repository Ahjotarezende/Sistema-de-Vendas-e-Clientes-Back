const router = require("express").Router();
const Client = require("../models/Cliente");
const Item = require("../models/Item");
const Sale = require("../models/Venda");

// app.get("/", (req, res) => {
//   res.json([
//     {
//       nome: "Joao",
//       id: 12,
//     },
//     {
//       nome: "Carlos",
//       id: 21,
//     },
//   ]);
// });

router.post("/client/:id", async (req, res) => {
  const { id } = req.params;
  const { name, pagamento, cpf, telefone, email, cidade, rua, numero } =
    req.body;
  const client = {
    id,
    name,
    pagamento,
    cpf,
    telefone,
    email,
    cidade,
    rua,
    numero,
  };

  try {
    await Client.create(client);
    res.status(201).json({ message: "Inserção concluida" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/client", async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.put("/client", async (req, res) => {
  const { id, name, pagamento, cpf, telefone, email, cidade, rua, numero } =
    req.body;
  const client = {
    id,
    name,
    pagamento,
    cpf,
    telefone,
    email,
    cidade,
    rua,
    numero,
  };
  try {
    const upd = await Client.updateOne({ id: id }, client);
    if (upd.matchedCount === 0) {
      res.status(422).json({ error: "Nao encontrado" });
      return;
    }
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/client/:id", async (req, res) => {
  const id = req.params.id;
  const client = await Client.findOne({ id: id });
  if (!client) {
    res.status(422).json({ error: "Nao encontrado" });
    return;
  }
  try {
    await Client.deleteOne({ id: id });
    res.status(200).json({ message: "Removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/item/:id", async (req, res) => {
  const { id } = req.params;
  const { name, vista, prazo, cheque, quantidade, compra } = req.body;
  const item = {
    id,
    name,
    vista,
    prazo,
    cheque,
    quantidade,
    compra,
  };

  try {
    await Item.create(item);
    res.status(201).json({ message: "Inserção concluida" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/item", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.put("/item", async (req, res) => {
  const { id, name, quantidade, vista, prazo, cheque, compra } = req.body;
  const item = {
    id,
    name,
    quantidade,
    vista,
    prazo,
    cheque,
    compra,
  };
  try {
    const upd = await Item.updateOne({ id: id }, item);
    if (upd.matchedCount === 0) {
      res.status(422).json({ error: "Nao encontrado" });
      return;
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/item/:id", async (req, res) => {
  const id = req.params.id;
  const item = await Item.findOne({ id: id });
  if (!item) {
    res.status(422).json({ error: "Nao encontrado" });
    return;
  }
  try {
    await Item.deleteOne({ id: id });
    res.status(200).json({ message: "Removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/sale/:name/:id/:rota/:pagamento", async (req, res) => {
  const { name, id, rota, pagamento } = req.params;
  const data = new Date().toISOString().slice(0, 10);
  const items = req.body;
  const sale = {
    id,
    name,
    pagamento,
    data,
    items,
    rota,
  };

  try {
    await Sale.create(sale);
    res.status(201).json({ message: "Inserção concluida" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/sale", async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/sale/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sales = await Sale.findOne({ id: id });
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/sale/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Sale.deleteOne({ id: id });
    res.status(200).json({ message: "Removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
