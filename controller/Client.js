const clientModel = require('../models/Client');

const getAll = async (req, res) => {
    try {
        const ret = await clientModel.getAll();
        return res.status(200).json(ret);
    } catch (error) {
        console.log(error);
        return false;
    }
};

const postClient = async (req, res) => {
    try {
        const ret = await clientModel.postClient(req);
        return res.status(200).json(ret);
    } catch (error) {
        console.log(error);
        return false;
    }
};

const putClient = async (req, res) => {
    try {
        const ret = await clientModel.putClient(req);
        return res.status(200).json(ret);
    } catch (error) {
        console.log(error);
        return false;
    }
};

const deleteClient = async (req, res) => {
    try {
        const ret = await clientModel.deleteClient(req);
        return res.status(200).json(ret);
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    getAll,
    postClient,
    putClient,
    deleteClient
};