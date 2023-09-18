buttons = document.querySelectorAll("button");
let screen = document.querySelector("p");
let operationDefined = false;
let havedot = false;
let resultShown = false;
let onlyNumber = true;
let save;
let value;

function isNumber(value){
    if(!isNaN(value)){
        return true;
    }
    return false;
}

function isOperator(value){
    if(isNaN(value) && value != "." && value != "="){
        return true;
    }
    return false;
}

function changeOperation(save,value){
    screen.innerText = save + value;
}

function addElement(value){
    screen.innerText = screen.innerText + value;
}

function replaceElement(value){
    screen.innerText = value;
}

for(i=0;i<buttons.length;i++){
    screen.innerText = "";
    
    buttons[i].addEventListener("click", (e) => {
        
        value = e.target.innerText;
        console.log(value);

        firstElement = screen.innerText[0];
        lastElement =screen.innerText[screen.innerText.length - 1];

        console.log(`Ultimo value da tela: ${lastElement}`);
        console.log(firstElement);

        if(isNumber(value)){
            if(firstElement == 0 && lastElement == 0){
                screen.innerText = "";
            }
            if((isOperator(lastElement) && !onlyNumber)){
                operationDefined = true;
                addElement(value);
            }
            else{
                if(resultShown){
                    replaceElement(value);
                    resultShown = false;
                    havedot = false;
                }
                else{
                    addElement(value);
                }
            }
            save = screen.innerText;
            onlyNumber = false;
        }
        else{
            if(!onlyNumber){
                if(value == "="){
                    if(isNumber(lastElement) && operationDefined){
                      screen.innerText = eval(screen.innerText);
                      save = screen.innerText;
                      resultShown = true;
                      havedot = true;
                      operationDefined = false;
                    }
                }
                else{
                    if(value == "."){
                        if(isNumber(lastElement) && !havedot){
                            addElement(value);
                            havedot = true;
                        }
                    }
                    else{
                        if(!operationDefined){
                            havedot = false;
                            resultShown = false;
                            if(isOperator(lastElement)){
                                changeOperation(save,value);
                            }
                            else{
                                addElement(value);
                            }
                        }
                    }
                }
            }
        }
    })
}
