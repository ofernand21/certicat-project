import express from 'express';

import { getBasicInformation, getStatic } from '../controllers/statusController';
import { API } from '../config/app_const';

const statusRouter = express.Router();

/**
 * @author Fernand
 * Endpoints to get basic authorization token
 * 
 * @returns {JSON} the response 
 * 
 * @copyright SONABEL (c) 2024
 */
statusRouter.get(API + 'basic', getBasicInformation);


/**
 * @author Fernand
 * Endpoints to get status of server
 * 
 * @returns {JSON} the response 
 * 
 * @copyright SONABEL (c) 2024
 */
statusRouter.get(API + 'status', getStatic);


export default statusRouter;