import { Bid } from "./bid.entity";
import { BidData } from "./bid.interface";
import { MarketsSerializer } from "src/markets/markets.serializer";
import { UsersSerializer } from "src/users/users.serializer";

export class BidsSerializer {
  static serialize(bid: Bid): BidData {
    return {
      id: bid.id,
      market: MarketsSerializer.serialize(bid.market),
      user: UsersSerializer.serialize(bid.user),
      price: bid.price,
      amount: bid.amount,
      contractAmount: bid.contractAmount,
      bidType: bid.bidType
    };
  }
}
