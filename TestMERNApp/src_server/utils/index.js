//Gmail
import {OAuth2Client} from 'google-auth-library';
export const verifyGmail = async function (request) {
  const ticket = await new OAuth2Client(config.Gmail_ClientID).verifyIdToken({
      idToken: request.IDToken,
      audience: config.Gmail_Client,  
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  //const domain = payload['hd']; // If request specified a G Suite domain:
  console.log('payload : ',payload);
  console.log('userid : ',userid);
}


import jwt from 'jsonwebtoken'; 
import * as config from '../config/index.js';

export const verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (!token) 
      return res.status(403).json({auth:false, message:'No Token Provided.'});

  jwt.verify(token, config.SECRET, (err, decoded) => {      
    if (err) 
      return res.status(500).json({auth:false, message:'Failed to Authenticate Token.'});    
      //req.decoded = decoded;   
      //req.userId = decoded.id;
      next();
  });
}    

export const hashPassword =(input) => {
  return bcrypt.hashSync(input,8);
}

export const comparePassword = (curr, pass) => {
  console.log();
}
/*

*/