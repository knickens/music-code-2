var mySound;
var kiRed = 200;
var kiGreen = 200;
var kiBlue = 200;
var x = 200;
var y = 200;
var i = [10,20,30,20,10];
var speedx = 2.5;
var speedy = 2.5;




function preload(){
mySound = loadSound('js/deepunder.mp3'); 
}

function  setup(){
   createCanvas(600,600); 
   background(255);
   
   kiBlue = random(0,255);
   kiGreen = random(0,255);
   kiRed = random(0,255);
   mySound.setVolume(0.1);
}


function draw(){
   kiBlue = random(0,255);
   kiGreen = random(0,255);
   kiRed = random(0,255);
   background(255);
 
if(mouseIsPressed){
     background(255);
      stroke(0);
       ellipse(x,y,75,75)
       fill(0,0,kiBlue,60);
    
     y = y + speedy;
    x = x + speedx;
  if(y > height){
        y = 0 - height;
  }
 if(x > width){
   x = 0 - width;  
 } 

       
}
circles();
bottomRow();
}




function mousePressed(){
    mySound.play();
   }


function mouseReleased(){
    mySound.pause();
}

//function act(){
  //  if(mouseIsPressed){
   // mySound.play();    
 //   }
  //  else{
      //  mysound.pause();
   // }
//} 


function circles(y){
    size = [10];
  for(var y = 50; y <= 450; y = y + 100){
    stroke(255,90);
    fill(188,71,kiBlue,90);
    rect(x,y,75,75);
    
   }  
}

function bottomRow(x){
   size = [10];
  for(var x = 50; x <= 450; x = x + 100){
    stroke(255);
    fill(247,150,kiBlue,90);
    rect(x,y,75,75);
  }
 
}

function move(){
   y = y + speedy;
    x = x + speedx;
  if(y > height){
        y = 50 - height;
  }
 if(x > width){
   x = 50 - width;  
 } 
}