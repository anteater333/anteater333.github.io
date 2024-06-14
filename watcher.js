const { WebSocketServer } = require("ws");
const chokidar = require("chokidar");

/**
 * 기존 ver.2에선 35729 포트 사용 중이었음
 */
const WS_PORT = 35730;

const wss = new WebSocketServer({ port: WS_PORT });
const watchCallbacks = [];

chokidar.watch("./_posts").on("all", (event) => {
  if (event === "change") {
    watchCallbacks.forEach((cb) => cb());
  }
});

wss.on("connection", (ws) => {
  function onChange() {
    ws.send("refresh");
  }

  ws.on("error", console.error);

  watchCallbacks.push(onChange);
  ws.on("close", function close() {
    const index = watchCallbacks.findIndex(onChange);
    watchCallbacks.splice(index, 1);
  });
});
