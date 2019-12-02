const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production ' });

app.prepare().then(() => {
  createServer(handler).listen(3000);
});
