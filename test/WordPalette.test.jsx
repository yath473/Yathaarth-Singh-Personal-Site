import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App.jsx";

const caption = () => document.getElementById("caption").textContent;
const type = (v) => fireEvent.change(screen.getByLabelText(/any word/i), { target: { value: v } });

// Normal use
test("typing a word updates the palette caption and shows five swatches", () => {
  render(<App />);
  type("ocean");
  expect(caption()).toContain("ocean");
  expect(screen.getAllByRole("button", { name: /^Copy hsl/ })).toHaveLength(5);
});

// Edge case
test("whitespace-only input falls back to the default word", () => {
  render(<App />);
  type("   ");
  expect(caption()).toContain("hello");
  expect(screen.getAllByRole("button", { name: /^Copy hsl/ })).toHaveLength(5);
});

test("page shows the owner's name and GitHub link", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Yathaarth Singh");
  expect(screen.getByRole("link", { name: "GitHub" }).getAttribute("href")).toBe("https://github.com/yath473");
});
