import { Controller, Post } from "@nestjs/common";

@Controller("manuscript")
export class ManuscriptController {
  @Post("transcript")
  toTranscript() {
    return "to transcript";
  }
}
