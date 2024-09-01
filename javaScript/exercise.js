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


checkSpeed(50);

function checkSpeed(speed){
  let number = math.floor(speed);

  if(number > 70){
    let x = number - 70;
    let y = x / 5;
    if(y === 12){
      return 'Licence Suspended';
    }
    return ('Points, ' + y);

  }
  return 'Ok';


}


showNumbers(10);
function showNumbers(limit){
  for(let i = 0; i <= limit;  i++){
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);

  }

}


const isActive = true;
if(isActive) console.log('Hello');

function countTruthy(array){
  
}

