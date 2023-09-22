const Exame = require("../models/Exame");

module.exports = {
    async ListarTodos(req, res) {
        try {
            const exames = await Exame.findAll(); 

            res.status(200).json(exames); 
        } catch (error) {
            console.error("Ocorreu um erro ao tentar executar esta ação.", error);
            return res.json(error);
        }
    },

    async ListarPorId(req, res) {
        try {
            const { id_exame } = req.params

            const response = await Exame.findByPk(id_exame);

            res.status(200).json(response);
        } catch (error) {
            console.error("Ocorreu um erro ao tentar executar esta ação.", error);
            return res.json(error);
        }
    },

    async Criar(req, res) {
        try {
            const { nome_paciente, nome_medico, data_exame, tipo_exame, resultado_exame } = req.body;

            const NovoExame = await Exame.create({
                nome_paciente: nome_paciente,
                nome_medico: nome_medico, 
                data_exame: data_exame,
                tipo_exame: tipo_exame, 
                resultado_exame: resultado_exame
            });

            res.status(201).end();
        } catch (error) {
            console.error("Ocorreu um erro ao tentar executar esta ação.", error);
            return res.json(error);
        }
    },

    async Alterar(req, res) {
        try {
            const { id_exame } = req.params;
            const novosDados = req.body;

            await Exame.update(novosDados, {
                where: { id_exame }
            });

            res.status(200).send("Dados Atualizados!");
        } catch (error) {
            console.error("Ocorreu um erro ao tentar executar esta ação.", error);
            return res.json(error);
        }
    },

    async Excluir(req, res) {
        try {
            const { id_exame } = req.params;

            const response = await Exame.destroy({
                where: { id_exame }
            })

            if (response === 1) {
                res.status(204).send("Item excluído!");
            } else {
                res.send('Item não encontrado ou nenhum registro foi excluído.');
            }
        } catch (error) {
            console.error("Ocorreu um erro ao tentar executar esta ação.", error);
            return res.json(error);
        }
    }
}
