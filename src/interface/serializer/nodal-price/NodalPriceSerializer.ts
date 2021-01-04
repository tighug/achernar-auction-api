/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NodalPriceBaseRO } from "./NodalPriceBaseRO";
import { NodalPriceRO } from "./NodalPriceRO";
import { NodalPricesRO } from "./NodalPricesRO";

export class NodalPriceSerializer {
  serialize(data: any): NodalPriceRO | NodalPricesRO {
    if (!data) throw new Error("data must not be undefined.");
    if (Array.isArray(data)) {
      const nodalPrices = data.map(this.serializeSingle);
      return {
        nodalPriceCount: nodalPrices.length,
        nodalPrices,
      };
    }
    return {
      nodalPrice: this.serializeSingle(data),
    };
  }

  private serializeSingle(nodalPrice: any): NodalPriceBaseRO {
    return { ...nodalPrice };
  }
}
