import { Market } from "./Market";

export class NodalPrice {
  id?: number;
  market: Market;
  muIp = 0;
  muIn = 0;
  muVp = 0;
  muVn = 0;
  weightPrice = 0;

  constructor(props: NodalPriceProps) {
    this.market = props.market;
  }
}

type NodalPriceProps = {
  market: Market;
};
