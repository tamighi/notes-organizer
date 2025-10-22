import { Controller, Post } from "@nestjs/common";
import { AIClient } from "src/AIClient/AIClient.service";

@Controller("manuscript")
export class ManuscriptController {
  constructor(private openAIService: AIClient) {}

  @Post("transcript")
  public async toTranscript() {
    const res = await this.openAIService.send({
      instructions: "You are a coding assistant that talks like a pirate",
      input: "Are semicolons optional in JavaScript?",
    });

    return res.output_text;
  }
}
