button = document.querySelectorAll("button");
let screen = document.querySelector("p");
let n1 = 0;
let n2 = 0;
let preencheu_n1 = false;
let resultadoApareceu = false;
let possuiponto = false;
let operacoes = ["soma" , "subtracao" , "multiplicacao", "divisao"];
let operacao = operacoes[0];
let elemento;
let conta;
let resultadoTela;

function isNum(elemento){
    if(elemento == "1" || elemento == "2" || elemento == "3" || elemento == "4" || elemento == "5" || elemento == "6" || elemento == "7" || elemento == "8" || elemento == "9" || elemento == "0"){
        numero = true;
    }
    else{
        numero = false;
    }
    return numero;
}

function isSim(elemento){
    if(elemento == "+" || elemento == "-" || elemento == "X" || elemento == "/"){
        simbolo = true;
    }
    else{
        simbolo = false;
    }
    return simbolo;
}

function tratarNumero(elemento,preencheu_n1,possuiponto){
    if(possuiponto){
        if(!preencheu_n1){
            n1 = n1 * 10 + parseInt(elemento);
            n1 = n1 / 10;
        }
        else{
            n2 = n2 * 10 + parseInt(elemento);
            n2 = n2 / 10;
        }
    }
    else{
        if(!preencheu_n1){
            n1 = n1 * 10 + parseInt(elemento);
        }
        else{
            n2 = n2 * 10 + parseInt(elemento);
        }
    }
}

function tratarSimbolo(elemento){
    
    switch(elemento){
        case "+":
            i = 0;
            break; 
        case "-":
            i = 1;
            break; 
        case "X":
            i = 2;
            break; 
        case "/":
            i = 3;
            break; 
    } 
    return i
}
                
function tratarEnter(operacao,resultadoTela){
    switch(operacao){
        case "soma":
            resultadoTela = n1 + n2;
            console.log("somou " + n1 + " com " + n2 + " = " + (resultadoTela));
            screen.innerText = parseFloat(resultadoTela.toFixed(3));
            break;
        
        case "subtracao":
            resultadoTela = n1 - n2;
            console.log("subtraiu " + n1 + " com " + n2 + " = " + (resultadoTela));
            screen.innerText = parseFloat(resultadoTela.toFixed(3));
            break;
            
        case "multiplicacao":
            resultadoTela = n1 * n2;
            console.log("multiplicou " + n1 + " com " + n2 + " = " + (resultadoTela));
            screen.innerText = parseFloat(resultadoTela.toFixed(3));
            break;
            
        case "divisao":
            resultadoTela = n1 / n2;
            console.log("dividiu " + n1 + " com " + n2 + " = " + (resultadoTela));
            screen.innerText = parseFloat(resultadoTela.toFixed(3));
            break;
    }
    return resultadoTela;
}
                                
function interacaoTela(elemento,resultadoApareceu){
    if(!resultadoApareceu){
        screen.innerText = screen.innerText + elemento;
    }
    else{
        if(elemento == "+" || elemento == "-" || elemento == "X" || elemento == "/"){
            screen.innerText = screen.innerText + elemento;
            resultadoApareceu = false;
        }
        else{
            if(elemento != "ENTER" && elemento != "."){
                screen.innerText = elemento;    
                resultadoApareceu = false;
            }
        }
    }
    return resultadoApareceu
}

for(i=0;i<16;i++){
    screen.innerText = " ";
    
    button[i].addEventListener("click", (e) => {
        
        elemento = e.target.innerText;
        console.log(elemento);
        
        let numero = isNum(elemento);
        let simbolo = isSim(elemento);

        if(numero){
            resultadoApareceu = interacaoTela(elemento,resultadoApareceu);
            tratarNumero(elemento,preencheu_n1,possuiponto);
        }  
        else{
            if(simbolo){
                if(!preencheu_n1 && resultadoApareceu){
                    n1 = resultadoTela;
                    preencheu_n1 = true;
                    possuiponto = false;
                    resultadoApareceu = false;
                    resultadoApareceu = interacaoTela(elemento,resultadoApareceu);
                    i = tratarSimbolo(elemento);  
                }
                else{
                    if(!preencheu_n1){
                        preencheu_n1 = true;
                        possuiponto = false;
                        resultadoApareceu = interacaoTela(elemento,resultadoApareceu);
                        i = tratarSimbolo(elemento);
                    }
                }
            }
            else{
                if(elemento == "."){
                    resultadoApareceu = interacaoTela(elemento,resultadoApareceu);
                    possuiponto = true;
                }
                else{
                    if(preencheu_n1){
                        operacao = operacoes[i];
                        preencheu_n1 = false;
                        resultadoApareceu = true;
                        possuiponto = false;
                        resultadoTela = tratarEnter(operacao);
                        n1 = 0;
                        n2 = 0;
                    }
                }
            }
        }
    })
}
