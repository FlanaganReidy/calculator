// let output = document.querySelector('output');

let buttons = document.querySelectorAll('button'); //getElementsByClassName returns a node list not a list
let equation = [];
let newNumber = 0;
let operator;
let output = 0;

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    switch (button.value) {
      case '+':
        equation.push(parseInt(newNumber, 10)); //the number we've written is now over and we push it onto our equation array
        newNumber += '+'; //we display the + sign
        operator = '+';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`; //turns the output into the new number and the operator
        newNumber = 0; // resets the new number

        break;
      case '-':
        equation.push(parseInt(newNumber, 10));
        newNumber += '-';
        operator = '-';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;
        newNumber = 0;

        break;
      case 'x':
        equation.push(parseInt(newNumber, 10));
        newNumber += 'x';
        operator = 'x';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;
        newNumber = 0;


        break;
      case '/':
        equation.push(parseInt(newNumber, 10));
        newNumber += '/';
        operator = '/';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;
        newNumber = 0;


        break;
      case 'c':
        newNumber = 0;
        operator = undefined;
        equation.splice(0, equation.length);
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;

        break;
      case '=':
        equation.push(parseInt(newNumber, 10));
        switch (operator) {
          case '+':
            output = equation[equation.length-1] + equation[equation.length-2];
            document.querySelector('output').innerHTML = `<p>${output}</p>`;
            break;
          case '-':
            output = equation[equation.length-2] - equation[equation.length-1];
            document.querySelector('output').innerHTML = `<p>${output}</p>`;

            break;
          case 'x':
            output = equation[equation.length-2] * equation[equation.length-1];
            document.querySelector('output').innerHTML = `<p>${output}</p>`;

            break;
          case '/':
            output = equation[equation.length-2] / equation[equation.length-1];
            document.querySelector('output').innerHTML = `<p>${output}</p>`;

            break;

          default:
          break;

        }
        break;
      default:
        newNumber += button.value;
        newNumber = parseInt(newNumber);
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;

    }
    // newNumber += button.value;
    //aNumber.push(parseInt(newNumber, 10));
  });
});
