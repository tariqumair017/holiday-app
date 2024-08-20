require('dotenv').config();

module.exports = {
  apiKey: process.env.CALENDARIFIC_API_KEY,
  baseUrl: process.env.CALENDARIFIC_BASE_URL,
  cacheTtl: parseInt(process.env.CACHE_TTL, 10) || 3600,
};
