function abrirModal(){
    const modal = document.querySelector(".container__modal");
    if(modal.style.display == 'none'){
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
  }

export default abrirModal;