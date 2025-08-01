let midx = 100; // parameters
let midy = 100;

// Snowflake 1
let lineLength1 = 30;
let rotationStep1 = 45;
let innerTriangleLength1 = 10;
let outerSquareSize1 = 20;
let innerSquareSize1 = 10;
let detailSquareSize1 = 8;
let outerSquareOffset1 = 30;
let innerSquareOffset1 = 15;
let detailSquareOffset1 = 36;
let strokeMainWeight1 = 3;
let strokeSubWeight1 = 2;
let mainColor1 = [130, 171, 191];
let detailColor1 = [255, 255, 255];
let flakeRotation1 = 0;

// Snowflake 2
let lineLength2 = 20;
let rotationStep2 = 45;
let innerTriangleLength2 = 10;
let outerSquareSize2 = 12;
let innerSquareSize2 = 8;
let detailSquareSize2 = 6;
let outerSquareOffset2 = 22;
let innerSquareOffset2 = 12;
let detailSquareOffset2 = 28;
let strokeMainWeight2 = 2;
let strokeSubWeight2 = 1;
let mainColor2 = [130, 171, 191];
let detailColor2 = [255, 255, 255];
let flakeRotation2 = 15;

// Snowflake 3
let lineLength3 = 40;
let rotationStep3 = 45;
let innerTriangleLength3 = 5;
let outerSquareSize3 = 25;
let innerSquareSize3 = 12;
let detailSquareSize3 = 10;
let outerSquareOffset3 = 34;
let innerSquareOffset3 = 18;
let detailSquareOffset3 = 40;
let strokeMainWeight3 = 3;
let strokeSubWeight3 = 2;
let mainColor3 = [130, 171, 191];
let detailColor3 = [255, 255, 255];
let flakeRotation3 = 25;


function setup() {
  angleMode(DEGREES);
}

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false);

  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(26, 26, 46); // navy
}

