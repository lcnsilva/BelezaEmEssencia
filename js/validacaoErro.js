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

  export default verificaCampo;