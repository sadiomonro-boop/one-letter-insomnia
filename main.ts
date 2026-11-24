// One Letter for Your Day — entry program.
//
// Writes exactly one letter to /output/entry.txt: the letter I,
// standing for "insomnia" — awake at 3 a.m., ceiling-staring, the
// whole day wrecked by a night that never ended. One byte only,
// no trailing newline, so the file is exactly one character.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "I";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");

// Self-check: the gate demands exactly one character, so refuse to
// finish silently if the file is anything else.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== LETTER) {
  throw new Error(
    `expected exactly ${JSON.stringify(LETTER)} in ${OUTPUT_PATH}, got ${JSON.stringify(written)}`,
  );
}
