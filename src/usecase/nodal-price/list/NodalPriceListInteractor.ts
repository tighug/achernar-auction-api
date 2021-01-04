import { INodalPriceRepository } from "../../../domain/repository/INodalPriceRepository";
import { INodalPriceListInteractor } from "./INodalPriceListInteractor";
import { NodalPriceListInput } from "./NodalPriceListInput";
import { NodalPriceListOutput } from "./NodalPriceListOutput";

export class NodalPriceListInteractor implements INodalPriceListInteractor {
  constructor(private readonly nodalPriceRepository: INodalPriceRepository) {}

  async handle(input: NodalPriceListInput): Promise<NodalPriceListOutput> {
    return this.nodalPriceRepository.listByMarketId(input.marketName);
  }
}
