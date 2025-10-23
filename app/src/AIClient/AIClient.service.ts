import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export type SendParams = {
  instructions?: string;
  input: string;
};

@Injectable()
export class AIClient {
  private readonly MODEL = "gpt-4o";

  constructor(private config: ConfigService) {}

  public async send(params: SendParams) {
    const headers = new Headers();

    headers.set("Authorization", `Bearer ${this.config.get("OPENAI_API_KEY")}`);
    headers.set("Content-Type", "application/json");

    const body = {
      model: this.MODEL,
      ...params,
    };

    const res = await fetch("https://api.openai.com/v1/responses", {
      headers,
      method: "post",
      body: JSON.stringify(body),
    });

    const json = await res.json();

    return json.output[0].content[0].text;
  }

  public async test() {
    // this.client.files.waitForProcessing
  }
}
