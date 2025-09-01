const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const format = require('date-fns/format');


class Server
{
    constructor()
    {
        this.app = express();
      
        this.app.use(express.json({ limit: '560mb' }));
        this.app.use(express.urlencoded({ limit: '560mb', extended: true }));

        this.app.use(bodyParser.json({ limit: '560mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '560mb', extended: true }));

       
        this.dialRoutePath='/api/dial';
       
       
        //middlewwares
        this.middleswares();

        //ruta de mi aplicacion
        this.routes();
    }

    middleswares(){
        //cors
        this.app.use(cors());

        //lectura y parseo el body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
       
        this.app.use(this.dialRoutePath,require('../routes/dial'));
    
    }   


    listen(){
    
     
  
        this.app.listen(process.env.PORT,()=>{
            console.log(`port: ${process.env.PORT} `);
          })

       
    } 

  
}

module.exports = Server;