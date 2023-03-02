const validate = (propArray) => {
  return (req, res, next) => {
    console.log('req', req.body);
    //console.log('res', res);
    next();
  };
};

module.exports = { validate };
