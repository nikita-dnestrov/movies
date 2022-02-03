import * as http from 'http';

import { config } from './config/index.js';
import { app } from './app.js';

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Listen on ${config.PORT}`);
});
