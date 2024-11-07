import { Request, Response } from "express";
import Env from "../config/config";

const env = new Env();

/**
 * @author Fernand
 * Controller to get basic authorization token
 * 
 * @param {Object} req (required) The request
 * @param {Object} res (required) The response object
 * 
 * @returns {JSON} the response 
 * 
 * @copyright SONABEL (c) 2024
 */
export const getBasicInformation = (req: Request, res: Response): void => {
  res.send({
    status: 200,
    title: 'Basic Authorization credentials',
    content: {
      username: env.username,
      password: env.password
    }
  });
};


/**
 * @author Fernand
 * Controller to get status of server
 * 
 * @param {Object} req (required) The request
 * @param {Object} res (required) The response object
 * 
 * @returns {JSON} the response 
 * 
 * @copyright SONABEL (c) 2024
 */
export const getStatic = (req: Request, res: Response): void => {
  res.send({
    status: 200,
    title: 'Server is up and running',
    content: {
      username: 'e-service',
      password: "You can't have a password"
    }
  });
};
