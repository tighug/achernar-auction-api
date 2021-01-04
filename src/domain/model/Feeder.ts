export class Feeder {
  id: number;
  networkNum: number;
  feederNum: number;

  constructor(props: FeederProps) {
    this.id = props.id;
    this.networkNum = props.networkNum;
    this.feederNum = props.feederNum;
  }
}

type FeederProps = Required<Feeder>;
