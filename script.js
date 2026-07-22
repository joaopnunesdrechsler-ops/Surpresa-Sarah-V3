let paginaAtual = 0;


const paginas = document.querySelectorAll(".pagina");


function proximaPagina(){


paginas[paginaAtual].classList.remove("ativa");


paginaAtual++;


if(paginaAtual < paginas.length){

paginas[paginaAtual].classList.add("ativa");

}


}
