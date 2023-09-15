import BadRequest from './BadRequest.js';
import Forbidden from './Forbidden.js';
import NotFound from './NotFound.js';
import Success from './SuccessResponse.js';
import InternalServer from "./InternalServer.js";

export const getResponseMessage = (success, message, value, data) => {
  // FOR 200, 201, success should be true
  // FOR 400, 404, anfd other error responses success should be false
  return { success, message, value, data };
};

export const HTTPError = {
  NotFound,
  BadRequest,
  Forbidden,
  InternalServer
};

export const Response = { Success };
