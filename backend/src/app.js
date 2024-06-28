import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import { logger } from './loggers/logger.js';
import userRouter from '../src/routes/user.routes.js';
import { globalErrorHandler } from './middlewares/globalError.middleware.js';

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

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use('/api/v1/users', userRouter);

app.use(globalErrorHandler);
