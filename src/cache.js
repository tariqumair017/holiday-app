const NodeCache = require('node-cache');
const { cacheTtl } = require('./config');


const cache = new NodeCache({ stdTTL: cacheTtl });

module.exports = cache;
