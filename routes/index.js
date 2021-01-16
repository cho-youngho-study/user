var express = require('express');
var router = express.Router();

import {home, register} from "../controller/indexController";

/* GET home page. */
router.get('/', home);
router.post('/register', register)

module.exports = router;
