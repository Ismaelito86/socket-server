import Server from './classes/server';
import { SERVER_PORT } from './global/environment';
import { router } from './routes/router';
import bodyparser from 'body-parser';
import cors from 'cors';

const server = new Server();
//body-parser
server.app.use( bodyparser.urlencoded({ extended: true }) );
server.app.use( bodyparser.json() );

//CORS
server.app.use( cors({ origin: true, credentials: true }) );

server.app.use('/',router);

server.start( () => {
    console.log(`Servidor Corriendo en puerto: ${SERVER_PORT}`);
});