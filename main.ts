// The Self-Checkout Is Judging You — one-liner entry.
// Writes a single funny remark in the voice of a judgmental
// self-checkout machine to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Twelve yoghurts and nothing else. Unexpected item in bagging area: a cry for help.";

mkdirSync("/output", { recursive: true });
// Write the line byte-for-byte, no trailing newline, so the file
// holds exactly the 82 characters the gate counts.
writeFileSync("/output/entry.txt", line, "utf8");
