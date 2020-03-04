const mongoose = require('Mongoose');

const providerSchema = mongoose.Schema({
    razao_social: {
        type: String,
        required: true
    },
    nome_fantasia: {
        type: String
    },
    cnpj: {
        type: String,
        required: true
    },
    escricao_estadual: {
        type: String
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.export = mongoose.model('Provider', providerSchema, 'providers');
