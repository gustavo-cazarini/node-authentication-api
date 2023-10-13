const { signToken } = require("../auth/authentication");
const { Administrator } = require("../class/Administrator");

const login = async (req, res) => {
    const { login, password } = req.body;
    let admin = Administrator.loginMethod(login, password);

    if (!admin) {
        return { message: "Something is missing" };
    }

    const adminResult = await admin.getAdmin(["id", "name", "login"]);
    if (adminResult.rowCount === 0)
        return { message: "Invalid login" };
    const adminRows = adminResult.rows;
    return signToken(adminRows[0].id, 500);
}

const getAll = async () => {
    let admin = new Administrator();
    const databaseReturn = await admin.getAdmin();
    return databaseReturn.rows;
}

module.exports = {
    login,
    getAll
};