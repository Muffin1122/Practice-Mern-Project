const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: "../config/config.env" });

exports.generateToken = (id) => {

    return token = jwt.sign( {id: id}, process.env.JWT_SKEY, { expiresIn: '1d' } );
 
 
 }