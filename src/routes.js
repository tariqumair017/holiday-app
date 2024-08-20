const express = require('express');
const { fetchHolidays, fetchCountries } = require('./controller');

const router = express.Router();

router.get('/holidays', fetchHolidays);
router.get('/countries', fetchCountries);


module.exports = router;
