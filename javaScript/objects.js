
function Circle(radius ){

  this.radius = radius;
  this.draw() = function(){
    console.log('draw');

  }
}

Circle.call({}, 1)
Circle.apply({}, [1,2,3])


const another = Circle(1);

let x = {value : 10};
let y = x;

x.value = 20;

let obj = {
  value: 10
}

function increase(obj){
  obj++;
}

increase(obj);

console.log(obj);

for (let key in Circle ){
  console.log(key. Circle[key]);

}

for(let key of Objects.keys(Circle)){
  console.log(key);

}

if (color in Circle){
  console.log('Yes');
}

// clone objects //////////////////
const a = {}
for(let key in Circle ){
  a[key] = Circle[key];

}

console.log(a);


const s = Object.assign({color: 'yellow'}, Circle)


console.log(s);

const q = {...Circle};
console.log(q);

//////////////////////////////////



let j = {};
console.log(j);
// java has a garbage collecter , happend auto



/////////////////////////////////////////////




// string object 
// string primative
const message = 'hi';



// string object 

const n = new String('hi');


// template literals 

const m = 'hello there \n ';

// object {}
// boolean true, false 
// string '', ""
// template 


const name = "John"; // Example name
const thing = `Hi ${name},
"first" message`;



// date 

const now = new Date();
const date1 = new Date('May 11 2018 09:00');

const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);



// exercise 1


let street = '1';
let city = '2';
;et zip = '22';

function showAddress(address){
  for(let key in address ){
    console.log(key, address[key]);

  }
}

showAddress(address);


// factory function 

function createAddress(street, city, zip){
  return = {street,
  city,
  zip
  };
}

// constructor func 

function createAddress(street, city, zip){
  this.street = street;
  this.city = city;
  this.zip = zip;

}



function areEqual(address1, address2){
  

}

function areSame(address1, address2)