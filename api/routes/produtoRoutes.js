import ProdutoController from "../controllers/produtoController.js";
import express from 'express';

const router = express.Router();

router
    .get("/produtos", ProdutoController.listarProdutos)


export default router;
