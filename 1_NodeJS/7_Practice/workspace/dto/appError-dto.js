'use strict';

/**
 * AppError
 */
class AppError {
  /**
   *
   * @param {*} _errorMessage
   */
  constructor(_errorMessage = undefined) {
    this.error = true;
    this.errorMessage = _errorMessage;
  }
}

module.exports = AppError;