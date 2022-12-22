/* eslint-disable no-underscore-dangle */
export default class Currency {
  /**
   * @param {string} code - currency code
   * @param {string} name - currency name
   *
   * Implement getters and setters for each
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
