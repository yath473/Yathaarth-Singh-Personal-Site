
import { useEffect, useState } from "react";
import { makePalette } from "./palette.js";

const interests = [
  {
    name: "Badminton",
    emoji: "🏸",
    description:
      "Badminton has been a huge part of my life. From playing competitively to enjoying games with friends, it has taught me teamwork, discipline, and perseverance.",
  },
  {
    name: "Rubik's Cubes",
    emoji: "🧩",
    description:
      "I love solving Rubik's Cubes! What started as a fun challenge became an interest in patterns, problem-solving, and finding creative solutions.",
  },
  {
    name: "Music",
    emoji: "🎵",
    description:
      "Music is one of my favorite ways to express creativity. I especially enjoy Indian music and making covers with my family.",
  },
  {
    name: "Engineering",
    emoji: "⚙️",
    description:
      "I enjoy exploring how things work, building projects, and using technology to solve real-world problems.",
  },
];

export default function WordPalette() {
  const [value, setValue] = useState("Badminton");
  const [copied, setCopied] = useState("");

  const { word, colors } = makePalette(value);

  const selectedInterest = interests.find(
    (interest) =>
      interest.name.toLowerCase() === value.trim().toLowerCase()
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", colors[0]);
  }, [colors[0]]);

  async function copy(color) {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(color);
    } catch {
      setCopied("");
    }
  }

  function chooseInterest(name) {
    setValue(name);
    setCopied("");
  }

  return (
    <section aria-labelledby="play">
      <h2 id="play">Get to Know Me Through Colors!</h2>

      <p>
        Every interest adds a different color to my life.
        Click on one of my interests below to discover
        its unique palette and learn a little more about me!
      </p>

      <div className="interest-buttons">
        {interests.map((interest) => (
          <button
            key={interest.name}
            type="button"
            className="interest-button"
            aria-pressed={selectedInterest?.name === interest.name}
            onClick={() => chooseInterest(interest.name)}
          >
            {interest.emoji} {interest.name}
          </button>
        ))}
      </div>

      <div className="interest-description" aria-live="polite">
        {selectedInterest ? (
          <>
            <h3>
              {selectedInterest.emoji} {selectedInterest.name}
            </h3>
            <p>{selectedInterest.description}</p>
          </>
        ) : (
          <p>
            Your word creates its own palette!
            Try one of my interests to learn more about me.
          </p>
        )}
      </div>

      <label htmlFor="word">
        Or type your own word to create a palette!
      </label>

      <input
        id="word"
        value={value}
        maxLength={50}
        autoComplete="off"
        placeholder="ocean, creativity, adventure..."
        onChange={(e) => {
          setValue(e.target.value);
          setCopied("");
        }}
      />

      <div
        className="swatches"
        role="group"
        aria-label="Generated palette"
      >
        {colors.map((c, index) => (
          <button
            key={`${c}-${index}`}
            type="button"
            className="swatch"
            style={{ background: c }}
            aria-label={`Copy ${c}`}
            onClick={() => copy(c)}
          >
            {c.replace(
              /hsl\((\d+), (\d+)%, (\d+)%\)/,
              "$1° $2 $3"
            )}
          </button>
        ))}
      </div>

      <p id="caption" aria-live="polite">
        {copied
          ? `Copied ${copied}!`
          : `Color palette inspired by "${word}"`}
      </p>
    </section>
  );
}
