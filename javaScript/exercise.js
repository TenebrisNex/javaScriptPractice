// Exercise 1

let number = max(2,3);

console.log(number);


function max(number1, number2){
  // if(number1 > number2){
  //   return number1;
  // }
  // return number2;

  return (number1 > number2) ? number1 : number2;



}


function isLandscape(width, height){
  return (width > hieght);
}


const output = fizzBuzz(3);
console.log(output)


function fizzBuzz(input){
  if(typeof input !== 'number'){
    return NaN;

  }



  if(input % 3 === 0 && input % 5 === 0){
    console.log('FizzBuzz');
  }else if(input % 5 === 0){
    console.log('Buzz');
  }else if(input % 3 === 0){
    console.log('Fizz');

  }
  return input;
  
}