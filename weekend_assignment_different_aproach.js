const r = require("raylib");
function update(world) {}

function draw(world) {
  r.BeginTextureMode(world.target);
  r.ClearBackground(r.WHITE);

  r.DrawTriangle(
    { x: 0, y: world.targetHeight },
    { x: world.targetWidth, y: world.targetHeight },
    { x: world.targetWidth, y: 0 },
    r.BLUE,
  );

  r.EndTextureMode();

  r.BeginDrawing();
  r.ClearBackground(world.bg);
  const source = {
    x: 0,
    y: 0,
    // width: world.targetWidth,
    // height: world.targetHeight,
    width: world.targetWidth * 10,
    height: world.targetHeight * 10,
  };

  for (let row = 0; row < 1; row++) {
    const y = row * world.targetHeight;

    for (let col = 0; col < 1; col++) {
      const x = col * world.targetWidth;
      r.DrawTextureRec(world.target.texture, source, { x: 0, y: 0 }, r.WHITE);
    }
  }
  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    update(world);
    draw(world);
  }
}
function teardown() {
  r.CloseWindow();
}
function setup() {
  const TITLE = "intro";
  const WIDTH = 650;
  const HEIGHT = 300;
  const FPS = 60;
  const bg = r.BLACK;

  const targetHeight = 10;
  const targetWidth = 10;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(WIDTH, HEIGHT, TITLE);
  r.SetTargetFPS(FPS);
  const target = r.LoadRenderTexture(targetWidth, targetHeight);

  return { WIDTH, HEIGHT, TITLE, FPS, bg, target, targetHeight, targetWidth };
}

function main() {
  const world = setup();
  loop(world);
  teardown();
}
main();
