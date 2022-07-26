const sendResponse = (res, statusCode, data) => {
  const message = {
    statusCode,
    status: statusCode >= 200 && statusCode < 300 ? 'success' : 'error',
    data,
  };

  if (statusCode === 500) console.error(`${statusCode} ${JSON.stringify(data)}`);
  if (statusCode !== 500) console.debug(`${statusCode} ${JSON.stringify(data)}`);

  return res.status(statusCode).json(message);
};

module.exports = sendResponse;