'use strict';

/**
 * Response
 */
class Response {
  /**
   * 
   * @param {*} _payload 
   * @param {*} _metadata 
   * @param {*} _error 
   * @param {*} _errorMessage 
   */
  constructor(_payload, _metadata = undefined, _error = false, _errorMessage = undefined) {
    this.payload = _payload;
    this.metadata = _metadata;
    this.error = _error;
    this.errorMessage = _errorMessage;
  }
}

module.exports = Response;