//your parameter variables go here!
let x  = 20;
let y = 30;

let midx = 100
let midy = 100
let lnlength = 30
let flake = 60
angleMode(DEGREES)

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(34, 51, 102); //navy
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
let blue = color(71, 240, 255)
//Long lines
push()
  translate (100, 100)
  strokeWeight(3)
  stroke(blue)
  for(x=0; x<8; x++){
  line(0, 0, lnlength, lnlength)
  rotate(45)
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
  rotate(45)
  }
  pop()
//
  rotate(0)
  let pink = color(207, 138, 192)


noFill()

//outer triangles
push()
let angle = 45
translate(midx,midy)
noFill()
strokeWeight(3)
rotate(angle+180)
stroke(blue)
for (let x = 0; x<8; x++){
square(30, 30, 20);
rotate(45);
}
pop()


push()
translate(midx,midy)
noFill()
strokeWeight(2)
rotate(angle+180)
stroke(blue)
for (let x = 0; x<8; x++){
square(15, 15, 10);
rotate(45);
}
pop()

//innwe outer square
push()
translate(midx,midy)
noFill()
strokeWeight(2)
rotate(angle+180)
stroke(blue)
for (let x = 0; x<8; x++){
square(36, 36, 8);
rotate(45);
}
pop()

















}
