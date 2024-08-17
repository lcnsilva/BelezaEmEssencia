import swiper from "./js/swiper.js";
import criarProdutos from "./js/criarProdutos.js"
import abrirModal from "./js/abrirModal.js";
import verificaCampo from "./js/validacaoErro.js";

const botoesComprar = document.querySelectorAll(".botao__carrinho");
const botoesFavorito = document.querySelectorAll(".botao__favorito");
const botaoFaixaPromocao = document.querySelector("#faixaPromocao");
const containerCardBotao = document.querySelectorAll(".container__card-botao")
const botaoLogin = document.querySelector("#botaoLogin");
const botaoLoginIcone = document.querySelector("#botaoLoginIcone");
const fecharLogin = document.querySelector("#fecharLogin");
var botaoMenu = document.getElementById('abrirMenu');
var menu = document.getElementById('lista__menu');
const iconeCompra = document.querySelector(".icone__compras");
const textoCompra = document.querySelector(".icone__compras-texto");
const botaoExcluirCompra = document.querySelectorAll(".dropdown-botao-limpar");
const containerModal = document.querySelector(".container__modal");
const camposDoFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector('[data-formulario]');

containerModal.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target === containerModal) {
    abrirModal();
  }
})

botaoExcluirCompra.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    const item = e.target.closest(".dropdown-item");
    item.remove();
  })
})

iconeCompra.addEventListener("click", (event) => {
  toggleDropdown();
  const botaoExcluirCompra = document.querySelectorAll(".dropdown-botao-limpar");
  botaoExcluirCompra.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const item = e.target.closest(".dropdown-item");
      removerItemLocalStorage(item);
      item.remove();
      verificaCarrinho();
      removerContadorCarrinho();
    })
  })
})

textoCompra.addEventListener("click", (event) => {
  toggleDropdown();
  const botaoExcluirCompra = document.querySelectorAll(".dropdown-botao-limpar");
  botaoExcluirCompra.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const item = e.target.closest(".dropdown-item");
      removerItemLocalStorage(item);
      item.remove();
      verificaCarrinho();
      removerContadorCarrinho();
    })
  })
})

fecharLogin.addEventListener("click", (event) => {
  abrirModal();
})

botaoLoginIcone.addEventListener("click", (event) => {
  abrirModal();
})

botaoLogin.addEventListener("click", (event) => {
  abrirModal();
})

botaoFaixaPromocao.addEventListener("click", (e) => {
  const faixa = document.querySelector(".container__promocao");
  if(faixa.style.display == "none"){
    faixa.style.display = "flex";
  } else {
    faixa.style.display = "none";
  }
})

botoesFavorito.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
  })
})

botaoMenu.addEventListener("click", function(){
  if(menu.style.display == 'block'){
    menu.style.display = 'none';
  } else{
    menu.style.display ='block';
  }
});

containerCardBotao.forEach((e) =>{
  e.addEventListener('click', (event) => {
  if(event.target.classList.contains('icone__card-favorito') || event.target.classList.contains('icone__card-favorito-preenchido')){
    var isPreenchido = event.target.classList.contains('icone__card-favorito');
    if(isPreenchido){
      event.target.classList.add("icone__card-favorito-preenchido");
      event.target.classList.remove("icone__card-favorito");
    } else {
      event.target.classList.remove("icone__card-favorito-preenchido");
      event.target.classList.add("icone__card-favorito");
    }
  }
})})

botoesComprar.forEach((e) => {
  e.addEventListener("click", (event) => {
    adicionarAoCarrinho();
    removeMensagem();
  })
})

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespostas = {
      "username": e.target.elements["username"].value,
      "password": e.target.elements["password"].value,
  }
  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

})

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", evento => evento.preventDefault());
})

