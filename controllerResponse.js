const ErrorClass = require("./ErrorClass");
exports.successRes = (message, data, token) => {
  return {
    message,
    data: data ? data : undefined,
    token: token ? token : undefined
    //length
  };
};

exports.catchAsync = (fn, errorCode) => {
  return (req, res, next) => {
    fn(req, res, next).catch(err => {
      return next(new ErrorClass(err, errorCode));
    });
  };
};
