'use strict';

const path = require('path');

const tz = class {
  constructor(time, timezone) {
    this._z = {
          name: timezone
        };
    }
}

const moment_timezone = class {
    static tz(time, timezone) {
      return new tz(time, timezone)
    }
  };


module.exports = moment_timezone;