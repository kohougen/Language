'use strict';

/**
 * Base Dto
 */
class BaseDto {
    /**
     * Constructor
     */
  constructor() {}

  set isDeleted(val) {
    this._isDeleted = val;
  }

  get isDeleted() {
    return this._isDeleted;
  }    

  set createdAt(val) {
    this._createdAt = val;
  }

  get createdAt() {
    return this._createdAt;
  }

  set updatedAt(val) {
    this._updatedAt = val;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  /**
   * Convert object to JSON
   */
  toJSON() {
    const jsonObj = Object.assign({});
    const proto = Object.getPrototypeOf(this);
    for (const key of Object.getOwnPropertyNames(proto)) {
      const desc = Object.getOwnPropertyDescriptor(proto, key);
      const hasGetter = desc && typeof desc.get === 'function';
      if (hasGetter && (key.charAt(0) != '_')) {
        jsonObj[key] = this[key];
      }
    }
    return jsonObj;
  }  
}

module.exports = BaseDto;