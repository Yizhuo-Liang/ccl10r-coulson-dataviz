let data;

function preload() {
  data = loadJSON("poses.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(5);
  let framePosition = frameCount % data.poses.length;
  background(0);
  console.info("?");
  console.info(framePosition + " --- " + frameCount);

  for (let i = 0; i < data.poses[framePosition].bodypoints.length; i++) {
    fill(240);
    console.info("running");
    circle(
      data.poses[framePosition].bodypoints[i].x,
      data.poses[framePosition].bodypoints[i].y,
      15
    );
  }
}
