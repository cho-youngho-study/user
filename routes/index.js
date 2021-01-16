var express = require('express');
var router = express.Router();

import {home, register, login} from "../controller/indexController";

/* GET home page. */
router.get('/', home);
router.post('/register', register);
router.post('/login', login)

module.exports = router;
