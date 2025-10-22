import { Module } from "@nestjs/common";
import { ManuscriptModule } from "./manuscript/manuscript.module";

@Module({
  imports: [ManuscriptModule],
})
export class AppModule {}
