const express = require("express");
const router = express.Router();

const Administrator = require("../controller/Administrator");
const Client = require("../controller/Client");
const { verifyJWT } = require("../auth/authentication");

router.get('/api/administrator', verifyJWT, Administrator.getAll);
router.post('/api/login', Administrator.login);

router.get('/api/client', Client.getAll);
router.post('/api/client', Client.postClient);
router.put('/api/client/:id', Client.putClient);
router.delete('/api/client/:id', Client.deleteClient);

module.exports = router;