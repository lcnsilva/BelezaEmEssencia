import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: { type: String },
    descricao: { type: String},
    preco : { type: Number},
    imgsource : { type: String}
});

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;