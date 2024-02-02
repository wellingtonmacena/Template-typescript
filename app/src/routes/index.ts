
import {ConvertFileService  } from '../services/ConvertFileService'
import * as express from "express";
const router = express.Router();

import Logger from "../logging/logger";

router.get("/", (req, res) => {
  const convertFileService = new  ConvertFileService();
  let f = convertFileService.main();
  let fd = convertFileService.test().then(item => Logger.info(item));
  res.status(200).json({ f, fd });
});

router.get("/test", (req, res) => {
  return res.status(200).json({ ok: "test" });
});

export default router;
