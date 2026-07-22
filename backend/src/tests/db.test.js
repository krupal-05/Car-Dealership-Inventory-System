import { jest } from '@jest/globals';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';

describe('Database Connection Config', () => {
  it('should call mongoose.connect with configured MONGODB_URI', async () => {
    const connectSpy = jest.spyOn(mongoose, 'connect').mockResolvedValueOnce({
      connection: { host: '127.0.0.1' }
    });

    await connectDB();

    expect(connectSpy).toHaveBeenCalledWith(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/car_dealership_db'
    );

    connectSpy.mockRestore();
  });
});
