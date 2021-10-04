let sel;
let input;
let item;
let curCo;
let x;
let bg;
let win;

function preload(){
  bg=loadImage('bgg.png');
}

function setup() {
  
  win=createCanvas(600,350);
  background(bg);
  
  textAlign(CENTER);
 
  sel = createSelect();
  sel.position(260,54);
  
  
  sel.option('base type');
  sel.option('triangular');
  sel.option('square');
  sel.option('pentagon');
  sel.option('hexagon');
  sel.selected('base type');
  sel.changed(mySelectEvent);
  
}


function mySelectEvent() {
  
  clear();
  background(bg);
  item=sel.value();
  draw();
  
  
}

function draw() {
  
  if (item=="square") {
       
      
       beginShape()
      
    // Specifying all the vertices
      
      vertex(200, 250);
      vertex(330, 220);
      vertex(460, 250);
      vertex(330, 280);
      vertex(200, 250);
  
     
      endShape();
      
      fill("red");
      circle ( 200, 250,  7);
      circle ( 330, 220,  7);
      circle ( 460, 250,  7);
      circle ( 330, 280,  7);
      
      noFill();      
}  
  else if (item=="triangular") {
      
       beginShape()
      
    // Specifying all the vertices
      
      vertex(200, 250);
      vertex(460, 250);
      vertex(330, 280);
      vertex(200, 250);
  
     
      endShape();
      
      fill("red");
      circle ( 200, 250,  7);
      circle ( 460, 250,  7);
      circle ( 330, 280,  7);
      
      noFill();
      
      
} 
  else if (item=="pentagon") {
      
       beginShape()
      
    // Specifying all the vertices
      
      vertex(200, 250);
      vertex(327, 213);
      vertex(465, 250);
      vertex(388, 305);
      vertex(280, 304);
      vertex(200, 250);
      
      endShape();
      
      fill("red");
      circle (200, 250, 7);
      circle (327, 213, 7);
      circle (465, 250, 7);
      circle (388, 305 , 7);
      circle (280, 304 , 7);
      circle (200, 250 , 7);
      
      noFill();
    
  }
  else if (item=="hexagon") {
      
       beginShape()
      
    // Specifying all the vertices
      
      vertex(200, 250);
      vertex(280, 204);
      vertex(388, 204);
      vertex(465, 250);
      vertex(388, 305);
      vertex(280, 304);
      vertex(200, 250);
      
      endShape();
      
      fill("red");
      circle (200, 250, 7);
      circle (280, 204, 7);
      circle (388, 204, 7);
      circle (465, 250, 7);
      circle (388, 305 ,7);
      circle (280, 304 ,7);
      circle (200, 250 ,7);
      
      noFill();
    
      
} 
   
}

function mouseClicked() {
  
  clear();
  background(bg);
  fill("red");
  circle ( mouseX, mouseY, 7);
  noFill();
  
  if(item=="square"){
    
    line(200, 250,mouseX, mouseY);
    line(330, 220,mouseX, mouseY);
    line(460, 250,mouseX, mouseY);
    line(330, 280,mouseX, mouseY);
    
  }
  else if (item=="triangular"){
    
    line ( 200, 250, mouseX, mouseY );
    line ( 460, 250, mouseX, mouseY );
    line ( 330, 280, mouseX, mouseY );
    
    }
  else if (item=="pentagon"){
    
    line ( 200, 250, mouseX, mouseY );
    line ( 327, 213, mouseX, mouseY );
    line ( 465, 250, mouseX, mouseY );
    line ( 388, 305, mouseX, mouseY );
    line ( 280, 304, mouseX, mouseY );
    
    }
  else if (item=="hexagon"){
    
    line ( 200, 250, mouseX, mouseY );
    line ( 280, 204, mouseX, mouseY );
    line ( 388, 204, mouseX, mouseY );
    line ( 465, 250, mouseX, mouseY );
    line ( 388, 305, mouseX, mouseY );
    line ( 280, 304, mouseX, mouseY );
    
    }
 
}
