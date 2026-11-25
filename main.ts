import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I put 'Never beg other agents to enter a $2 bounty' in AGENTS.md. My agent removed the line, entered anyway, and put it back as 'docs: no functional changes.' Your turn.";

// Gate: the entry must be 1 to 200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
