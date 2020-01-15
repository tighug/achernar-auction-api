import { MarketData } from "src/markets/market.interface";
import { UserData } from "src/users/user.interface";
import { BidType } from "./bid.entity";

export interface BidData {
  id: number;
  market: MarketData;
  user: UserData;
  price: number;
  amount: number;
  contractAmount: number;
  bidType: BidType;
}

export interface BidsRO {
  bids: BidData[];
  bidCount: number;
}