function my_symbol() {

function snowFlake(p) {
  // Long diagonal lines
  push();
  strokeWeight(p.strokeMainWeight);
  stroke(p.mainColor);
  for (let i = 0; i < 8; i++) {
    line(0, 0, p.lineLength, p.lineLength);
    rotate(p.rotationStep);
  }
  pop();

  // Inner triangles
  push();
  stroke(p.mainColor);
  strokeWeight(p.strokeMainWeight);
  for (let i = 0; i < 16; i++) {
    line(p.innerTriangleLength, 25, 0, 20);
    line(-p.innerTriangleLength, 25, 0, 20);
    rotate(p.rotationStep);
  }
  pop();

  // Outer squares
  push();
  noFill();
  strokeWeight(p.strokeMainWeight);
  rotate(p.rotationStep + 180);
  stroke(p.mainColor);
  for (let i = 0; i < 8; i++) {
    square(p.outerSquareOffset, p.outerSquareOffset, p.outerSquareSize);
    rotate(p.rotationStep);
  }
  pop();

  // Inner squares
  push();
  noFill();
  strokeWeight(p.strokeSubWeight);
  rotate(p.rotationStep + 180);
  stroke(p.mainColor);
  for (let i = 0; i < 8; i++) {
    square(p.innerSquareOffset, p.innerSquareOffset, p.innerSquareSize);
    rotate(p.rotationStep);
  }
  pop();

  // Detail squares
  push();
  noFill();
  strokeWeight(p.strokeSubWeight);
  rotate(p.rotationStep + 180);
  stroke(p.detailColor);
  for (let i = 0; i < 8; i++) {
    square(p.detailSquareOffset, p.detailSquareOffset, p.detailSquareSize);
    rotate(p.rotationStep);
  }
  pop();
}



  let flake1 = {
    lineLength: lineLength1,
    rotationStep: rotationStep1,
    innerTriangleLength: innerTriangleLength1,
    outerSquareSize: outerSquareSize1,
    innerSquareSize: innerSquareSize1,
    detailSquareSize: detailSquareSize1,
    outerSquareOffset: outerSquareOffset1,
    innerSquareOffset: innerSquareOffset1,
    detailSquareOffset: detailSquareOffset1,
    strokeMainWeight: strokeMainWeight1,
    strokeSubWeight: strokeSubWeight1,
    mainColor: mainColor1,
    detailColor: detailColor1,
    rotation: flakeRotation1
  };

  let flake2 = {
    lineLength: lineLength2,
    rotationStep: rotationStep2,
    innerTriangleLength: innerTriangleLength2,
    outerSquareSize: outerSquareSize2,
    innerSquareSize: innerSquareSize2,
    detailSquareSize: detailSquareSize2,
    outerSquareOffset: outerSquareOffset2,
    innerSquareOffset: innerSquareOffset2,
    detailSquareOffset: detailSquareOffset2,
    strokeMainWeight: strokeMainWeight2,
    strokeSubWeight: strokeSubWeight2,
    mainColor: mainColor2,
    detailColor: detailColor2,
    rotation: flakeRotation2
  };

  let flake3 = {
    lineLength: lineLength3,
    rotationStep: rotationStep3,
    innerTriangleLength: innerTriangleLength3,
    outerSquareSize: outerSquareSize3,
    innerSquareSize: innerSquareSize3,
    detailSquareSize: detailSquareSize3,
    outerSquareOffset: outerSquareOffset3,
    innerSquareOffset: innerSquareOffset3,
    detailSquareOffset: detailSquareOffset3,
    strokeMainWeight: strokeMainWeight3,
    strokeSubWeight: strokeSubWeight3,
    mainColor: mainColor3,
    detailColor: detailColor3,
    rotation: flakeRotation3
  };

  // Draw all 3 snowflakes
  push();
  translate(100, 100);
  rotate(flake1.rotation);
  scale(1);
  snowFlake(flake1);
  pop();

  push();
  translate(30, 30);
  rotate(flake2.rotation);
  scale(0.4);
  snowFlake(flake2);
  pop();

  push();
  translate(170, 170);
  rotate(flake3.rotation);
  scale(0.3);
  snowFlake(flake3);
  pop();
}


  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   let flake1 = {

//     lineLength: 30,
//     rotationStep: 45,
//     innerTriangleLength: 10,
//     outerSquareSize: 20,
//     innerSquareSize: 10,
//     detailSquareSize: 8,
//     outerSquareOffset: 30,
//     innerSquareOffset: 15,
//     detailSquareOffset: 36,
//     strokeMainWeight: 3,
//     strokeSubWeight: 2,
//     mainColor: [130, 171, 191],
//     detailColor: [255, 255, 255],
//     rotation: 0
//   };

//   let flake2 = {
//     ...flake1,
//     lineLength: 30,
//     rotation: 25,
//     outerSquareSize: 18,
//     strokeMainWeight: 2
//   };

//   let flake3 = {
//     ...flake1,
//     lineLength: 40,
//     rotation: 25,
//     innerTriangleLength: 5
//   };

//   // flake 1
//   push();
//   translate(midx, midy);
//   rotate(0);
//   scale(1);
//   snowFlake(flake1);
//   pop();

//   // flake 2
//   push();
//   translate(30, 30);
//   rotate(15);
//   scale(0.4);
//   snowFlake(flake2);
//   pop();

//   // flake 3
//   push();
//   translate(170, 170);
//   rotate(25);
//   scale(0.3);
//   snowFlake(flake3);
//   pop();
// }

// function snowFlake(p) {
//   // Long diagonal lines
//   push();
//   translate(0, 0);
//   strokeWeight(p.strokeMainWeight);
//   stroke(p.mainColor);
//   for (let i = 0; i < 8; i++) {
//     line(0, 0, p.lineLength, p.lineLength);
//     rotate(p.rotationStep);
//   }
//   pop();

//   // Inner triangles
//   push();
//   translate(0, 0);
//   stroke(p.mainColor);
//   strokeWeight(p.strokeMainWeight);
//   for (let i = 0; i < 16; i++) {
//     line(p.innerTriangleLength, 25, 0, 20);
//     line(-p.innerTriangleLength, 25, 0, 20);
//     rotate(p.rotationStep);
//   }
//   pop();

//   // Outer squares
//   push();
//   translate(0, 0);
//   noFill();
//   strokeWeight(p.strokeMainWeight);
//   rotate(p.rotationStep + 180);
//   stroke(p.mainColor);
//   for (let i = 0; i < 8; i++) {
//     square(p.outerSquareOffset, p.outerSquareOffset, p.outerSquareSize);
//     rotate(p.rotationStep);
//   }
//   pop();

//   // Inner squares
//   push();
//   translate(0, 0);
//   noFill();
//   strokeWeight(p.strokeSubWeight);
//   rotate(p.rotationStep + 180);
//   stroke(p.mainColor);
//   for (let i = 0; i < 8; i++) {
//     square(p.innerSquareOffset, p.innerSquareOffset, p.innerSquareSize);
//     rotate(p.rotationStep);
//   }
//   pop();

//   // Detail squares
//   push();
//   translate(0, 0);
//   noFill();
//   strokeWeight(p.strokeSubWeight);
//   rotate(p.rotationStep + 180);
//   stroke(p.detailColor);
//   for (let i = 0; i < 8; i++) {
//     square(p.detailSquareOffset, p.detailSquareOffset, p.detailSquareSize);
//     rotate(p.rotationStep);
//   }
//   pop();
// }






// let midx = 100;
// let midy = 100;

// let lineLength = 30;
// let rotationStep = 45;

// let innerTriangleLength = 10

// let outerSquareSize = 20;
// let innerSquareSize = 10;
// let detailSquareSize = 8;

// let outerSquareOffset = 30;
// let innerSquareOffset = 15;
// let detailSquareOffset = 36;

// let strokeMainWeight = 3;
// let strokeSubWeight = 2;

// let mainColor = [130, 171, 191];     // frost blue
// let detailColor = [255, 255, 255]; // icy white

   

// function setup() {
//   angleMode(DEGREES);
// }

// function setup_wallpaper(pWallpaper) {
//   pWallpaper.output_mode(DEVELOP_GLYPH);
//   //pWallpaper.output_mode(GRID_WALLPAPER);
//   pWallpaper.resolution(FIT_TO_SCREEN);
//   pWallpaper.show_guide(false);

//   pWallpaper.grid_settings.cell_width = 200;
//   pWallpaper.grid_settings.cell_height = 200;
//   pWallpaper.grid_settings.row_offset = 150;
// }

// function wallpaper_background() {
//   background(26, 26, 46); // navy
// }

//   function my_symbol() {
//   // Big centered snowflake
//   push();
//   translate(25,10);
//   scale(0.8); // normal size
//   snowFlake();
//   pop();

//   // Smaller snowflake in top-left
//   push();
//   strokeWeight(1)
//   translate(4, 5);
//   scale(0.3);
//   snowFlake();
//   pop();

//   // Even smaller snowflake in bottom-right
//   push();
//   translate(130, 130);
//   scale(0.35);
//   snowFlake();
//   pop();
//   //snowFlake(); // ← important! this draws each snowflake in every grid cell
// }



// function snowFlake() {

//   // Long diagonal lines
//   push();
//   translate(midx, midy);
//   strokeWeight(strokeMainWeight);
//   stroke(mainColor);
//   for (let i = 0; i < 8; i++) {
//     line(0, 0, lineLength, lineLength);
//     rotate(rotationStep);
//   }
//   pop();

//   // Inner triangles
//   push();
//   translate(midx, midy);
//   stroke(mainColor);
//   strokeWeight(strokeMainWeight);
//   for (let i = 0; i < 16; i++) {
//     line(innerTriangleLength, 25, 0, 20);
//     line(-innerTriangleLength, 25, 0, 20);
//     rotate(rotationStep);
//   }
//   pop();

//   // Outer blue squares
//   push();
//   translate(midx, midy);
//   noFill();
//   strokeWeight(strokeMainWeight);
//   rotate(rotationStep + 180);
//   stroke(mainColor);
//   for (let i = 0; i < 8; i++) {
//     square(outerSquareOffset, outerSquareOffset, outerSquareSize);
//     rotate(rotationStep);
//   }
//   pop();

//   // Inner blue squares
//   push();
//   translate(midx, midy);
//   noFill();
//   strokeWeight(strokeSubWeight);
//   rotate(rotationStep + 180);
//   stroke(mainColor);
//   for (let i = 0; i < 8; i++) {
//     square(innerSquareOffset, innerSquareOffset, innerSquareSize);
//     rotate(rotationStep);
//   }
//   pop();

//   // Outer pink squares
//   push();
//   translate(midx, midy);
//   noFill();
//   strokeWeight(strokeSubWeight);
//   rotate(rotationStep + 180);
//   stroke(detailColor);
//   for (let i = 0; i < 8; i++) {
//     square(detailSquareOffset, detailSquareOffset, detailSquareSize);
//     rotate(rotationStep);
//   }
//   pop();
// }

