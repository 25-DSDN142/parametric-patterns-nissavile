//your parameter variables go here!
let x  = 20;
let y = 30;

let midx = 100
let midy = 100

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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
let green = color(188, 224, 186)

  strokeWeight(9)
  stroke(green)
  line(midx,0,midx,midy+100)
  line(0,midy,midx+100,midy)

//
  rotate(0)
  line(midx-100,midy-100,midx+100,midy+100)
  line(midx-100,midy+100,midx+100,midy-100)
  
  // triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
  
  let blue = color(139,172,224);
  let pink = color(207, 138, 192)


noFill()
// triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)


push()
let angle = 45
translate(midx,midy)
noFill()
// triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
rotate(angle+180)
stroke(pink)
triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
rotate(45)
triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
rotate(45)
triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
rotate(45)
triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
rotate(45)
triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
rotate(45)
triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
rotate(45)
triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
rotate(45)
triangle(midx-40,midy-70,midx-70,midy-70,midx-70,midy-40)
pop()

//custom shape


stroke(blue)
line(midx-20,midy,midx,midy-20)
line(midx,midy-20,midx+20,midy)
line(midx+20,midy,midx,midy+20)
line(midx,midy+20,midx-20,midy)














}
