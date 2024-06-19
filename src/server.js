import Hapi from '@hapi/hapi';
import routes from './routes';
import * as admin from 'firebase-admin';
import { db } from './database';
import  credentials  from '../credentials.json';
admin.initializeApp({
    credential: admin.credential.cert(credentials),
    // databaseURL: 'https://lecture-attendance-management.firebaseio.com'
});
let server;
const start = async () => {
     server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    routes.forEach(route =>server.route(route));

    db.connect();
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
}

process.on('uncaughtException', err => {
    console.error(err);
    process.exit(1);
});
process.on('SIGINT',async ()=>{
    console.log('Stopping server');
    await server.stop({timeout:10000});
    db.end();
    console.log('Server stopped');
    process.exit(0);
})
start();



