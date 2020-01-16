import { Bid, BidType } from "src/bids/bid.entity";
import { NodalPrice } from "src/nodal-prices/nodal-price.entity";

const PRICE_STEP = Number(process.env.MIN_PRICE_UNIT);

export class CalcBaseAgreedPrice {
  static execute(bids: Bid[], nodalPrices: NodalPrice[]): [number, number] {
    const sellBids = bids.filter(b => b.bidType === BidType.SELLER);
    const buyBids = bids.filter(b => b.bidType === BidType.BUYER);

    let gap = 100000; // Big Positive Number
    let baseAgreedPrice = 0;

    for (baseAgreedPrice = 0; gap <= 0; baseAgreedPrice += PRICE_STEP) {
      const SELL_AGREED_SUM = this._calcSellAgreedSum(
        sellBids,
        nodalPrices,
        baseAgreedPrice
      );
      const BUY_AGREED_SUM = this._calcBuyAgreedSum(
        buyBids,
        nodalPrices,
        baseAgreedPrice
      );

      gap = SELL_AGREED_SUM - BUY_AGREED_SUM;
    }

    return [baseAgreedPrice, gap];
  }

  private static _calcSellAgreedSum(
    sellBids: Bid[],
    nodalPrices: NodalPrice[],
    baseAgreedPrice: number
  ): number {
    let sum = 0;

    sellBids.forEach(b => {
      const selfNodalPrice = nodalPrices.find(
        n => n.node.num === b.user.node.num
      );

      if (selfNodalPrice === undefined)
        throw new Error("selfNodalPrice is undefined.");

      const SELF_AGREED_PRICE = selfNodalPrice.weightPrice + baseAgreedPrice;

      if (b.price <= SELF_AGREED_PRICE) sum += b.amount;
    });

    return sum;
  }

  private static _calcBuyAgreedSum(
    buyBids: Bid[],
    nodalPrices: NodalPrice[],
    baseAgreedPrice: number
  ): number {
    let sum = 0;

    buyBids.forEach(b => {
      const selfNodalPrice = nodalPrices.find(
        n => n.node.num === b.user.node.num
      );

      if (selfNodalPrice === undefined)
        throw new Error("selfNodalPrice is undefined.");

      const SELF_AGREED_PRICE = selfNodalPrice.weightPrice + baseAgreedPrice;

      if (b.price >= SELF_AGREED_PRICE) sum += b.amount;
    });

    return sum;
  }
}
