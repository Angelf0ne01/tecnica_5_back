import express, { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { success } from "./../../network/response";
const router = express.Router();

router.get("/", (req: Request, resp: Response, next: NextFunction) => {
  const data = {
    success: "OK",
  };
  success(req, resp, data, StatusCodes.OK);
});

export default router;
