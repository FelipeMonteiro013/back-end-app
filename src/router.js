const express = require('express');

const ControllerReceita = require('./controller/ControllerReceita');
const ControllerExame = require('./controller/ControllerExame');
const ControllerConsulta = require('./controller/ControllerConsulta');

const router = express.Router();

router.get("/api/v1/receita/all", ControllerReceita.ListarTodos);
router.get("/api/v1/receita/:id_receita", ControllerReceita.ListarPorId);
router.post("/api/v1/receita/create", ControllerReceita.Criar);
router.put("/api/v1/receita/update/:id_receita", ControllerReceita.Alterar);
router.delete("/api/v1/receita/delete/:id_receita", ControllerReceita.Excluir);

router.get("/api/v1/exame/all", ControllerExame.ListarTodos); 
router.get("/api/v1/exame/:id_exame", ControllerExame.ListarPorId);
router.post("/api/v1/exame/create", ControllerExame.Criar); 
router.put("/api/v1/exame/update/:id_exame", ControllerExame.Alterar);
router.delete("/api/v1/exame/delete/:id_exame", ControllerExame.Excluir);

router.get("/api/v1/consulta/all", ControllerConsulta.ListarTodos);
router.get("/api/v1/consulta/:id_consulta", ControllerConsulta.ListarPorId);
router.post("/api/v1/consulta/create", ControllerConsulta.Criar);
router.put("/api/v1/consulta/update/:id_consulta", ControllerConsulta.Alterar);
router.delete("/api/v1/consulta/delete/:id_consulta", ControllerConsulta.Excluir);

module.exports = router;