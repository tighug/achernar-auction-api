import { Feeder } from "./Feeder";

export class Market {
  name: string;
  feeder: Feeder;

  constructor(props: MarketProps) {
    this.name = props.name;
    this.feeder = props.feeder;
  }
}

type MarketProps = Required<Market>;
