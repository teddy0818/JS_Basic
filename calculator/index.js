const numberInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const calculateButton = document.querySelector("#calculate");
const resultInput = document.querySelector("#result");

let temp;
let operator;

plusButton.addEventListener("click", () => {
    if(temp) {
        operator = "+";
        numberInput.value = null;
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value);
            operator = "+";
            resultInput.value = null;
            numberInput.value = null;
            numberInput.focus();
         }
    }
});

minusButton.addEventListener("click", () => {
    if(temp) {
        operator = "-";
        numberInput.value = null;
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value);
            operator = "-";
            resultInput.value = null;
            numberInput.value = null;
            numberInput.focus();
         }
    }
});

divideButton.addEventListener("click", () => {
    if(temp) {
        operator = "/";
        numberInput.value = null;
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value);
            operator = "/";
            resultInput.value = null;
            numberInput.value = null;
            numberInput.focus();
         }
    }
});

multiplyButton.addEventListener("click", () => {
    if(temp) {
        operator = "*";
        numberInput.value = null;
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value);
            operator = '*';
            resultInput.value = null;
            numberInput.value = null;
            numberInput.focus();
         }
    }
});
 
clearButton.addEventListener("click", () => {
  numberInput.value = null;
  temp = null;
  operator = null;
  resultInput.value = null;
});

calculateButton.addEventListener("click", () => {
  if (operator) {
      console.log(temp, operator, numberInput.value);
      if(numberInput.value) {
        if(operator === '+') {
            resultInput.value = temp + Number(numberInput.value);
        } else if (operator === '-') {
            resultInput.value = temp - Number(numberInput.value);
        } else if (operator === '/') {
            resultInput.value = temp / Number(numberInput.value);
        } else if (operator === '*') {
            resultInput.value = temp * Number(numberInput.value);
        }
        temp = Number(resultInput.value);
      }

  } else {
      if(numberInput.value) {
          resultInput.value = temp;
      }

  }

  numberInput.value = null;

});
