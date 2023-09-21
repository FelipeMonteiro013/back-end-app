const Receita = require("../models/Receita");

module.exports = {
    async ListarTodos(req, res) {
        try {
            const Receitas = await Receita.findAll();

            res.status(200).json(Receitas);
        } catch (error) {
            console.error("Ocorreu um erro ao tentar execultar esta ação.", error);
            return res.json(error);
        }
    },

    async ListarPorId(req, res) {
        try {
            const { id_receita } = req.params

            const response = await Receita.findByPk(id_receita);

            res.status(200).json(response);

        } catch (error) {
            console.error("Ocorreu um erro ao tentar execultar esta ação.", error);
            return res.json(error);
        }
    },

    async Criar(req, res) {
        try {
            const { nome_paciente, nome_medico } = req.body;

            const NovaReceita = Receita.create({
                nome_paciente: nome_paciente,
                nome_medico: nome_medico
            })

            res.status(201).end();


        } catch (error) {
            console.error("Ocorreu um erro ao tentar execultar esta ação.", error);
            return res.json(error);
        }
    },

    async Alterar(req, res) {
        try {
            const { id_receita } = req.params;
            const novosDados = req.body;

            await Receita.update(novosDados, {
                where: { id_receita }
            });

            res.status(200).send("Dados Atualizados!");

        } catch (error) {
            console.error("Ocorreu um erro ao tentar execultar esta ação.", error);
            return res.json(error);
        }
    },

    async Excluir(req, res) {
        try {
            const { id_receita } = req.params;

            const response = await Receita.destroy({
                where: { id_receita }
            })

            if (response === 1) {
                res.status(204).send("Item excluido!");
            } else {
                res.send('Item não encontrado ou nenhum registro foi excluído.');
            }

        } catch (error) {
            console.error("Ocorreu um erro ao tentar execultar esta ação.", error);
            return res.json(error);
        }
    }
}