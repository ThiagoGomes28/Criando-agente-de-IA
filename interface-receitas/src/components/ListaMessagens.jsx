

const ListaMessagens = ({mensagens}) => {

    return (
       <div>
            {mensagens.map(mensagem => (
                <div key={mensagem.id}>{mensagem.texto}</div>
            ))}
       </div> 
    )
}

export default ListaMessagens