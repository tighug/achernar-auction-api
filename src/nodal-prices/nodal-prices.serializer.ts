import { NodalPrice } from "./nodal-price.entity";
import { NodalPriceData } from "./nodal-price.interface";
import { MarketsSerializer } from "src/markets/markets.serializer";
import { NodesSerializer } from "src/nodes/nodes.serializer";

export class NodalPricesSerializer {
  static serialize(nodalPrice: NodalPrice): NodalPriceData {
    return {
      id: nodalPrice.id,
      market: MarketsSerializer.serialize(nodalPrice.market),
      node: NodesSerializer.serialize(nodalPrice.node),
      muIp: nodalPrice.muIp,
      muIn: nodalPrice.muIn,
      muVp: nodalPrice.muVp,
      muVn: nodalPrice.muVn,
      weightPrice: nodalPrice.weightPrice,
      agreedPrice: nodalPrice.agreedPrice
    };
  }
}
