let nums=document.querySelectorAll('#nums');
let operators=document.querySelectorAll('#operator');
let equal = document.getElementById('equal');
let operand1 = document.getElementById('operand1');
let _operand1 = '';
// let operation = document.getElementById('operation');
let operand2 = document.getElementById('operand2');
let _operand2='';
let clear = document.getElementById('clear');
let delete_button = document.getElementById('delete');
let evaluate = '';
let display = document.querySelector('.display');
nums.forEach(num => {
    num.addEventListener("click", ()=>{
        if(operand1.innerText.includes('/') || operand1.innerText.includes('+') || operand1.innerText.includes('x') || operand1.innerText.includes('-')){
            if(operand2.innerText.includes('.') && num.innerText == '.')
                operand2.innerText=operand2.innerText;
            else
                operand2.innerText+=num.innerText;
        }
        else{
            if(operand1.innerText.includes('.') && num.innerText=='.')
                operand1.innerText=operand1.innerText;
            else
                operand1.innerText+=num.innerText;
        }
    });
});
clear.addEventListener("click", ()=>{
    // display.innerText=''; 
    operand1.innerText='';
    operand2.innerText='';  
});


delete_button.addEventListener("click",()=> {
    if(operand2.innerText){
        operand2.innerText=operand2.innerText.substring(0,operand2.innerText.length-1);
    }
    else
        operand1.innerText=operand1.innerText.substring(0,operand1.innerText.length-1);
});

function backspace(e){
    while(e.code=='Backspace'){
         if(operand2.innerText){
        operand2.innerText=operand2.innerText.substring(0,operand2.innerText.length-1);
    }
    else
        operand1.innerText=operand1.innerText.substring(0,operand1.innerText.length-1);}
}

delete_button.addEventListener('keydown', ()=>{
    if(operand2.innerText){
        operand2.innerText=operand2.innerText.substring(0,operand2.innerText.length-1);
    }
    else
        operand1.innerText=operand1.innerText.substring(0,operand1.innerText.length-1);
})

// function assign_operation(string){
  
// }

operators.forEach(operator=>{operator.addEventListener("click", function assign_operation(){
    
    if(operand1.innerText.includes('/') || operand1.innerText.includes('+') || operand1.innerText.includes('x') || operand1.innerText.includes('-') && operand2.innerText){
        evaluator();
        evaluate=operator.innerText;
        // operand1.innerText+=operator.innerText;
        if (operand1.innerText.includes('/') || operand1.innerText.includes('+') || operand1.innerText.includes('x') || operand1.innerText.includes('-')){        
            operand1.innerText=operand1.innerText.substring(0,operand1.innerText.length-1);
            operand1.innerText+=evaluate;
        }
        else{
            operand1.innerText+=evaluate;
        }
    } 
    else if(operand1.innerText){
        evaluate=operator.innerText;
        if (operand1.innerText.includes('/') || operand1.innerText.includes('+') || operand1.innerText.includes('x') || operand1.innerText.includes('-')){        
            operand1.innerText=operand1.innerText.substring(0,operand1.innerText.length-1);
            operand1.innerText+=evaluate;
        }
        else{
            operand1.innerText+=evaluate;
        }}
} )})

function evaluator(){
    if(operand1.innerText=='' || operand2.innerText == '')
    return;
    _operand1=parseFloat(operand1.innerText.substring(0,operand1.innerText.length-1));
    _operand2=parseFloat(operand2.innerText);
    // clear_display();
    operand2.innerText="";
    operand1.innerText = operate(evaluate, _operand1, _operand2);
}

equal.addEventListener("click", evaluator);

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a,b){
    if(b){
        return a/b;
    }
    else 
    return "Not Defined";
}

function operate(operator_, a, b){
    if(operator_ == '+'){
        return add(a,b);
    }
    else if(operator_ == '-'){
        return subtract(a,b);
    }
    else if(operator_ == 'x'){
        return multiply(a,b);
    }
    else{
        return divide(a,b);
    }
}



