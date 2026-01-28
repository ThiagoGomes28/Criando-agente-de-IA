

const Mensagem = ({mensagem}) => {
const isBot = mensagem.remetente === 'bot'

    return (
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
            <div>
                <p>{mensagem.texto}</p>
            </div>
        </div>
    )
}

export default Mensagem