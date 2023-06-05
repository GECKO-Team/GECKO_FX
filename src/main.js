import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

const cors = require('cors');
// Enable CORS for all routes
app.use(cors());

export default app
