/* eslint-disable no-underscore-dangle */
export default class Airport {
  /**
   * @param {string} name - name of airport
   * @param {string} code of airport
   *
   * Implement getters and setters
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
