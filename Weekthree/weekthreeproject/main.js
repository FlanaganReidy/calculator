// let output = document.querySelector('output');

let buttons = document.querySelectorAll('button'); //getElementsByClassName returns a node list not a list
let equation = [];
let newNumber = "";
let operator;
let output = 0;

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    switch (button.value) {
      case '+':
        equation.push(parseFloat(newNumber)); //the number we've written is now over and we push it onto our equation array
        newNumber += '+'; //we display the + sign
        operator = '+';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`; //turns the output into the new number and the operator
        newNumber = ""; // resets the new number

        break;
      case '-':
        equation.push(parseFloat(newNumber));
        newNumber += '-';
        operator = '-';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;
        newNumber = "";

        break;
      case 'x':
        equation.push(parseFloat(newNumber));
        newNumber += 'x';
        operator = 'x';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;
        newNumber = "";


        break;
      case '/':
        equation.push(parseFloat(newNumber));
        newNumber += '/';
        operator = '/';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;
        newNumber = "";


        break;
      case 'c':
        newNumber = "";
        operator = undefined;
        equation.splice(0, equation.length);
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;

        break;
      case '=':
        equation.push(parseFloat(newNumber));
        switch (operator) {
          case '+':
            output = equation[equation.length-1] + equation[equation.length-2];
            document.querySelector('output').innerHTML = `<p>${cutDecimal(output)}</p>`;
            break;
          case '-':
            output = equation[equation.length-2] - equation[equation.length-1];
            document.querySelector('output').innerHTML = `<p>${cutDecimal(output)}</p>`;

            break;
          case 'x':
            output = equation[equation.length-2] * equation[equation.length-1];
            document.querySelector('output').innerHTML = `<p>${cutDecimal(output)}</p>`;

            break;
          case '/':
            output = equation[equation.length-2] / equation[equation.length-1];
            document.querySelector('output').innerHTML = `<p>${cutDecimal(output)}</p>`;

            break;

          default:
          break;

        }
        break;
      default:
          if (newNumber === "" && parseInt(newNumber) === true ){
            newNumber = button.value;
          }
          else{
            if(newNumber.length <=  4){
            newNumber += button.value;
            }
          }
        document.querySelector('output').innerHTML = `<p>${parseFloat(newNumber)}</p>`;
    }
  });
});

function cutDecimal(output) {
  let truncateOutput = output.toString();
  if (truncateOutput.indexOf('.') !== -1) {
    let cutHere = truncateOutput.indexOf('.');
    let newoutput = truncateOutput.substring(0, cutHere + 6);
    return newoutput;
  } else {
    return truncateOutput;
  }
}
