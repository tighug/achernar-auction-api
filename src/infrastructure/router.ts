import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response, Router } from "express";
import { NodalPriceController } from "../interface/controller/NodalPriceController";
import { NodalPriceRepository } from "../interface/gateway/NodalPriceRepository";
import { NodalPriceListInteractor } from "../usecase/nodal-price/list/NodalPriceListInteractor";

const router = Router();
const prisma = new PrismaClient();

const nodalPriceRepository = new NodalPriceRepository(prisma);

const nodalPriceList = new NodalPriceListInteractor(nodalPriceRepository);

const nodalPriceController = new NodalPriceController(nodalPriceList);

router.get(
  "/nodalPrices",
  async (req: Request, res: Response, next: NextFunction) => {
    await nodalPriceController.list(req, res, next);
  }
);

export default router;
