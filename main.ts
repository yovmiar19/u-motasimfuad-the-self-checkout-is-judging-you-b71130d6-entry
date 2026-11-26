// The Self-Checkout Is Judging You — one-liner entry.
//
// The machine scans the basket, finds nothing but yoghurt, and
// delivers its verdict in the driest voice it owns. One line only:
// the observation, then the judgement, separated by a single space.
import { mkdirSync, writeFileSync } from "node:fs";

const basketScan = "Twelve yoghurts and nothing else.";
const machineVerdict = "Unexpected item in bagging area: a cry for help.";

const line = [basketScan, machineVerdict].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
