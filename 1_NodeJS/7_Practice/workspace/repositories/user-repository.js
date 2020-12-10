'use strict';

const models = require('../models');

/**
 * User Repository
 */
class UserRepository {
  /**
   * Constructor
   */
  constructor() {}

  /**
   * Create a user
   * @param {object} user
   */
  async create(user) {
    try {
      const result = await models.user.create(user);
      return { email: result.email };
    } catch (error) {
      console.error(error.message || JSON.stringify(error));
      throw error;
    }
  }

  /**
   * Find a user
   * @param {string} email
   */
  async findOne(email) {
    try {
      const result = await models.user.findOne({
        where: {
          email: email,
        }
      });
      return { data: result };
    } catch (error) {
      console.error(error.message || JSON.stringify(error));
      throw error;
    }
  }
}

module.exports = UserRepository;
