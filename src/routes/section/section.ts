import { RequestHandler, Request, Response } from "express";

export const addSection: RequestHandler = async (
  req: Request,
  res: Response
) => {
  res.status(200).send("Add Section");
};

export const listAllSections: RequestHandler = async (
  req: Request,
  res: Response
) => {
  res.status(200).send("Get all sections");
};

export const updateSection: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  res.status(200).send("Updated Section");
};

export const findSection: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const id = req.params.name;

  res.status(200).send("Find Section");
};
