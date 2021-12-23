function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('./Glee - Jingle Bell Rock (Lyrics).mp3');
}

function setup() {
  createCanvas(400, 400);
  frameRate(10);
 var snow =[]
 mySound.setVolume(0.2);
  mySound.play();
}

function draw() {
  background(0);
  fill(145,66,15)
  rect(50,250,60,250)
  fill(148,2,0)
  triangle(50,250,80,200,110,250)
 fill(255)
  rect(0,285,400,250)
  fill(0,255,0)
  noStroke()
  var msg = 'MERRY CHRISTMAS';
  var msg2 = 'wesołych świąt'
  msg2 = msg2.toUpperCase()
  
  text(msg, 100, 100);
  textSize(20)
  fill(0,255,0)

  text(msg2, 100, 120);
  textSize(20)
  var msg = 'AND A HAPPY NEW YEAR'
  var msg2 = 'i szczęśliwego nowego roku'
  msg2 = msg2.toUpperCase()
  fill(255,0,0);
  text(msg,70,350)
  
  text(msg2,50,370)
  noStroke();
  // for loop
  for (var i = 0; i < 30; i++) {
  
    // console.log(i); 
    fill(255, 255, 255, random(755));
    ellipse(random(400), random(400), random(3));
fill(165,82,42)
    rect(198, 230, 6, 55)
   
    //t1
    drawTriangle()

    //t2
    push()
    translate(0, 20);
    drawTriangle()
    pop()
    
    //t3
    push()
    translate(0, 40);
    drawTriangle()
    pop()
 
    fill(255,0,0)
    ellipse(209, 240, 6, 6)
     fill(0,0,255)
    ellipse(190, 220, 6, 6)
    fill(255,0,0)
    ellipse(206, 210, 6, 6)
     fill(0,0,255)
     ellipse(200, 200, 6, 6)
    fill(255,0,0)
     ellipse(190, 240, 6, 6)
     fill(0,0,255)
      ellipse(195, 250, 6, 6)
    fill(255,0,0)
     ellipse(200, 225, 6, 6)
    fill(255,0,0)
 
    

  }
  

} 
  

function drawTriangle() {
  fill(43, 189, 81)
 triangle(200, 180, 180, 220, 220, 220);
 fill(255,0,0)
    
}







