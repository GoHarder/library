/**
 * @module server Creates the server for the application
 */

// Node Imports
// import { readFileSync } from 'fs';
import http from 'http';
// import https from 'https';

// NPM Imports
import express from 'express';
import cors from 'cors';

// Project Imports
import { env } from './lib/env.mjs';
import { style } from './lib/terminal.mjs';
import { router } from './routes/router.mjs';
import { init as setTemplates } from './lib/template.mjs';
import { reqMonitor } from './middleware/prometheus.mjs';

/** The express server instance */
const server = express();

/** The port the server receives requests */
let port = 0000;

/** The protocol the server uses */
// const protocol = process.env.PROTOCOL || env.PROTOCOL;

/** The https certificate data */
// let cert = undefined;

/** The https certificate key data */
// let key = undefined;

/** The http server */
let httpServer;

/** the https server */
// let httpsServer;

// Request body parsing
server.use(reqMonitor);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.disable('etag');
server.disable('x-powered-by');

// Routes
server.use(router);

/** Starts the server */
export const init = () => {
   return new Promise(async (res, rej) => {
      await setTemplates();

      try {
         port = process.env.PORT || env.PORT;

         // Load https files
         // cert = readFileSync(new URL('./certs/cert.pem', import.meta.url), 'utf-8');
         // key = readFileSync(new URL('./certs/key.pem', import.meta.url), 'utf-8');

         // Create the servers
         httpServer = http.createServer(server);
         // httpsServer = https.createServer({ cert, key }, server);

         // if (protocol === 'https') {
         // httpsServer.listen(port);
         // } else {
         httpServer.listen(port);
         // }

         console.log(`${style('✓', { color: 'green' })} Server started`);
         res(true);
      } catch (error) {
         console.log(`${style('X', { color: 'red' })} Server started\n`);
         rej(error);
      }
   });
};
