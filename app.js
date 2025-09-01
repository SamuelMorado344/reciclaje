process.on('unhandledRejection', (reason, promise) => {
    console.log('process ---> Promesa no manejada:', reason);
  });
  
  process.on('uncaughtException', (err) => {
    console.log('process ---> Excepción no capturada:', err);
  });
  
require('dotenv').config();
const Server=require('./models/server');

const server=new Server();

server.listen();