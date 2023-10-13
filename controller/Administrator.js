const administratorModel = require("../models/Administrator");

const login = async (req, res) => {
    try {
        const ret = await administratorModel.login(req, res);
        return res.status(200).json(ret);
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getAll = async (req, res) => {
    try {
        const ret = await administratorModel.getAll();
        return res.status(200).json(ret);
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    getAll,
    login
};