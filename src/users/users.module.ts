import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { NodesModule } from "src/nodes/nodes.module";

@Module({
  imports: [TypeOrmModule.forFeature([User]), NodesModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
