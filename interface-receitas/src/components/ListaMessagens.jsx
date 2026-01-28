import Mensagem from "./Mensagem"

const ListaMessagens = ({mensagens}) => {

    return (
       <div>
            {mensagens.map(mensagem => (
                <Mensagem key={mensagem.id} mensagem={mensagem}/>
            ))}
       </div> 
    )
}

export default ListaMessagens