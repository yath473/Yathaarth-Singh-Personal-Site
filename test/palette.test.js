import { test, expect } from "vitest";
import { makePalette, normalize, DEFAULT_WORD, MAX_LENGTH } from "../src/palette.js";

const HSL = /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/;

// Normal use
test("returns five valid HSL colours", () => {
  const { colors } = makePalette("ocean");
  expect(colors).toHaveLength(5);
  for (const c of colors) expect(c).toMatch(HSL);
});

test("is deterministic and case/space-insensitive", () => {
  expect(makePalette("Ocean  Blue")).toEqual(makePalette(" ocean blue "));
});

test("different words give different palettes", () => {
  expect(makePalette("ocean").colors).not.toEqual(makePalette("desert").colors);
});

// Edge cases
test("empty, whitespace-only and non-string input fall back to the default word", () => {
  for (const bad of ["", "   \n\t", null, undefined, 42]) {
    expect(makePalette(bad).word).toBe(DEFAULT_WORD);
    expect(makePalette(bad).colors).toHaveLength(5);
  }
});

test("very long and emoji input is capped without breaking characters", () => {
  expect(Array.from(normalize("x".repeat(500)))).toHaveLength(MAX_LENGTH);
  const emoji = normalize("🌵".repeat(80));
  expect(Array.from(emoji)).toHaveLength(MAX_LENGTH);
  expect(emoji).not.toMatch(/\uFFFD/);
});

