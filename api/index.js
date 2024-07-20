import express from 'express';
import dbConexao from './config/dbConnection.js';
import cors from 'cors'
import 'dotenv/config'
import routes from './routes/index.js';


const app = express();
const PORT = 3000;
const conexao = await dbConexao();

app.use(express.json())
routes(app);

conexao.on("error", (erro) => {
    console.error("Erro de conexão.", erro);
})

conexao.once("open", () => {
    console.log("Banco Conectado.");
})


app.use(cors({
    origin: '*'
}));

app.get("/api", (req,res) => {
    res.send("Funcionando.");
});

app.listen(PORT, () => {
    console.log(`Servidor escutando em http://localhost:${PORT}`);
});


export default app;