//your parameter variables go here!
let x  = 20;
let y = 30;

let midx = 100
let midy = 100


angleMode(DEGREES)

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  // pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print
  
  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 150;
}

function wallpaper_background() {
  background(34, 51, 102); //navy
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  

  
  // snowFlake();

  push();
  translate(midx, midy);
  scale(0.5);
  snowFlake();

  pop();

}


function snowFlake(){
    let blue = color(71, 240, 255)
  let pink = color(236, 106, 247)
  let lnlength = 30
  let flake = 60
  let angle = 45
  
//Long lines
push()
  translate (100, 100)
  strokeWeight(3)
  stroke(blue)
  for(x=0; x<8; x++){
  line(0, 0, lnlength, lnlength)
  rotate(angle)
  }
  pop()

  //Inner Triangle
  push()
  translate (100, 100)
  stroke(blue)
  strokeWeight(3)
  for(x=0; x<16; x++){
  line(10, 25, 0, 20)
  line(-10, 25, 0, 20)
  rotate(angle)
  }
  pop()
//
  rotate(0)
  


noFill()

//outer triangles
push()

translate(midx,midy)
noFill()
strokeWeight(3)
rotate(angle+180)
stroke(blue)
for (let x = 0; x<8; x++){
square(30, 30, 20,);
rotate(angle);
}
pop()

//inner sqaures
push()
translate(midx,midy)
noFill()
strokeWeight(2)
rotate(angle+180)
stroke(blue)
for (let x = 0; x<8; x++){
square(15, 15, 10,);
rotate(angle);
}
pop()

//inner outer square
push()
translate(midx,midy)
noFill()
strokeWeight(2)
rotate(angle+180)
stroke(pink)
for (let x = 0; x<8; x++){
square(36, 36, 8,);
rotate(angle);
}
pop()

}