// let output = document.querySelector('output');

let buttons = document.querySelectorAll('button'); //getElementsByClassName returns a node list not a list
let equation = [];
let newNumber = 0;
let operator;

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    switch (button.value) {
      case '+':
        equation.push(parseInt(newNumber, 10)); //the number we've written is now over and we push it onto our equation array
        newNumber += '+'; //we display the + sign
        let operator = '+'; // we tell the computer the operator for this will be a + (for an if else/switch that will exist in the = case)
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`; //turns the output into the new number and the operator
        newNumber = 0; // resets the new number

        break;
      case '-':
        equation.push(parseInt(newNumber, 10));
        newNumber += '-';
        let operator = '-';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;
        newNumber = 0;

        break;
      case 'x':
        equation.push(parseInt(newNumber, 10));
        newNumber += 'x';
        let operator = 'x';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;
        newNumber = 0;


        break;
      case '/':
        equation.push(parseInt(newNumber, 10));
        newNumber += '/';
        let operator = '/';
        document.querySelector('output').innerHTML = `<p>${newNumber}</p>`;
        newNumber = 0;


        break;
      case 'c':
        newNumber = 0;
        equation.splice(0,equation.length);


        break;
      case '.':

        break;
      case '=':
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
