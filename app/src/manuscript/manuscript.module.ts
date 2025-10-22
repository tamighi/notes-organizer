import { Module } from "@nestjs/common";
import { ManuscriptController } from "./manuscript.controller";
import { ManuscriptService } from "./manuscript.service";
import { OpenAIService } from "src/openAI/openAI.service";

@Module({
  controllers: [ManuscriptController],
  providers: [ManuscriptService, OpenAIService],
})
export class ManuscriptModule {}
