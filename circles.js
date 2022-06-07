let context, gain, gains = [], audios = [], audio, cnv, change, speed;
var circles = [], numberOfCircles = 7, mes = [], thisIsYouAUDIO = [];

//var audios = [];

function preload(){


for (let i = 1; i < numberOfCircles+1; i++){
  circles.push( loadImage(`assets/img/circle-${i}-400k.png`) );
}

  //var circle = loadImage('assets/img/circle-1-25k.png');
  //console.log(circle);
  console.log(circles);



}

//Circle object:
class Circle {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.img = img;
    this.dragging = false;
  }

  clicked(px, py){
    let d = dist(px, py, this.x, this.y);
    if(d < this.r/4){

      this.dragging = true;
      cursor('pointer');
      //this.img = random(circles);
      //console.log("I was clicked, my index is!" + mes.indexOf(this));
      //console.log("My coordinates are and width/2 is:" + this.x, this.y, width/2);
    }
  }

  released () {
    this.dragging = false;
  }

  dragged () {
    if(this.dragging){
      this.x = mouseX;
      this.y = mouseY;
    }
  }

  move(){
    this.x = this.x + random(0, 1);
    this.y = this.y + random(-1, 1);

/*
    if(this.x < width/2){
      thisIsYouAUDIO[0].amp(1);
      thisIsYouAUDIO[1].amp(0);
    } else {
      thisIsYouAUDIO[1].amp(1);
      thisIsYouAUDIO[0].amp(0);
    }
    */

    //check: if this.x is less than canvasX/2, play (one audio) / this-is-you in English

    //if this.x is more than canvasX/2, play (other audio) / this-is-you in Finnish

  }

  display(){
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.r, this.r);
  }

}

function touchStarted() {
  for(let i=0; i<mes.length; i++){
    mes[i].touched(mouseX, mouseY);
  }
}

function mousePressed () {
  for(let i=0; i<mes.length; i++){
    mes[i].clicked(mouseX, mouseY);
  }
}

function mouseReleased () {
  for(let i=0; i<mes.length; i++){
    mes[i].released(mouseX, mouseY);
  }
}

function mouseDragged () {
  for(let i=0; i<mes.length; i++){
    mes[i].dragged(mouseX, mouseY);
  }
}

function setup() {


  //make lots of mes
  for(let i=0; i<7; i++){
    let me = new Circle (random(50, 800), random(50,300), 200, circles[i] );
    mes.push(me);
  }


  //make just one me:
  //  let me = new Circle (random(200, 600), random(200,300), 45, circles[0] );
  //  mes.push(me);

  cnv = createCanvas(windowWidth, windowHeight);

}

function draw(){


    //background(200, 50, 50);
    background(0, 0, 0);


    //image(circles[0], 0, 0);

    for(let i=0; i < mes.length; i ++){
      //mes[i].move();
      mes[i].display();
    }

}
