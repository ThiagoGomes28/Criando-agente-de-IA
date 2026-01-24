import obterRespostaReceita from '../services/gemini.service'

export const perguntarReceita = async (req, res) => {
    const { pergunta } = req.body

    try{

    if(!pergunta) {
        return res.status(400).json({
            erro: "É obrigatório enviar uma pergunta"
        })
    }

    const resposta = await obterRespostaReceita(pergunta)

    res.json({ resposta })

    } catch(err) {
        res.status(500).json({
            erro: "Erro ao processar sua pergunta. Tente novamente"
        })
    }
}