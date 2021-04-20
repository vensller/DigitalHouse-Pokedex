function Logger(req, res, next) {
    const { query, method, params, body, url } = req;
    console.log(`${method} ${url} - Query: ${JSON.stringify(query)} - Params: ${JSON.stringify(params)} - Body: ${JSON.stringify(body)}`);
    next();
}

module.exports = Logger;