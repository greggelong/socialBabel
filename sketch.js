let cnv;
let img;
let lasttouch = 0; // for debouncing touch

function setup() {
  cnv = createCanvas(600, 600);
  // hide the canvas but draw to it
  // Create a p5.Image object.
  img = createImage(600, 600);
  background(60);
  makeImg();
}

function draw() {
  cnv.hide();
  image(img, 0, 0);
}

function touchStarted() {
  // for Ios
  // calculate time since last touch
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  if (timesincelasttouch > 500) {
    makeImg();

    let src = canvas.toDataURL();
    let domimg = createImg(src, "rand");
    domimg.size(600, 600);
    let mypost = genRndStr(140);

    createP(mypost);
  }
}

function mousePressed() {
  touchStarted();
  // for firefox computer browsers
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
  img.loadPixels();

  // Create a color gradient.
  for (let x = 0; x < img.width; x += 1) {
    for (let y = 0; y < img.height; y += 1) {
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
      let c = color(b, a);

      // Set the pixel's color.
      img.set(x, y, c);
    }
  }

  // Update the image's pixels.
  img.updatePixels();

  //let src = canvas.toDataURL();
  //createImg(src);
}
