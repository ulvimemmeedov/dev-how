const jwt = require("jsonwebtoken");
const JWT_SECRET = require('../helpers/authHelpers');
const asyncHandler = require('express-async-handler');

module.exports = userAuth = asyncHandler( async function(req, res, next) {
  const {token} = req.query;
  if (!token) {
    return res.status(200).json({
        error:{message:'Giriş edin!'}
      });

  }
  if (token.length < 1) {
    return res.status(200).json({
      error:{message:'Giriş edin!'}
    });

  }
    const decoded = await jwt.verify(token,JWT_SECRET);
    req.token = token
    req.user = decoded.user;
    next();

});
