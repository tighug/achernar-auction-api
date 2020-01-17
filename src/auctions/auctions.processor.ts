import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueProgress,
  OnQueueCompleted
} from "@nestjs/bull";
import { Job } from "bull";

@Processor("auction")
export class AuctionsProcessor {
  @Process()
  handleAuctions(job: Job) {
    this.test(job);
  }

  async test(job: Job): Promise<void> {
    await this.sleep(1000);
    job.progress(1);
    await this.sleep(1000);
    job.progress(2);
    await this.sleep(1000);
    job.progress(3);
    await this.sleep(1000);
    job.progress(4);
    await this.sleep(1000);
    job.progress(5);
    console.log("end");
  }

  @OnQueueActive()
  onQueueActive(job: Job): void {
    console.log("start ", job.id);
  }

  @OnQueueProgress()
  onQueueProgress(job: Job, progress: number): void {
    console.log(progress);
  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
