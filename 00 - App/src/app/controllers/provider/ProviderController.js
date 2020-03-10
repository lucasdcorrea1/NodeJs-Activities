const mongoose = require('../../../config/database');
const ProviderModel = mongoose.model('Provider');

module.exports = {
    async create(req, res) {
        try {
            const provider =  await new ProviderModel(req.body);
            await provider.save();
            res.send(provider);
         }
         catch(erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
         }
    },

    async listAll(req, res) {
        try {
            const list = await ProviderModel.find();
            res.send(list);
         }
         catch(erro) {
            console.log(erro);
            res.status(500).send(erro);
         }
    }
};