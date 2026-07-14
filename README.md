# 🎵 Music Guru

A web platform for learning the basics of music theory and practice — built with SvelteKit and Tailwind CSS.

**Live app:** [music-guru.vercel.app](https://music-guru.vercel.app)

## About

Music Guru helps beginners work through music theory concepts through structured lessons and interactive quizzes/tests, with a modern, clean UI (indigo/orange accents, dark mode support).

## Tech Stack

- **[SvelteKit](https://kit.svelte.dev/)** — application framework
- **[Tailwind CSS](https://tailwindcss.com/)** — styling
- **[Vite](https://vitejs.dev/)** — build tooling
- **ESLint / Prettier** — linting and formatting
- Deployed on **[Vercel](https://vercel.com/)**

## Features

- 📚 Music theory lessons covering core concepts
- 📝 Interactive quizzes and tests to check understanding

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (or pnpm/yarn)

### Installation

```bash
git clone https://github.com/m10ev/Music-Guru.git
cd Music-Guru
npm install
```

### Development

Start a local dev server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Music-Guru/
├── src/          # Application source (routes, components, logic)
├── static/       # Static assets
├── tests/
├── tailwind.config.cjs
├── svelte.config.js
├── vite.config.js
└── package.json
```

## Deployment

The app is deployed on Vercel. To deploy your own instance, connect the repository to Vercel (or another SvelteKit-compatible host) — you may need to configure the appropriate [SvelteKit adapter](https://kit.svelte.dev/docs/adapters) for your target platform.

## License
 
This project is licensed under the [MIT License](LICENSE).

## Author

Built by [m10ev](https://github.com/m10ev) and [Sali-Ayvaz](https://github.com/Sali-Ayvaz).
