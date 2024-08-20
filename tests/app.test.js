const request = require('supertest');
const app = require('../src/app');

describe('Holiday API', () => {
  it('should fetch holidays for a specific country and year', async () => {
    const res = await request(app).get('/api/holidays?country=PK&year=2024');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should fetch the list of supported countries', async () => {
    const res = await request(app).get('/api/countries');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
