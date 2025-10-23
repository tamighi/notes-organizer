import { Module } from "@nestjs/common";
import { ManuscriptModule } from "./manuscript/manuscript.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ManuscriptModule],
})
export class AppModule {}
