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





const movie = {

  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  directot: 'b'

};

function sum(limit){
  let number1 = Math.floor(limit / 3);
  let number2 =  Math.floor(limit / 5);

  let total1 = 0;
  let total2 = 0;
  let curr = 0;


  for(let i = 0; i < number1; i++){
    curr = curr + 3
    
    total1 = total1 + curr;

  }
  curr = 0;

  for(let i = 0; i < number2; i++){
    curr = curr + 5;
    total2 = total2 + curr;

  }

  return total1 + total2;


  



};


function calculateGrade(marks){
  let total  = 0;
  let mean = 0;
  let number = 0;
  for(let key in marks){
    total += marks[key];
    number++;

    

  }

  mean = total / number;

  if( 1 <= mean && mean <= 59){
    return 'F';
  }else if( 60 <= mean && mean <=69){
    return 'D';
  }else if( 70 <= mean && mean <= 79 ){
    return 'C';

  }else if(80 <= mean && mean <= 89){
    return 'B';
  }else if(90 <= mean && mean <= 100){
    return 'A';
  }
}


function showStars(rows){
  for(let i = 0; i < rows; i++){
    console.log('*'.repeat(i));
  }
}

function showPrimes(limit){
  for(let number = 2; number <= limit; number++){
    if(isPrime(number)) console.log(number);
    
  }

  

}

function isPrime(number){
  for(let factor = 2; factor < number; factor++){
    if (number % factor === 0)
    return false;
  }
  return true;
}