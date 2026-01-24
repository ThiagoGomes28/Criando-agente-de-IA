import express from 'express'
import receitasRoutes from './src/routes/receitas.route'

const app = express()
const PORT = 3001

app.use(express.json())

app.use('/api/receitas', receitasRoutes)

app.listen(PORT, () => {
    console.log(`Servidor Rodando na Porta ${PORT}`)
})