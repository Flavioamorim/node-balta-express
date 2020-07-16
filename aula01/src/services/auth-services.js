const jwt = require('jsonwebtoken')

exports.generateToken = async (data) => {
  return jwt.sign(data, global.SALTKEY, {expiresIn: '1d'})
}

exports.decodeToken = async (token) => {
  return await jwt.verify(token, global.SALTKEY)
}

exports.authorize = (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.status(401).json({message: 'Acesso restrito'})
  }

  jwt.verify(token, global.SALTKEY, function (error, decoded) {
    if (error) {
      res.status(401).json({
        message: 'Token invalido'
      })
    }
    next();
  })
}

exports.isAdmin = (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.status(401).json({message: 'Token obrigatorio'})
  }

  jwt.verify(token, global.SALTKEY, function (error, decoded) {
    if (error) {
      res.status(401).json({
        message: 'Token invalido'
      })
    }
    if (!decoded.roles.includes('admin')) {
      res.status(401).json({
        message: 'Necessário permissão de admin'
      })
    }
    next();
  })
}
