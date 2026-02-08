import express from 'express';
import cors from 'cors';
import {LIMIT} from './constants.js';
import cookieParser from 'cookie-parser';

const app=express();

app.use(
    cors(
        {
            origin: "*",
            credentials: true
        }
    )
);

app.use(
    express.json({limit: LIMIT})
);

app.use(
    express.urlencoded(
        {
            extends: true,
            limit: LIMIT
        }
    )
);

app.use(
    express.static('public')
)

app.use(
    cookieParser()
);

export default app; // we have to give export named default or else nodemon was showing error