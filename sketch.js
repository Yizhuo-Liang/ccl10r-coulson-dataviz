let data;
let framePosition;

function preload() {
  data = loadJSON("poses.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(5);
  framePosition = frameCount % data.poses.length;
  background(0, 200);

  translate(0, height / 4);
  animate();
  translate(width / 4, 0);
  framePosition += 20;
  framePosition %= data.poses.length;
  animate();
  translate(width / 4, 0);
  framePosition += 20;
  framePosition %= data.poses.length;
  animate();
}

function animate() {
  stroke(30);
  for (let i = 0; i < data.poses[framePosition].bodypoints.length; i++) {
    for (let j = 0; j < data.poses[framePosition].bodypoints.length; j++) {
      line(
        data.poses[framePosition].bodypoints[i].x,
        data.poses[framePosition].bodypoints[i].y,
        data.poses[framePosition].bodypoints[j].x,
        data.poses[framePosition].bodypoints[j].y
      );
    }
  }

  for (let i = 0; i < data.poses[framePosition].bodypoints.length; i++) {
    fill(240);
    circle(
      data.poses[framePosition].bodypoints[i].x,
      data.poses[framePosition].bodypoints[i].y,
      15
    );
  }
}
