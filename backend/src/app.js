import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import { logger } from './loggers/logger.js';
import userRouter from '../src/routes/user.routes.js';
import postRouter from '../src/routes/post.routes.js';
import commentRouter from '../src/routes/comment.routes.js';
import feedRouter from '../src/routes/feed.routes.js';
import { globalErrorHandler } from './middlewares/globalError.middleware.js';

export const app = express();

const morganFormat = ':method :url :status :response-time ms';

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/feeds', feedRouter);

app.use(globalErrorHandler);
