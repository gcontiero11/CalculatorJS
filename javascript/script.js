button = document.querySelectorAll("button");
let screen = document.querySelector("p");
let resultadoApareceu = false;
let operacaoDefinida = false;
let precisaSerNumero = false;
let possuiponto = false;
let preencheu_n1 = false;
let save;
let elemento;
let resultadoTela;


for(i=0;i<16;i++){
    screen.innerText = "";
    
    button[i].addEventListener("click", (e) => {
        
        elemento = e.target.innerText;
        console.log(elemento);

        if(! isNaN(elemento)){
            if(resultadoApareceu){
                screen.innerText = elemento;
                resultadoApareceu = false;
            }
            else{
                if(preencheu_n1){
                    operacaoDefinida = true;
                    possuiponto = false;
                }
                screen.innerText = screen.innerText + elemento;
            }
            precisaSerNumero = false;
        }  
        else{
            if(!precisaSerNumero){
                if(elemento != "="){
                    if(elemento == "." && !possuiponto && !resultadoApareceu){
                        precisaSerNumero = true;
                        possuiponto = true;
                        screen.innerText = screen.innerText + elemento;
                    }
                    else{
                        if(elemento != "."){
                            if(!preencheu_n1){
                                save = screen.innerText;
                                screen.innerText = screen.innerText + elemento;
                                preencheu_n1 = true;
                            }
                            else{
                                if(!operacaoDefinida){
                                    screen.innerText = save + elemento;
                                }
                            }
                            resultadoApareceu = false;   
                        }
                    }
                }
                else{
                    resultadoTela = eval(screen.innerText);
                    screen.innerText = resultadoTela;
                    resultadoApareceu = true;
                    preencheu_n1 = false;
                    operacaoDefinida = false
                    possuiponto = false;
                }
            }
        }
    })
}
