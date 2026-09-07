import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is vanilla HTML/CSS/JS and stays that way. Everything in public/
// is copied to the output root untouched, so styles.css, script.js and img/
// keep the exact URLs they have always had. Vite is here for one reason:
// to bundle the small React island in src/ that renders the WebGL layers,
// which cannot run from a plain <script> tag.
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    // Nothing here should be preloaded: the whole point of the gate in
    // src/main.jsx is that most visitors never fetch React or three.js.
    modulePreload: false,
    // three.js is large. Split it out so the island's own code can change
    // without busting the cache on the heaviest chunk.
    // Vite 8 uses rolldown, so chunking is configured through advancedChunks.
    // three.js is by far the heaviest dependency and it almost never changes,
    // so it gets its own long lived chunk and the island's own code can be
    // republished without busting it.
    rolldownOptions: {
      output: {
        advancedChunks: {
          groups: [
            { name: 'three', test: /node_modules[\/](three|camera-controls|three-stdlib)[\/]/ },
            { name: 'react', test: /node_modules[\/](react|react-dom|scheduler)[\/]/ },
          ],
        },
      },
    },
  },
})
