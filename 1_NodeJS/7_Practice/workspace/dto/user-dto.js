'use strict';

const BaseDto = require('./base-dto');

/**
 * User Dto
 */
class UserDto extends BaseDto{
  /**
   * Constructor
   */
  constructor() {
    super();
  }

  set email(val) {
    this._email = val;
  }

  get email() {
    return this._email;
  }

  set employeeNo(val) {
    this._employeeNo = val;
  }

  get employeeNo() {
    return this._employeeNo;
  }

  set age(val) {
    this._age = val;
  }

  get age() {
    return this._age;
  }

  set languagePreference(val) {
    this._languagePreference = val;
  }

  get languagePreference() {
    return this._languagePreference;
  }
}

module.exports = UserDto;
