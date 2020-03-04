'use strict'
require('dotenv/config');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_LOCALHOST,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.on('conected', () =>
  console.log('Conectado!!!')
);

mongoose.connection.on('disconected', () =>
  console.log('Desconectado!!!')
);
process.on('SIGINT', () =>
  mongoose.Connection.close(() => {
    console.log('Mongoose! Desconectado pelo término da aplicação')
    process.exit(0) // 0 = saida de erros
  }))

mongoose.Promise = global.Promise;
module.exports = mongoose;