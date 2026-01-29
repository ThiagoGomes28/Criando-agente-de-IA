import { useState } from "react";
import ListaMessagens from "../components/ListaMessagens";
import ChatBox from "../components/ChatBox";
import { api } from '../services/api'

const ChatReceitas = () => {

const [loading, setLoading] = useState(false)

const [mensagens, setMensagens] = useState([
  {
    id: 1,
    texto: "Olá! Sou seu assistente de receitas. Como posso ajudar você hoje?",
    remetente: 'bot'
  }
])

  const onEnviarMensagem = async (mensagem) => {
    try {

      const resposta = await api(mensagem)

      console.log(resposta)
    } catch(err){
        console.error(err)
    }


  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-gray-50 to-emerald-50">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 text-transparent bg-clip-text mb-2">Dev Chef</h1>
          <p className="text-gray-600 text-lg">Seu assistente pessoal para receitas deliciosas.</p>
        </header>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-[500px] border border-gray-100 flex flex-col">
            <ListaMessagens mensagens={mensagens}/>
            <ChatBox onEnviarMensagem={onEnviarMensagem} desabilitado={loading} />
        </div>
      </div>
    </div>
  );
};

export default ChatReceitas;
