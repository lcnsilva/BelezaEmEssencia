import produtos from "../models/Produto.js";

class ProdutoController {

    static listarProdutos = async(req, res) => {
        try {
          const produtosResultado = await produtos.find();
    
          res.status(200).json(produtosResultado);
          
      } catch (erro) {
              res.status(500).json({ message: "Erro interno no servidor" });
      }
    }
}

export default ProdutoController;