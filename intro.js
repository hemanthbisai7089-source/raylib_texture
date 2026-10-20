const r = require("raylib");
function update(world) {}

function draw(world) {
  r.BeginTextureMode(world.target);
  r.ClearBackground(r.GRAY);

  r.DrawCircle(100, 100, 75, r.RED);
  r.DrawCircle(70, 70, 20, r.WHITE);

  r.EndTextureMode();

  r.BeginDrawing();
  r.ClearBackground(world.bg);
  const source = { x: 0, y: 0, width: 200, height: 200 };

  r.DrawTextureRec(world.target.texture, source, { x: 10, y: 10 }, r.WHITE);
  r.DrawTexture(world.target.texture, 220, 10, r.WHITE);
  r.DrawTexture(world.target.texture, 430, 10, r.WHITE);

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

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(WIDTH, HEIGHT, TITLE);
  r.SetTargetFPS(FPS);
  const target = r.LoadRenderTexture(200, 200);

  return { WIDTH, HEIGHT, TITLE, FPS, bg, target };
}

function main() {
  const world = setup();
  loop(world);
  teardown();
}
main();
