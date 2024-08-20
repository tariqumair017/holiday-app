const axios = require('axios');
const cache = require('./cache');
const { apiKey, baseUrl } = require('./config');


const fetchHolidays = async (req, res) => {
  const { country, year } = req.query;
  const cacheKey = `holidays-${country}-${year}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(`${baseUrl}/holidays`, {
      params: {
        api_key: apiKey,
        country,
        year,
      },
    });
    const holidays = response.data.response.holidays;
    cache.set(cacheKey, holidays);
    res.json(holidays);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch holidays' });
  }
};

const fetchCountries = async (req, res) => {
  const cacheKey = 'countries';
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(`${baseUrl}/countries`, {
      params: {
        api_key: apiKey,
      },
    });
    const countries = response.data.response.countries;
    cache.set(cacheKey, countries);
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};


module.exports = { fetchHolidays, fetchCountries };
