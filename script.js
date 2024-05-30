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
    console.log("carrinho funcionando");
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

// USAR LOCAL STORAGE PARA SALVAR INTERAÇÕES ENTRE FAVORITOS E ADICIONAR AO CARRINHO NA PAGIMA HOME OU NA PAGINA TDS OS PRODUTOS, PARA QUE NÃO RESETE AO TROCAR DE PÁGINA.
//CRIAR UM OBJETO AO ADICIONAR NO CARRINHO, SALVA NO LOCAL STORAGE COMO JSON, E AO MOSTRAR O CARRINHO PUXA DO LOCALSTORAGE E CRIA UM INNERHTML
//FAZER FUNÇÃO PARA CRIAR DESCONTO NOS PRODUTOS DE FORMA AUTOMATICA, ONDE TEM O PREÇO ORIGINAL - PREÇO DESCONTADO E CALCULA A % DO DESCONTO AUTOMATICAMENTE 
//CRIAR BOTÃO NO FINAL DA PÁGINA(PARA DEMONSTRAR) QUE ATIVE/DESATIVE UMA FAIXA EM CIMA DO HEADER COMO SE FOSSE DE PROMOÇÃO/CUPOM VVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO

//VER COMO DAR FILL NO SVG PARA MUDAR VVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO

//fazer span para aparecer o numero de compras no carrinho VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO
//ajeitar os for do header
//trocar icones com span por img

//fazer segundo menu com as opções e alinhar o primeiro menu width 60% VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO

//testar banner com witdh 60% VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO

//AJEITAR TAMANHO DOS CARD EM FULL HD++ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO
//ajeitar padding dos card para deixar mais próximos, reduzir tamanho e deixar mais esticado

//footer = trocar de lugar o fale conosco e colocar a newsletter no meio VVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO
//fazer menu de navegação no footer


//criar item para aparecer no carrinho com innerHTML e modal
//DEPOIS VER COMO QUE FAZ PARA MULTIPLICAR AS ESTRELAS DE RATING
//PEGAR O INPUT DA BARRA DE PESQUISA, E SE FOR DE UMA DAS LINHAS DISPONÍVEIS NO SITE REDIRECIONAR PARA A POSIÇÃO OU UMA PÁGINA NOVA QUE MOSTRE SOBRE A LINHA ESCOLHIDA

//FAZER VALIDAÇÃO DE FORMULÁRIOS NO LOGIN DO MODAL VVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO
//TERMINAR MODAL DE LOGIN VVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO
//FAZER PAGINA PARA LOGAR INICIALMENTE VVVVVVVVVVVVVVVVVVVVVVVVVVVVV FEITO
//FAZER DIV DE MODAL COM DISPLAY NONE DE CADASTRO, AI QUANDO CLICAR EM CADASTRO TROCA AS DIV


