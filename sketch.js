let data;

function preload() {
  data = loadJSON("pose.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(5);
  background(0);
  console.info("running");

  // draw the lines
  stroke(80);
  for (let i = 0; i < data.bodypoints.length; i++) {
    for (let j = 0; j < data.bodypoints.length; j++) {
      line(
        data.bodypoints[i].x + noise(frameCount) * 5,
        data.bodypoints[i].y + noise(frameCount + 1) * 5,
        data.bodypoints[j].x + noise(frameCount + 2) * 5,
        data.bodypoints[j].y + noise(frameCount + 3) * 5
      );
    }
  }

  for (let i = 0; i < data.bodypoints.length; i++) {
    fill(220);
    circle(data.bodypoints[i].x, data.bodypoints[i].y, 15);
  }
}
