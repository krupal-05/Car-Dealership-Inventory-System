import mongoose from 'mongoose';
import * as dbHandler from './setup/dbHandler.js';
import User from '../models/user.model.js';

describe('User Model Test Suite', () => {
  beforeAll(async () => {
    await dbHandler.connect();
  }, 60000);

  afterEach(async () => {
    await dbHandler.clearDatabase();
  });

  afterAll(async () => {
    await dbHandler.closeDatabase();
  });

  it('should create a valid user', async () => {
    const validUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    };

    const user = new User(validUserData);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(validUserData.name);
    expect(savedUser.email).toBe(validUserData.email);
    expect(savedUser.role).toBe('customer');
  });

  it('should require name', async () => {
    const userWithoutName = new User({
      email: 'noname@example.com',
      password: 'password123',
    });

    let err;
    try {
      await userWithoutName.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.name).toBeDefined();
  });

  it('should require email', async () => {
    const userWithoutEmail = new User({
      name: 'Jane Doe',
      password: 'password123',
    });

    let err;
    try {
      await userWithoutEmail.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  it('should require password', async () => {
    const userWithoutPassword = new User({
      name: 'Jane Doe',
      email: 'nopassword@example.com',
    });

    let err;
    try {
      await userWithoutPassword.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.password).toBeDefined();
  });

  it('should not allow duplicate email', async () => {
    const userData = {
      name: 'User One',
      email: 'duplicate@example.com',
      password: 'password123',
    };

    await new User(userData).save();

    // Create indexes so Mongoose enforces unique constraint in MongoDB
    await User.init();

    const duplicateUser = new User({
      name: 'User Two',
      email: 'duplicate@example.com',
      password: 'password456',
    });

    let err;
    try {
      await duplicateUser.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err.code).toBe(11000); // MongoDB duplicate key error code
  });

  it('should default role to customer', async () => {
    const user = new User({
      name: 'Default Role User',
      email: 'defaultrole@example.com',
      password: 'password123',
    });

    const savedUser = await user.save();
    expect(savedUser.role).toBe('customer');
  });
});
