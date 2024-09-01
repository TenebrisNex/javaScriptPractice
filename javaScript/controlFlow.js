// conditional statements

// if(condition){
//   statement
// }else if(anotherCondition){
//   statement
// }


let hour = 13;



if(hour >= 6 && hour < 12 ){
  console.log('Good Morning');
}else if(hour >= 12 && hour < 18){
  console.log('Good Afternoon');
}else{
  console.log('Good Evening');
}


// switch and case 

let role ;
switch(role){
  case 'guest':
    console.log('Guest User');
    break;
  case 'moderator':
    console.log('Moderator User');
    break;
  default:
    console.log('Unknown User');

}

if(role === 'guest'){
  console.log('Guest User');
}else if(role === 'moderator'){
  console.log('Moderator User');
}else{
  console.log('Unknown User');
}







// for loop 

for(let i = 0; i < 5; i++){
  console.log('Hello World');

}


let i = 0;

while(i <= 5){
  console.log('Hello world');
  i++;

}

let j = 0;

do {
  console.log('Hello World');
  i++;
}while(i <= 5);



const person = {
  name: 'Cesar', 
  age: 20
};

for(let key in person){
  console.log(key, person[key]);

}

const colors = ['red', 'blue', 'green'];
// for(let index in colors){
//   console.log(index, colors[key]);

// }




for(let color of colors){
  console.log(color);
}



let q = 0; 
while(i <= 10){
  
  if(i % 2 === 0){
    i++;
    continue;
  }
  console.log(i);
  i++;
}