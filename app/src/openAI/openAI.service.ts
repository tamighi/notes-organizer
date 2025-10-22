import { Injectable } from "@nestjs/common";
import OpenAI from "openai";

export type SendParams = {
  instructions?: string;
  input: string;
};

@Injectable()
export class OpenAIService {
  private readonly MODEL = "gpt-4o";
  private client: OpenAI = new OpenAI();

  public async send(params: SendParams) {
    return this.client.responses.create({
      model: this.MODEL,
      ...params,
    });
  }
}
