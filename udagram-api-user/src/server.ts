import cors from 'cors';
import express from 'express';
import {sequelize} from './sequelize';

import {IndexRouter} from './controllers/v0/index.router';

import bodyParser from 'body-parser';
import {config} from './config/config';
import {V0_USER_MODELS} from './controllers/v0/model.index';


(async () => {
  await sequelize.addModels(V0_USER_MODELS);

  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());

  app.use(cors({
    origin: '*', // Accept requests from any origin
    methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['*'], // Allow any headers
  }));


  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );


  // Start the Server
  app.listen( port, () => {
    console.log( `server running http://localhost:${port}` );
    console.log( `press CTRL+C to stop server` );
  } );
})();