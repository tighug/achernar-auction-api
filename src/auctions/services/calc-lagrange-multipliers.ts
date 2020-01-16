import { NodalPrice } from "src/nodal-prices/nodal-price.entity";
import { Flow } from "src/flow-transitions/flow.entity";

const MAX_VOLTAGE = Number(process.env.MAX_VOLTAGE);
const MIN_VOLTAGE = Number(process.env.MIN_VOLTAGE);
const MAX_CURRENT_MULTIPLIER = Number(process.env.MAX_CURRENT_MULTIPLIER);
const MIN_MAX_CURRENT = Number(process.env.MIN_MAX_CURRENT);
const COEFF_V = Number(process.env.COEFF_V);
const COEFF_I = Number(process.env.COEFF_I);
const TOL_V = Number(process.env.TOL_V);
const TOL_I = Number(process.env.TOL_I);

export class CalcLagrangeMultipliers {
  static execute(nodalPrices: NodalPrice[], initFlows: Flow[], flows: Flow[]) {
    const lineIRanges = initFlows.map(initFlow => {
      const range = initFlow.lineI * MAX_CURRENT_MULTIPLIER;
      return range < MIN_MAX_CURRENT ? MIN_MAX_CURRENT : range;
    });
    const maxlineIs = lineIRanges;
    const minLineIs = lineIRanges.map(r => -1 * r);

    flows.forEach((f, i) => {
      const excessMaxLineI = f.lineI - maxlineIs[i];
      const excessMinLineI = minLineIs[i] - f.lineI;
      const excessMaxNodeV = f.nodeV - MAX_VOLTAGE;
      const excessMinNodeV = MIN_VOLTAGE - f.nodeV;

      nodalPrices[i].muIp = this.calcMuIp(excessMaxLineI, nodalPrices[i].muIp);
      nodalPrices[i].muIn = this.calcMuIn(excessMinLineI, nodalPrices[i].muIn);
      nodalPrices[i].muVp = this.calcMuVp(excessMaxNodeV, nodalPrices[i].muVp);
      nodalPrices[i].muVn = this.calcMuVn(excessMinNodeV, nodalPrices[i].muVn);

      if (
        excessMaxLineI > 0 ||
        excessMinLineI > 0 ||
        excessMaxNodeV > 0 ||
        excessMinNodeV > 0
      )
        f.isFault = true;
      else f.isFault = false;
    });
  }

  private static calcMuIp(excess: number, muIp: number) {
    if (excess <= 0) return 0;
    if (excess <= TOL_I) return muIp;

    return muIp + COEFF_I * excess;
  }

  private static calcMuIn(excess: number, muIn: number) {
    if (excess <= 0) return 0;
    if (excess <= TOL_I) return muIn;

    return muIn + COEFF_I * excess;
  }

  private static calcMuVp(excess: number, muVp: number) {
    if (excess <= 0) return 0;
    if (excess <= TOL_V) return muVp;

    return muVp + COEFF_V * excess;
  }

  private static calcMuVn(excess: number, muVn: number) {
    if (excess <= 0) return 0;
    if (excess <= TOL_V) return muVn;

    return muVn + COEFF_V * excess;
  }
}
