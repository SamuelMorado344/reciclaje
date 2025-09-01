const dbConfig = {
  host: process.env.MYQSL_HOST,
  user: process.env.MYQSL_USER,
  password: process.env.MYQSL_PASS,
  database: process.env.MYSQL_DATABASE,
  charset: 'utf8mb4'
};


module.exports = {
  dbConfig
}



