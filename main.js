import 'reveal.js/dist/reset.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

// highlight
import 'reveal.js/plugin/highlight/monokai.css'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight'

import Reveal from 'reveal.js'

const app = new Reveal({
  hash: true,
  plugins: [RevealHighlight],
})

app.initialize()
