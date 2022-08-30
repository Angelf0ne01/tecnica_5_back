import express, { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { success } from "../../network/response";
import controller from "./controller";
const router = express.Router();

//C.R.U.D
//Create
//Read
//Update
//Ddelete

//Crear 1 led
router.post("/", (req: Request, resp: Response, next: NextFunction) => {
  const { name } = req.body;
  controller
    .createLed(name)
    .then((data) => success(req, resp, data, StatusCodes.CREATED))
    .catch(next);
});
//leer la lista de led
router.get("/", (req: Request, resp: Response, next: NextFunction) => {
  controller
    .listLeds()
    .then((data) => success(req, resp, data, StatusCodes.OK))
    .catch(next);
});
//leer 1 led
router.get("/:id", (req: Request, resp: Response, next: NextFunction) => {
  const { id } = req.params;
  controller
    .getLed(id)
    .then((data) => success(req, resp, data, StatusCodes.OK))
    .catch(next);
});
//update 1 led
router.put("/", (req: Request, resp: Response, next: NextFunction) => {
  const { name, id, status } = req.body;
  controller
    .updateLed(id, name, status)
    .then((data) => success(req, resp, data, StatusCodes.OK))
    .catch(next);
});
//delete 1 led
router.delete("/:id", (req: Request, resp: Response, next: NextFunction) => {
  const { id } = req.params;

  controller
    .deleteLed(id)
    .then((data) => success(req, resp, data, StatusCodes.OK))
    .catch(next);
});

export default router;
