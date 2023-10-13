const express = require("express");
const router = express.Router();

const Administrator = require("../controller/Administrator");
const Client = require("../controller/Client");
const { verifyJWT } = require("../auth/authentication");

router.get('/api/administrator', verifyJWT, Administrator.getAll);
router.post('/api/login', Administrator.login);

router.get('/api/client', Client.getAll);
router.post('/api/client', verifyJWT, Client.postClient);
router.put('/api/client/:id', verifyJWT, Client.putClient);
router.delete('/api/client/:id', verifyJWT, Client.deleteClient);

module.exports = router;