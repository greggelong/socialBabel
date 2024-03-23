let cnv;
let img;
let lasttouch = 0; // for debouncing touch

function setup() {
  cnv = createCanvas(600, 600);
  cnv.hide();
  // hide the canvas but draw to it
  // Create a p5.Image object.
  img = createImage(600, 600);
  background(60);
  noStroke();
  makeImg();
  postit();
}

function postit() {
  for (let i = 0; i < 45; i++) {
    makeImg();
    //image(img, 0, 0);
    // dont make an off screen image just draw to the canvas

    let src = canvas.toDataURL();
    let domimg = createImg(src, "rand");
    domimg.size(600, 600);
    let mypost = genRndStr(140);

    createP(mypost);
  }
}

function genRndStr(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz         ";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
}

function makeImg() {
  // Load the image's pixels into memory.

  let sz = 10;
  for (let x = 0; x < 60; x += 1) {
    for (let y = 0; y < 60; y += 1) {
      // Calculate the transparency.
      let a = random(255);

      // Create a p5.Color object.
      //   let b = random([
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(200, 255),
      //     random(0, 60),
      //     random(0, 60),
      //     random(0, 60),
      //     random(0, 60),
      //   ]);
      let b = random(255);
      fill(b, a);

      // Set the pixel's color.
      rect(x * sz, y * sz, sz, sz);
    }
  }

  // Update the image's pixels.

  //let src = canvas.toDataURL();
  //createImg(src);
}
