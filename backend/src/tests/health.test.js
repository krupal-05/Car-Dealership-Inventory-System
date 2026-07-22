import request from 'supertest';
import app from '../app.js';

describe('GET /api/health', () => {
  it('should return status 200 and health status message', async () => {
    const response = await request(app).get('/api/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 'UP',
      message: 'Car Dealership Inventory API is running healthy',
    });
  });
});
