
const Consulta = require("../models/Consulta");

module.exports = {
    async ListarTodos(req, res) {
        try {
            const Consultas = await Consulta.findAll();
            res.status(200).json(Consultas);

        } catch (error) {
            console.error("Ocorreu um erro ao tentar executar esta ação.", error);
            return res.json(error);
        }
        

    },

    async ListarPorId(req, res) {
        try {
            const {id_consulta} = req.params

            const response = await Consulta.findByPk (id_consulta);
          
            res.status(200).json(response); 
        } catch (error) {
            console.error("Ocorreu um erro ao tentar executar esta ação", error);

        }
    },

    async Criar(req, res) {
        try {
            const { data_consulta, medico, CRM, nome_paciente, alergias, motivo_da_consulta, sintomas, diagnostico, prescricao } = req.body;
            
            const NovaConsulta = Consulta.create({
                data_consulta: data_consulta,
                medico: medico,
                CRM: CRM,
                nome_paciente: nome_paciente,
                alergias: alergias,
                motivo_da_consulta: motivo_da_consulta,
                sintomas: sintomas,
                diagnostico: diagnostico,
                prescricao: prescricao


            })
            
            res.status(201).end();
        }catch (error) {
            console.error("Ocorreu um erro ao tentar executar esta ação.", error);
            return res.json(error);

        }

    },

    async Alterar(req, res) {
        try{
            const {id_consulta} = req.params;
            const novosDados = req.body;

            await Consulta.update(novosDados, {
                where: {id_consulta}
            });

            res.status(200).send("Dados Atualizados!");

        } catch (error) {
            console.error("Ocorreu um erro ao tentar executar esta ação.", error);
            return res.json(error);
        }
    },

    async Excluir(req, res){
        try {
            const {id_consulta} = req.params;

            const response = await Consulta.destroy ({
                where: {id_consulta}
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