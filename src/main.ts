import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";
import { ValidationPipe } from "@nestjs/common";

require("dotenv").config();

const AUCTION_API_PORT = Number(process.env.AUCTION_API_PORT) | 7000;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false
    })
  );
  await app.listen(AUCTION_API_PORT);
}

dotenv.config();
bootstrap();
