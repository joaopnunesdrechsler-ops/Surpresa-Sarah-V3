let paginaAtual = 0;



const paginas = [


{
titulo:"O começo ✨",

imagem:"fotos/foto1.jpg",

texto:
"Algumas pessoas fazem parte da nossa história antes mesmo de percebermos.\n\n" +
"O tempo passa, os caminhos mudam, mas algumas conexões continuam especiais."
},



{
titulo:"O tempo 🌙",

imagem:"fotos/foto2.jpg",

texto:
"A vida vai passando e, aos poucos, percebemos que algumas pessoas possuem algo diferente.\n\n" +
"Um carinho simples, mas que carrega um significado enorme."
},



{
titulo:"Pequenos detalhes ❤️",

imagem:"fotos/foto3.jpg",

texto:
"Nem sempre são os grandes momentos que ficam guardados.\n\n" +
"Às vezes são pequenos detalhes que fazem alguém se tornar inesquecível."
},




{
titulo:"A essência ✨",

imagem:"fotos/foto4.jpg",

texto:
"O mais bonito é ver alguém crescendo, descobrindo seu caminho e se tornando uma pessoa incrível.\n\n" +
"Admirar a pessoa que ela está se tornando."
},




{
titulo:"Admiração 🌹",

imagem:"fotos/foto5.jpg",

texto:
"Existem pessoas que conquistam nossa admiração pelo jeito de ser,\n" +
"pela forma como tratam os outros e pela sua essência."
},




{
titulo:"Uma pessoa especial ❤️",

imagem:"fotos/foto6.jpg",

texto:
"Essa pequena surpresa é uma forma de mostrar que algumas pessoas merecem ser lembradas.\n\n" +
"Com carinho, respeito e admiração."
},




{
titulo:"Final ✨",

imagem:"fotos/foto7.jpg",

texto:
"Que você nunca perca essa essência bonita que faz você ser única.\n\n" +
"Continue sendo essa pessoa especial que você se tornou."
}


];







function iniciarFilme(){


document.getElementById("capa").style.display="none";


document.getElementById("historia").style.display="block";


mostrarPagina();


}








function mostrarPagina(){


let pagina = paginas[paginaAtual];


document.getElementById("tituloPagina").innerHTML =
pagina.titulo;



document.getElementById("textoPagina").innerHTML =
pagina.texto;



document.getElementById("imagemPagina").src =
pagina.imagem;



document.querySelector(".numeroPagina").innerHTML =
"Página " + (paginaAtual + 1) + " de " + paginas.length;



}







function proximaPagina(){


if(paginaAtual < paginas.length - 1){


animarPagina();



setTimeout(function(){


paginaAtual++;


mostrarPagina();



},400);



}



}








function paginaAnterior(){


if(paginaAtual > 0){


animarPagina();



setTimeout(function(){


paginaAtual--;


mostrarPagina();



},400);



}


}








function animarPagina(){


let pagina = document.querySelector(".pagina");



pagina.classList.remove("virar");



void pagina.offsetWidth;



pagina.classList.add("virar");



}
