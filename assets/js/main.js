import {transladarPeca, validadePecas, validadePeca, pecaAleatoria, rotacionarPeca, rotacao, quadrante, sinalQuadrante, distancia} from "./controleEstado.js"

let mapa = document.querySelector("#tabuleiroTetris");
let celulaTd;

let btnRot, btnBaixo, btnEsq, btnDir;

let tamX =10, tamY=20, matriz= new Array(tamX*tamY);

let pecas =[
    							[
    									[4, 1], //L
    									[4, 0],
    									[4, 2],
    									[5, 2]
    							],
    							[
    							   [5, 1], //L'
    									[5, 0],
    									[5, 2],
    									[4, 2]
    							],
    							[
    							    [5, 1], //S
    							    [5, 0],
    							    [4, 1],
    							    [4, 2]
    							],
    							[
    							    [4, 1],
    							    [4, 0],
    							    [5, 1],
    							    [5, 2]
    							],
    							[
    							    [4, 1], //cubo
    							    [4, 0],
    							    [5, 0],
    							    [5, 1]
    							],
    							[
    							    [4, 2], //coluna
    							    [4, 0],
    							    [4, 1],
    							    [4, 3]
    							],
    							[
    							    [4, 1], //E
    							    [4, 0],
    							    [4, 2],
    							    [5, 1]
    							]
							]

let peca = pecaAleatoria(pecas);


btnRot = document.querySelector("#btnRotacao")
    btnRot.addEventListener('click', function() { 
        apagarPeca(peca);
        peca = rotacionarPeca(	peca);
        printPeca(peca, celulaTd);
    })
    
    btnEsq = document.querySelector("#btnEsquerda")
    btnEsq.addEventListener('click', function() { 
    			apagarPeca(peca);
      		peca = transladarPeca(peca, [-1,0]);
        printPeca(peca, celulaTd, tamX, tamY);
    })
    
    btnDir = document.querySelector("#btnDireita");
    btnDir.addEventListener('click', function() { 
      		apagarPeca(peca);    
      		peca = transladarPeca(peca, [1, 0]);
        printPeca(peca, celulaTd);
    })
    
    btnBaixo = document.querySelector("#btnBaixo")
    btnBaixo.addEventListener('click', function() { 
    			apagarPeca(peca);
      		peca = transladarPeca(peca, [0, 1]);
        printPeca(peca, celulaTd);
    })

function main () {
    criarTabuleiro();
    celulaTd = document.querySelectorAll(".celulaTd");
    printPeca(peca, celulaTd)
      
}

main();


function criarTabuleiro( ) {
    const matrizMapa = document.createElement('table');
    matrizMapa.setAttribute('class', 'matrizMapa');

    for (let y = 0; y < tamY; y++) {
      const linha = document.createElement('tr');

      for (let x = 0; x < tamX; x++) {
        const celula = document.createElement('td');
        celula.setAttribute("class", "celulaTd");
        linha.appendChild(celula);
      	}
      matrizMapa.appendChild(linha);
    	}
    	
    	mapa.appendChild(matrizMapa);
    	// matrizMapa deve ser o retorno dessa funcao
  }// fim da criarTabuleiro

function printPeca(peca, celula) {
		if(validadePecas(peca)) {
		console.log("print")
   			for (let i = 0; i < peca.length; i++) {
     // celula[peca[i][1] * tamY + peca[i][0]].classList.add("ponto");
     	celula[peca[i][1] * tamX + peca[i][0]].classList.add("ponto");
    		}
  		} else {
  					console.log(peca)
  		    console.log("NAO PRINTAR")
  		}
  }
  
function apagarPeca(peca) {
		if(validadePecas(peca)) {
				console.log("apagar")
		    for (let i = 0; i < peca.length; i++) 
   			 {
      celulaTd[peca[i][1] * tamX + peca[i][0]].classList.remove("ponto");
  			  }
		} else {
		    console.log("NAO APAGAR")
		}
}