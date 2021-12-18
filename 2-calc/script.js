const action = prompt( 'Please, enter what arithmetic action do you want to perform? (+ - / *)' );

const firstNum = Number(prompt('Please, enter first number'));

const secondNum = Number(prompt('Please, enter second number'));


if (action === '+') {

    console.log (`${firstNum} + ${secondNum} = ${firstNum + secondNum}`)
    
  } else if (action === '-') {
    
    console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`)
    
  } else if (action === '/') {
    
    console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`)
    
  } else if (action === '*') {
    
    console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)
    
  }
