const express = require('express');

const ControllerReceita = require('./controller/ControllerReceita');


const router = express.Router();

router.get("/api/v1/receita/all", ControllerReceita.ListarTodos);
router.get("/api/v1/receita/:id_receita", ControllerReceita.ListarPorId);
router.post("/api/v1/receita/create", ControllerReceita.Criar);
router.put("/api/v1/receita/update/:id_receita", ControllerReceita.Alterar);
router.delete("/api/v1/receita/delete/:id_receita", ControllerReceita.Excluir);


const ControllerExame = require('./controller/ControllerExame');

router.get("/api/v1/exame/all", ControllerExame.ListarTodos); 
router.get("/api/v1/exame/:id_exame", ControllerExame.ListarPorId);
router.post("/api/v1/exame/create", ControllerExame.Criar); 
router.put("/api/v1/exame/update/:id_exame", ControllerExame.Alterar);
router.delete("/api/v1/exame/delete/:id_exame", ControllerExame.Excluir);

module.exports = router;