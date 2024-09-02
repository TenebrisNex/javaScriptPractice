

function createCircle(radius){
  return {
  radius,
  draw(){
    console.log('Draw');
  }
};

}

const circle1 = createCircle(1);
console.log(circle1);



function Circle(radius){
  this.radius = radius;
  this.draw = function (){
    console.log('Draw');
  }
  return this 
  
}

const circle = new Circle(1);


const some = {
  radius : 1
};

some.color = 'Yellow';
some.draw = function(){};
delete circle.color;
delete circle.draw;




