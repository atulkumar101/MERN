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
import config from '../config/config.js'; 
export const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) 
    return res.status(403).send({auth:false, message:'No Token Provided.'});

  jwt.verify(token, config.SECRET, function(err, decoded) {      
    if (err) 
      return res.status(500).send({auth:false, message:'Failed to Authenticate Token.'});    
      
    req.userId = decoded.id;
    next();
  });
}



    

/*
const hashedPassword = bcrypt.hashSync(req.body.password,8);
function hash(input, salt) {
  var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
  return ["pbkdf2", "10000", salt, hashed.toString("hex")].join('$');
 }
 
 
 var salt = crypto.randomBytes(128).toString('hex');
 
 
 
 
 var salt = x.split('$')[2];
 
 req.session.auth =;
 */