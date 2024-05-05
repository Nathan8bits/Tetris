export function transladarPeca(pecaT, direcao) {
    let p = [];
    
    for (let i = 0; i < pecaT.length; i++) {
      //pecaT[i][0] += direcao[0];
      //pecaT[i][1] += direcao[1];
     
     p.push([pecaT[i][0] + direcao[0], pecaT[i][1] + direcao[1]])
    }
    if(validadePecas(p)) {
    			console.log("transladar")
    		//	console.log(pecaT)
    			console.log(p)
    			//pecaT = p;
       return p
    } 
    console.log("NAO TRANSLADAR")
    return pecaT;
  }
  
  
  
export function validadePecas(pecas){
    let p = [];
    console.log("valido?: " + pecas)
    for(let i=0; i<pecas.length; i++) {
        if(validadePeca(pecas[i])) {
        		p.push(pecas[i])
        }
    }
    
    if(p.length == pecas.length) {
    			console.log("peca valida")
    			//console.log("peca:  "+pecas)
        return true;
    }
    console.log("peca INVALIDA")
    return false;
}  

export function validadePeca(peca) {
    if(peca[0] >= 0 && peca[0] < 10 && peca[1] >=  0 && peca[1] < 20 ) {
            return true;
        }
   return false;
}

export function verificarColisao(peca, montante) {
    if(montante === undefined) {
            console.log("ISSO EH ZERO REOLTORB")
            return false;
    }
       // console.log("montante" + montante)
    
      for(let i =0; i <peca.length; i++) {
                      //console.log("passou ")
          for(let j=0; j<montante.length; j++) {
              if(peca[i][0] == montante[j][0] && peca[i][1] == montante[j][1]) {
               console.log("COLIDIU########################")
                  return true;
              }
          }
      }
      return false;
  }
  
 /*
function validadePecas(pecas){
    let p = [];
    for(let i=0; i<matriz.length; i++) {
        if(verificarPeca(pecas[i])) {
        		p.push(pecas[i])
        }
    }
    
    if(p.length == matriz.length) {
        return true;
    }
    return false;
}  

function validadePeca(peca) {
    if(peca[0] >= 0 && peca[0] < 10
        && peca[1] >=  0 && peca[1] < 20 ) {
            return true;
        }
   return false;
}
  */
  
export function verificarLinha(matriz) {
    for(let i=0; i<matriz.length; i++) {
        let qntdd=1;
        
        for(let j=0; j<matriz.length; j++) {
            if(j!=i && matriz[i][1]==matriz[j][1]) {
                qntdd++;
                console.log(matriz[i] + "|" + matriz[j] + " qntdd: " +qntdd)
            }
        }
        
        if(qntdd ==10) {
            return matriz[i][1];
        }
    }
    return null;
}
  
export function pecaAleatoria(allPecas) { 
		return allPecas[Math.floor(Math.random() * 7)]; 
		}

export function rotacionarPeca(pecaR) {
		 let p = []
		 p.push(pecaR[0])
		 
    for (let i = 1; i < pecaR.length; i++) {
      console.log(`{${pecaR[i]}} -> ${rotacao(pecaR[0], pecaR[i])}`);
      
     // pecaR[i] = rotacao(pecaR[0], pecaR[i]);
   			p.push(rotacao(pecaR[0], pecaR[i]));
    }
    
    if(validadePecas(p)) {
        pecaR = p;
    }
    
    return pecaR; 
  }

export function rotacao(a, b) {
    let quadrantePonto = quadrante(a, b);
    let sinal;
    let sen, cos;

    if (distancia(a, b) == 0) {
      sen = 0;
      cos = 0

    } else {
      sen = Math.sqrt(Math.pow((a[1] - b[1]), 2)) / distancia(a, b);
      cos = Math.sqrt(Math.pow((a[0] - b[0]), 2)) / distancia(a, b);
    }

    if (quadrante(a, b)[2] < 4) {
      sinal = sinalQuadrante(((quadrante(a, b)[2] + 1) % 4));

    } else if (quadrante(a, b)[2] >= 4 && quadrante(a, b)[2] <= 7) {
      sinal = sinalQuadrante(((quadrante(a, b)[2] + 1) % 4) + 4)
    }

    let pontoR = new Array(2);
    pontoR[0] = a[0] + distancia(a, b) * sinal[0] * sen;
    pontoR[1] = a[1] + distancia(a, b) * sinal[1] * cos;

    return pontoR;
  }

export function quadrante(a, b) {
    let sinal = [1, 1];
    let p = [0, 0, 0, 0, 0, 0, 0, 0];

    if (b[0] > a[0]) {
      p[0] += 1;
      p[1] += 1;
      p[5] += 1;

    } else if (b[0] == a[0]) {
      p[4] += 1;
      p[6] += 1;

    } else if (b[0] < a[0]) {
      p[3] += 1;
      p[2] += 1;
      p[7] += 1;
    }

    if (b[1] < a[1]) {
      p[6] += 1;
      p[1] += 1;
      p[2] += 1;

    } else if (b[1] == a[1]) {
      p[7] += 1;
      p[5] += 1;

    } else if (b[1] > a[1]) {
      p[0] += 1;
      p[3] += 1;
      p[4] += 1;
    }

    for (let i = 0; i < p.length; i++) {
      if (p[i] == 2) {
        sinal = sinalQuadrante(i);
        sinal[2] = i;
      }
    }

    return sinal;
  }

export function sinalQuadrante(i) {
    let sinal = [
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
        [1, 1],
        [1, 1],
        [-1, -1],
        [-1, -1]
    ]
    
    return sinal[i];
  }

export function distancia(a, b) {

    return Math.sqrt(Math.pow((a[0] - b[0]), 2) + Math.pow((a[1] - b[1]), 2));
  }
  