import express from "express";
let  apiRouter = express.Router();

import {apiHello} from "../controller/apiController";

apiRouter.get('/hello', apiHello);

export default apiRouter