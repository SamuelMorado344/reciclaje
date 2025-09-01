
const { response, request } = require('express');
const mysql_pro = require('mysql2/promise');
const { dbConfig } = require('../database/config');




const orden_dialGET = async (req = request, res = response) => {
    let conMysql;

    try {
        conMysql = await mysql_pro.createConnection(dbConfig);
        conMysql.connect();
        await conMysql.query({ sql: `SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED; `, timeout: 5000 });
        await conMysql.query({ sql: `select now()`, timeout: 8000 });
        return res.status(200).json({
            status: true
        });
    } catch (err) {
        console.log('orden_dialGET : ' + err.toString());
        return res.status(403).json({
            status: false,msg : err.toString()
        });
    } finally {
        if (conMysql) {
            await conMysql.end();
        }
    }
}


const pruebaGet = async (req = request, res = response) => {
  

    try {
 
        return res.status(200).json({
            status: true, msg : "todo correcto..."
        });
    } catch (err) {
        console.log('pruebaGet : ' + err.toString());
        return res.status(403).json({
            status: false
        });
    } 
}



module.exports = {
    orden_dialGET,
    pruebaGet
}


