const { Client } = require("../class/Client");

const getAll = async () => {
    const client = new Client();
    const databaseReturn = await client.getClient();
    return databaseReturn.rows;
};

const postClient = async (req, res) => {
    const { name, phone } = req.body;
    const client = new Client(null, name, phone);
    const databaseReturn = await client.postClient();
    if (databaseReturn.rowCount === 0 || !databaseReturn)
        return { message: "Error: Client not created" };
    return { message: "Client created" };
};

const putClient = async (req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;

    const client = new Client(id, name, phone);
    const databaseReturn = await client.putClient();
    if (databaseReturn.rowCount === 0 || !databaseReturn)
        return { message: "Error: Client not updated" };
    return { message: "Client updated" };
};

const deleteClient = async (req, res) => {
    const { id } = req.params;

    const client = new Client(id);
    const databaseReturn = await client.deleteClient();
    if (databaseReturn.rowCount === 0 || !databaseReturn)
        return { message: "Error: Client not deleted" };
    return { message: "Client deleted" };
};

module.exports = {
    getAll,
    postClient,
    putClient,
    deleteClient
};