botoesComprar.forEach((botoes) => {
  botoes.addEventListener("click", () => {
    const card = botoes.closest('.container__card');
    const imagemProduto = card.querySelector(".container__card-imagem img").src;
    const tituloProduto = card.querySelector('.titulo-card').textContent;
    const descricaoProduto = card.querySelector('.descricao-card').textContent;
    const precoProduto = card.querySelector('.titulo-preco').textContent;
    if(!localStorage.getItem('counter') === null){
      localStorage.setItem('counter', 0);
    } else {
      var counter = Number(localStorage.getItem('counter'))
      counter = counter + 1;
      localStorage.setItem('counter', counter);
    }
    const produtoData = {
      "id" : counter,
      "titulo" : tituloProduto,
      "descricao" : descricaoProduto,
      "preco" : precoProduto,
      "url" : imagemProduto
    }
    localStorage.setItem(produtoData.id, JSON.stringify(produtoData));
    fecharDropdown();
  })
})

function preencherCarrinho() {
  const items = puxarItensLocalStorage();
  const dropdown = document.querySelector('#dropdownMenu');
  dropdown.innerHTML = "";
  items.forEach( (item) => {
    const produto = item;
    const menu = document.querySelector('#dropdownMenu');
    const novoItem = document.createElement('li');
    novoItem.className = 'dropdown-item';
    novoItem.innerHTML = 
    `
      <div>
          <img class="dropdown-item-icon" src="${produto.url}" alt="${produto.id}">
      </div>
      <div class="dropdown-item-texto">
          <span class="titulo-item">${produto.titulo}</span>
          <span class="descricao-item">${produto.descricao}</span>
      </div>
      <span class="preco-item">${produto.preco}</span>
      <button class="dropdown-botao-limpar"><img src="./img/header/modal/close.svg" width="20px" height="20px"></button>

    `
    menu.appendChild(novoItem);
  })  
  verificaCarrinho();
  removerContadorCarrinho();
}

window.addEventListener('load', () => {
  preencherCarrinho();
  criarProdutos('liz');
  criarProdutos('lily');
  criarProdutos('coffee');
});

function adicionarAoCarrinho() {
  const contadorCarrinho = document.getElementById("comprasCarrinho");
  var contadorAtual = parseInt(contadorCarrinho.textContent);
  contadorAtual++;
  contadorCarrinho.textContent = contadorAtual;
}

function removerContadorCarrinho() {
  const contadorCarrinho = document.getElementById("comprasCarrinho");
  const menu = document.querySelector('#dropdownMenu');
  const carrinhoVazio = menu.querySelector(".carrinho__vazio")
  if (!carrinhoVazio) {
      const menu = document.querySelector('#dropdownMenu');
      var contadorAtual = menu.children.length;
      contadorCarrinho.textContent = contadorAtual;
  } else {
      contadorCarrinho.textContent = 0;
  }
}

function verificaCarrinho() {
  const menu = document.querySelector('#dropdownMenu');
  if (menu.children.length === 0) {
      const novoItem = document.createElement('li');
      novoItem.className = 'carrinho__vazio';
      novoItem.innerHTML = `
      <div class="carrinho__vazio">
          O carrinho está vazio
      </div>

      `
      menu.appendChild(novoItem);
  }
}

function removeMensagem() {
  const menu = document.querySelector('#dropdownMenu');
  const carrinhoVazio = document.querySelector(".carrinho__vazio");
  if (carrinhoVazio) {
      menu.removeChild(carrinhoVazio);
  }
}

function toggleDropdown() {
  preencherCarrinho();
  const dropdown = document.querySelector(".dropdown");
  if(dropdown.style.display == 'none') {
    dropdown.style.display = 'block';
  } else { 
    dropdown.style.display = 'none';
  }
}

function fecharDropdown() {
  const dropdown = document.querySelector(".dropdown");
  if(dropdown.style.display == 'block') {
    dropdown.style.display = 'none';
  }
}

function removerItemLocalStorage(item) {
  const img = item.querySelector('.dropdown-item-icon');
  const alt = img.getAttribute('alt');
  localStorage.removeItem(alt);
}

function puxarItensLocalStorage() {
  const items = [];
  for(let i = 0 ; i < localStorage.length ; i++) {
    const key = localStorage.key(i);
    if(key == 'counter'){
      continue;
    }
    if(key != null) {
      const item = JSON.parse(localStorage.getItem(key));
      items.push(item);
    }
  }
  return items;
}