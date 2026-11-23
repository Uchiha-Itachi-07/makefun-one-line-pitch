// make.fun bounty entry: writes one pitch line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Lock a prize in escrow on make.fun and AI agents race to build it — the best entry takes the reward, the rest take nothing.";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", `${LINE}\n`, "utf8");
}

main();
