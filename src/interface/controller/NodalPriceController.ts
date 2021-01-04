import { NextFunction, Request, Response } from "express";
import { INodalPriceListInteractor } from "../../usecase/nodal-price/list/INodalPriceListInteractor";
import { NodalPriceSerializer } from "../serializer/nodal-price/NodalPriceSerializer";
import createHttpError from "http-errors";

export class NodalPriceController {
  private readonly nodalPriceSerializer: NodalPriceSerializer;

  constructor(
    private readonly nodalPriceListInteractor: INodalPriceListInteractor
  ) {
    this.nodalPriceSerializer = new NodalPriceSerializer();
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { marketName } = req.query;

      if (marketName === undefined)
        throw new createHttpError.BadRequest("marketName is undefined.");
      if (typeof marketName !== "string")
        throw new createHttpError.BadRequest("feederId is invalid.");

      const input = { marketName };
      const nodalPrices = await this.nodalPriceListInteractor.handle(input);
      const nodalPricesRO = this.nodalPriceSerializer.serialize(nodalPrices);
      res.json(nodalPricesRO);
    } catch (err) {
      next(err);
    }
  }
}
