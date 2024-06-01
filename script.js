import swiper from "./js/swiper.js";

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
      item.remove();
      verificaCarrinho();
      removerContadorCarrinho();
    })
  })
})

fecharLogin.addEventListener("click", (event) => {
  event.preventDefault();
  abrirModal();
})

botaoLoginIcone.addEventListener("click", (event) => {
  event.preventDefault();
  abrirModal();
})

botaoLogin.addEventListener("click", (event) => {
  event.preventDefault();
  abrirModal();
})

botaoFaixaPromocao.addEventListener("click", (e) => {
  e.preventDefault();
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

function abrirModal(){
  const modal = document.querySelector(".container__modal");
  if(modal.style.display == 'none'){
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

function adicionarAoCarrinho() {
  const contadorCarrinho = document.getElementById("comprasCarrinho");
  var contadorAtual = parseInt(contadorCarrinho.textContent);
  contadorAtual++;
  contadorCarrinho.textContent = contadorAtual;
}

function toggleDropdown() {
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

function removerContadorCarrinho() {
  const contadorCarrinho = document.getElementById("comprasCarrinho");
  const menu = document.querySelector('#dropdownMenu');
  const carrinhoVazio = menu.querySelector(".carrinho__vazio")
  if(!carrinhoVazio){
    const menu = document.querySelector('#dropdownMenu');
    var contadorAtual = menu.children.length;
    contadorCarrinho.textContent = contadorAtual;
  } else{
    contadorCarrinho.textContent = 0;
  }
  
}

function favoritarProduto() {
  const favorito = document.getElementById("iconeFavorito");
  var isPreenchido = favorito.classList.contains('icone__card-favorito-preenchido');
  if(isPreenchido) {
    favorito.classList.remove('icone__card-favorito-preenchido');
    favorito.classList.add('icone__card-favorito');
  } else {
    favorito.classList.add('icone__card-favorito-preenchido');
    favorito.classList.remove('icone__card-favorito');
  }
}

botoesComprar.forEach((e) => {
  e.addEventListener("click", (event) => {
    adicionarAoCarrinho();
    event.preventDefault();
    removeMensagem();
  })
})


const camposDoFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector('[data-formulario]');

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

const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError'
]

const mensagens = {
  username: {
      valueMissing: "O campo de usuário não pode estar vazio.",
      patternMismatch: "Por favor, preencha um nome válido.",
      tooShort: "O nome de usuário é muito curto."
  },
  password: {
      valueMissing: "O campo de senha não pode estar vazio.",
      typeMismatch: "Por favor, preencha uma senha válida.",
      tooShort: "A senha inserida é muito curta."
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "O email inserido é muito curto."
  }
}

function verificaCampo(campo) {
  let mensagem = '';
  campo.setCustomValidity('');
  tiposDeErro.forEach(erro => {
      if(campo.validity[erro]){
          mensagem = mensagens[campo.name][erro]
      }
  })

  const mensagemErro = campo.parentNode.querySelector('.mensagem__erro');
  const validadorDeInput = campo.checkValidity();

  if(!validadorDeInput) {
      mensagemErro.textContent = mensagem;
  } else {
      mensagemErro.textContent = '';
  }
}

function verificaCarrinho() {
  const menu = document.querySelector('#dropdownMenu');
  const novoItem = document.createElement('li');
  novoItem.className = 'carrinho__vazio';
  novoItem.innerHTML = `
      <div class="carrinho__vazio">
          O carrinho está vazio
      </div>

      `
  if(menu.children.length === 0){
    menu.appendChild(novoItem);
  }
}

function removeMensagem() {
  const menu = document.querySelector('#dropdownMenu');
  const carrinhoVazio = document.querySelector(".carrinho__vazio");
  if(carrinhoVazio){
    menu.removeChild(carrinhoVazio);
  }
}

botoesComprar.forEach((botoes) => {
  botoes.addEventListener("click", () => {
    const card = botoes.closest('.container__card');
    const imagemProduto = card.querySelector(".container__card-imagem img").src;
    const tituloProduto = card.querySelector('.titulo-card').textContent;
    const descricaoProduto = card.querySelector('.descricao-card').textContent;
    const precoProduto = card.querySelector('.titulo-preco').textContent;
    const dominio = window.location.origin;
    const caminhoRelativo = imagemProduto.substring(dominio.length);
    const produto = {
      "titulo" : tituloProduto,
      "descricao" : descricaoProduto,
      "preco" : precoProduto,
      "url" : caminhoRelativo
    }
    const menu = document.querySelector('#dropdownMenu');
    const novoItem = document.createElement('li');
    novoItem.className = 'dropdown-item';
    novoItem.innerHTML = `
        <div>
            <img class="dropdown-item-icon" src="${produto.url}" alt="">
        </div>
        <div class="dropdown-item-texto">
            <span class="titulo-item">${produto.titulo}</span>
            <span class="descricao-item">${produto.descricao}</span>
        </div>
        <span class="preco-item">${produto.preco}</span>
        <button class="dropdown-botao-limpar"><img src="./img/header/modal/close.svg" width="20px" height="20px"></button>

    `
    menu.appendChild(novoItem);
    fecharDropdown();
  })
})
