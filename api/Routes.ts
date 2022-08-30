import { Router } from "express";
import status from "./status/network";
import leds from "./leds/network";

export default (server: Router) => {
  server.use("/status", status);
  server.use("/leds", leds);
};
