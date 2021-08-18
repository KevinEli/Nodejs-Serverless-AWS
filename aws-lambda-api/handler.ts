/*'use strict';

module.exports.hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hello World, desde AWS utilizando serverless'
      }),
  };
  
  return callback(null, response);
};
*/
import { Handler, Context, Callback } from 'aws-lambda';

export const hello: Handler = (event: any, context: Context, callback: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hello World, desde AWS utilizando serverless'
      }),
  };
  
  return callback(null, response);
};