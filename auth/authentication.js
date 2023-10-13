require("dotenv").config();
const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(401).json({ auth: false, message: "Token not provided." });
    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
        if (err) return res.status(500).json({ auth: false, message: "Failed to authenticate token." });

        req.userId = decoded.id;
        next();
    });
}

function signToken(userId, expirationTime) {
    const token = jwt.sign({ userId: userId }, process.env.SECRETKEY, { expiresIn: expirationTime });

    return { auth: true, token: token };
}

module.exports = {
    verifyJWT,
    signToken
}