
async function criarProdutos(linha) {
    const fallbackData = Array.from({length: 5}, (_, index) => ({
        imgsource: 'imgUrl',
        nome: 'Produto',
        descricao: 'Descrição do produto.',
        preco: 0.00
    }))
  
    try {
      const apiurl = `https://beleza-em-essencia-api.vercel.app/produtos/linha/${linha}`;
      const response = await fetch(apiurl);
  
      if (!response.ok) {
        fetchDados(fallbackData, linha);
        throw new Error('Falha na requisição à API.');
      }
      const dados = await response.json();
  
      if(Array.isArray(dados) && dados.length > 0) {
        fetchDados(dados, linha);
      } else {
        fetchDados(fallbackData, linha);
      }
  
    }
    catch(error){
      console.log(error);
      fetchDados(fallbackData, linha);
    }
  }
  
  function fetchDados(dados, linha){
    let wrapper = document.querySelector(`#wrapper-slide-${linha}`);
    let swiperSlide = wrapper.querySelectorAll('.swiper-slide');
    dados.forEach((produto, index) => {
      if (index < swiperSlide.length) {
          let slide = swiperSlide[index];
          let imgsource = slide.querySelector(`#${linha}-img`);
          let produtoTitulo = slide.querySelector('.titulo-card');
          let produtoDescricao = slide.querySelector('.descricao-card');
          let produtoPreco = slide.querySelector('.titulo-preco');
          let produtoSubPreco = slide.querySelector('.subtitulo-preco');
          
          imgsource.src = `${produto.imgsource}`;
          produtoTitulo.textContent = `${produto.nome}`;
          produtoDescricao.textContent = `${produto.descricao}`;
          produtoPreco.textContent = `R$ ${produto.preco.toFixed(2)}`;
          produtoSubPreco.textContent = `10x de R$ ${(produto.preco/10).toFixed(2)}`;
      }
    });
  }
  

  export default criarProdutos;