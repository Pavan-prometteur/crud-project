const handleDuplicateFieldsDB = (err) => {
  const value = err.keyValue.email;
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return {
    status: 'fail',
    message,
    data: {},
  };
};

const sendError = (err, res) => {
  if (err.code === 11000) {
    // Handle duplicate key error
    const formattedError = handleDuplicateFieldsDB(err);
    return res.status(400).json(formattedError);
  }

  // Default error response
  res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    message: err.message || 'Something went wrong!',
    data: {},
  });
};

module.exports = (err, req, res, next) => {
  sendError(err, res);
};
