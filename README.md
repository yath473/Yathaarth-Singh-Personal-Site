# Yathaarth Singh: Personal Website

A personal portfolio website built using **React, JavaScript, HTML, and CSS**, designed to showcase my background, experiences, interests, and personality through an interactive and visually engaging interface.

The website features an **interactive "Get to Know Me" card section**, where visitors can flip cards to discover different sides of my personality, including basketball, Rubik's Cubes, music, and my interests in artificial intelligence, machine learning, and data science.

**Live site:** https://yath473.github.io/Yathaarth-Singh-s-Personal-Site/

## Features

- **Personal Introduction:** An overview of my background, education, and interests.
- **Interactive Flip Cards:** Four clickable cards that rotate to reveal more information about my hobbies and passions.
- **Personalized Design:** Custom colors, typography, layouts, and animations that reflect my personality.
- **Responsive Layout:** The website adjusts to different screen sizes, displaying cards in a grid on desktop and a single column on mobile.
- **Dark Mode Support:** The website automatically adapts to the user's preferred light or dark theme.
- **Accessibility:** Semantic HTML, keyboard-accessible buttons, and support for reduced-motion preferences.

## Interactive Card Feature

One of the main interactive elements of my website is the "Get to Know Me" section, which replaced the original Word Palette generator.

Each card represents a different aspect of who I am:

- **The Athlete:** My interest in basketball, competition, and teamwork.
- **The Problem Solver:** My enjoyment of Rubik's Cubes, patterns, and creative problem-solving.
- **The Music Enthusiast:** My love for music, especially artists such as Frank Ocean, Travis Scott, and Drake.
- **The Tech Enthusiast:** My interests in AI, machine learning, and data science.

Visitors can click on any card to flip it and reveal a description. Clicking again returns the card to its original side. This interaction uses React state management and CSS 3D transforms.

## Technologies Used

- **React:** Component-based interface and interactive state management.
- **JavaScript:** Website functionality and interaction logic.
- **HTML/CSS:** Website structure, styling, and animations.
- **Vite:** Local development and production builds.
- **Git & GitHub:** Version control and repository management.
- **GitHub Actions:** Automated testing, build verification, and deployment.
- **GitHub Pages:** Website hosting.

## Setup

Requires Node.js 20 or later.

Clone the repository and install dependencies:

```bash
git clone https://github.com/yath473/Yathaarth-Singh-s-Personal-Site.git
cd Yathaarth-Singh-s-Personal-Site
npm install
npm run dev
```

Open the local URL displayed in the terminal to view the website.

## Tests

Run the test suite using:

```bash
npm test
```

The project uses Vitest and React Testing Library for automated testing.

The original tests focused on the Word Palette feature, including deterministic color generation, edge cases, and user input handling. Since the interactive feature was redesigned around flip cards, the test suite needs to be updated to reflect the final functionality.

Relevant tests for the updated website include verifying that:

- The four interest cards render correctly.
- Clicking a card reveals its corresponding description.
- Clicking a flipped card returns it to the front.
- Cards can be interacted with independently.
- Personal content and other website components render correctly.

## Build

Generate a production-ready build using:

```bash
npm run build
```

The build output is generated in the `dist/` directory.

## CI and Deployment

The repository uses GitHub Actions to automate testing, building, and deployment.

- `.github/workflows/ci.yml` runs dependency installation, automated tests, and the production build on pull requests to `main`.
- `.github/workflows/deploy.yml` runs on pushes to `main` and deploys the production build to GitHub Pages after the configured checks succeed.

### Repository Settings

1. Navigate to **Settings → Pages** and select GitHub Actions as the deployment source.
2. Configure branch protection for `main` to require pull requests and successful CI checks.
3. Verify that deployment completes successfully before checking the live website.

### Capturing Evidence

1. Create a branch containing an intentionally failing test.
2. Open a pull request and capture evidence of the failed CI check.
3. Fix the test and capture the successful check.
4. Merge the pull request and verify the deployment.
5. Record screenshots and relevant links in `docs/EVIDENCE.md`.

## AI Use

I used AI tools, primarily Claude, to assist with much of the website's initial structure, React implementation, code generation, and debugging. AI was especially helpful in organizing components, troubleshooting errors, and understanding how to implement certain features.

However, I took significant creative liberties throughout the development process. I customized the website's design, layout, color schemes, written content, and interactive elements to better reflect my personality and interests. One of the biggest changes I made was replacing the original Word Palette feature with an interactive card-based experience that allows visitors to learn more about me.

I reviewed and modified AI-generated code, worked through styling and functionality issues, and made independent decisions about how the final website should look and feel. AI served as a development tool, while the creative direction and personalization were guided by my own vision.

## Limitations

- **Browser Compatibility:** The 3D flip animations rely on CSS transforms, which may behave differently across browsers.
- **Mobile Experience:** The layout is responsive, but appearance and spacing may vary across devices.
- **Reduced Motion:** Motion accessibility preferences are supported, although the presentation may differ from the standard animated experience.
- **Testing:** The original automated tests were designed for the Word Palette feature and need to be updated to fully cover the new interactive cards.
- **Static Content:** Personal information, interests, and experiences must be updated manually in the source code.
- **Deployment:** Changes must be committed and successfully deployed before appearing on the live website.

## Future Improvements

Potential improvements include adding more interactive cards, incorporating additional projects and experiences, improving animations, expanding mobile customization, and strengthening automated testing for the redesigned features.

## Project Reflection

This project helped me gain experience working with React, JavaScript, CSS, responsive design, GitHub, and AI-assisted development. Beyond learning how to structure and troubleshoot a website, I enjoyed having the creative freedom to build something that reflects who I am.

The final website is more than a traditional portfolio. It combines personal information with interactive design to give visitors a more engaging way to learn about my interests, personality, and technical passions.
