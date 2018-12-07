import * as config from '../config';

import {OAuth2Client} from 'google-auth-library';

export const verifyGmail = async function (req) {
  const ticket = await new OAuth2Client(config.GMAIL_CLIENTID).verifyIdToken({
      idToken: req.body.IDToken,
      audience: config.GMAIL_CLIENTID,  
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  const domain = payload['hd']; // If request specified a G Suite domain:
  console.log('payload : ',payload);
  console.log('userid : ',userid);
  console.log('domain : ',domain);
}

import jwt from 'jsonwebtoken'; 

export const verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (!token) 
      return res.status(403).json({auth:false, err: config.ERROR403});

  jwt.verify(token, config.SECRET, (err, decoded) => {      
    if (err) 
      return res.status(401).json({auth:false, err: config.ERROR401});    
      req.decoded = decoded;   
      next();
  });
}    

export const hashPassword = (input) => {
  return bcrypt.hashSync(input,8);
}

export const comparePassword = (curr, pass) => {
  console.log();
}