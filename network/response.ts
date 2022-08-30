import { Request, Response } from "express";

export function success(
  req: Request,
  resp: Response,
  data: any,
  status: number
) {
  resp.status(status).json({
    status,
    data,
    error: false,
  });
}

export function error(
  req: Request,
  resp: Response,
  errorMessage: any,
  status: number
) {
  resp.status(status).json({
    status,
    data: null,
    error: true,
    errorMessage,
  });
}
