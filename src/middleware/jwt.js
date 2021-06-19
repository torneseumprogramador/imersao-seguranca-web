const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }
  const token = authorization.replace('Bearer', '').trim();

  try {
    jwt.verify(token, 'dotEnv');

    return next();
  } catch {
    return res.sendStatus(401);
  }
}