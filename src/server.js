const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const port = 3000;

const sequelize = require('./database/sequelize');
const Receita = require("./models/Receita");

app.use(cors());
app.use(express.json());
app.use(router);
sequelize.sync().then(() => {
    app.listen(port, () => `Servidor rodando na porta ${port}`)
});