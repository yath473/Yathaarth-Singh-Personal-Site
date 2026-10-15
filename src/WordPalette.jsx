import { useEffect, useState } from "react";
import { makePalette } from "./palette.js";

export default function WordPalette() {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState("");
  const { word, colors } = makePalette(value);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", colors[0]);
  }, [colors]);

  async function copy(color) {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(color);
    } catch {
      setCopied("");
    }
  }

  return (
    <section aria-labelledby="play">
      <h2 id="play">Type a word, get its colours</h2>
      <label htmlFor="word">Any word or phrase</label>
      <input id="word" value={value} maxLength={50} autoComplete="off"
        placeholder="ocean, Tuesday, 🌵…" onChange={(e) => setValue(e.target.value)} />
      <div className="swatches" role="group" aria-label="Generated palette">
        {colors.map((c) => (
          <button key={c} type="button" className="swatch" style={{ background: c }}
            aria-label={`Copy ${c}`} onClick={() => copy(c)}>
            {c.replace(/hsl\((\d+), (\d+)%, (\d+)%\)/, "$1° $2 $3")}
          </button>
        ))}
      </div>
      <p id="caption" aria-live="polite">
        {copied ? `Copied ${copied}` : `Palette for “${word}”`}
      </p>
    </section>
  );
}
