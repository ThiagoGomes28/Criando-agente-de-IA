import { useState } from "react";
import ListaMessagens from "../components/listaMessagens";

const ChatReceitas = () => {
const [mensagens, setMensagens] = useState([
  {
    id: 1,
    texto: "Olá! Sou seu assistente de receitas. Como posso ajudar você hoje?",
    remetente: 'bot'
  },
  {
    id: 2,
    texto: "frango assado",
    remetente: 'usuario'
  },
  {
    id: 3,
    texto: 'A Receita de Frango Assado Suculento é uma opção deliciosa e prática para suas refeições! Com um tempero aromático feito de alho, limão e azeite de oliva, este frango fica muito suculento. Ideal para encontros em família e amigos, acompanhado de uma boa macarronada. Aprenda a preparar um Frango Assado que certamente encantará todos os paladares!',
    remetente: 'bot'
  }
])


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-gray-50 to-emerald-50">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 text-transparent bg-clip-text mb-2">Dev Chef</h1>
          <p className="text-gray-600 text-lg">Seu assistente pessoal para receitas deliciosas.</p>
        </header>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl">
            <ListaMessagens mensagens={mensagens}/>
        </div>
      </div>
    </div>
  );
};

export default ChatReceitas;
