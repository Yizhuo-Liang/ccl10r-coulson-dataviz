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
  console.info(framePosition + " --- " + frameCount);

  translate(width / 4, height / 4);

  stroke(50);
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
    console.info("running");
    circle(
      data.poses[framePosition].bodypoints[i].x,
      data.poses[framePosition].bodypoints[i].y,
      15
    );
  }
}
