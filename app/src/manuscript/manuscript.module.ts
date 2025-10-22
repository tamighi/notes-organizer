import { Module } from "@nestjs/common";
import { ManuscriptController } from "./manuscript.controller";
import { ManuscriptService } from "./manuscript.service";
import { AIClient } from "src/AIClient/AIClient.service";

@Module({
  controllers: [ManuscriptController],
  providers: [ManuscriptService, AIClient],
})
export class ManuscriptModule {}
