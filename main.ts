// make.fun entry: "Invent a Word We Need"
// Writes one invented word and its definition in a single line
// (at most 140 characters) to <output>/entry.txt.
// Node 22 standard library only, no network, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "scrollhaze (n.) — the mental fog after an hour of scrolling, when you can't remember a single thing you just saw.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.trim() === "") {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
