
import { useState } from "react";

const cards = [
  {
    title: "The Athlete",
    subtitle: "Basketball",
    emoji: "🏀",
    color: "#E5F2E5",
    accent: "#245638",
    description:
      "Basketball is one of my favorite ways to stay active, compete, and have fun. I love the fast-paced nature of the game and the teamwork that comes with it.",
  },
  {
    title: "The Problem Solver",
    subtitle: "Rubik's Cubes",
    emoji: "🧩",
    color: "#FCE8D9",
    accent: "#994C28",
    description:
      "I've always enjoyed solving Rubik's Cubes. I love the challenge of recognizing patterns, improving my speed, and finding creative solutions to problems.",
  },
  {
    title: "The Music Enthusiast",
    subtitle: "Frank Ocean, Travis Scott & Drake",
    emoji: "🎵",
    color: "#EEE4FA",
    accent: "#67418C",
    description:
      "Music is a big part of my everyday life. Some of my favorite artists are Frank Ocean, Travis Scott, and Drake. I love exploring different sounds, discovering new songs, and finding the perfect playlist for any mood.",
  },
  {
    title: "The Tech Enthusiast",
    subtitle: "AI, ML & Data Science",
    emoji: "🤖",
    color: "#DFEAFB",
    accent: "#315D93",
    description:
      "I'm fascinated by artificial intelligence, machine learning, and data science. I enjoy exploring how data can uncover patterns, power intelligent systems, and solve real-world problems.",
  },
];

export default function WordPalette() {
  const [flippedCards, setFlippedCards] = useState([]);

  function flipCard(index) {
    setFlippedCards((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  }

  return (
    <section className="about-section" aria-labelledby="about-title">
      <h2 id="about-title">Get to Know Me!</h2>

      <p className="about-intro">
        There are many different sides to who I am!
        Flip through these cards to learn about
        my interests, passions, and personality.
      </p>

      <div className="card-grid">
        {cards.map((card, index) => {
          const isFlipped = flippedCards.includes(index);

          return (
            <button
              key={card.title}
              type="button"
              className={`interest-card ${isFlipped ? "flipped" : ""}`}
              onClick={() => flipCard(index)}
              aria-pressed={isFlipped}
              aria-label={`${card.title}. ${
                isFlipped ? "Flip back" : "Flip to learn more"
              }`}
            >
              <div className="card-inner">
                <div
                  className="card-front"
                  style={{
                    backgroundColor: card.color,
                    color: card.accent,
                  }}
                >
                  <span className="card-emoji">{card.emoji}</span>
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                  <span className="flip-hint">
                    Click to discover →
                  </span>
                </div>

                <div
                  className="card-back"
                  style={{
                    backgroundColor: card.accent,
                    color: "#ffffff",
                  }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="flip-hint">
                    Click to flip back ↩
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
