import { PrismaClient } from "@prisma/client";
import { NodalPrice } from "../../domain/model/NodalPrice";
import { INodalPriceRepository } from "../../domain/repository/INodalPriceRepository";

export class NodalPriceRepository implements INodalPriceRepository {
  constructor(private readonly prisma: PrismaClient) {}

  listByMarketId(marketName: string): Promise<NodalPrice[]> {
    return this.prisma.nodalPrice.findMany({
      where: {
        marketName,
      },
      include: {
        market: { include: { feeder: true } },
      },
    });
  }

  async save(nodalPrice: NodalPrice): Promise<NodalPrice> {
    const result = await this.prisma.nodalPrice.create({
      data: {
        market: {
          create: {
            name: nodalPrice.market.name,
            feeder: {
              create: nodalPrice.market.feeder,
            },
          },
        },
        muIp: nodalPrice.muIp,
        muIn: nodalPrice.muIn,
        muVp: nodalPrice.muVp,
        muVn: nodalPrice.muVn,
        weightPrice: nodalPrice.weightPrice,
      },
    });
    nodalPrice.id = result.id;
    return nodalPrice;
  }
}
