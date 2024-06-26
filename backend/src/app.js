import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { logger } from './loggers/logger.js';

export const app = express();

const morganFormat = ':method :url :status :response-time ms';

// COMMON MIDDLEWARES
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(' ')[0],
          url: message.split(' ')[1],
          status: message.split(' ')[2],
          responseTime: message.split(' ')[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.use(express.json({ limit: '60kb' }));
app.use(bodyParser.json());
