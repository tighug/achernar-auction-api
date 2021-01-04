import { NodalPriceListInput } from "./NodalPriceListInput";
import { NodalPriceListOutput } from "./NodalPriceListOutput";

export interface INodalPriceListInteractor {
  handle(input: NodalPriceListInput): Promise<NodalPriceListOutput>;
}
