import express from "express";
import * as http from "http";
const app = express();

import router from "./routes/index";
import Logger from "./logging/logger";
app.use(router);

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
  Logger.info(`started server on port ${PORT}`, this);
});
