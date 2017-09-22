'use strict';

module.exports = (name) => {
  if(typeof name !== 'string') {return null;}

  else {
    return `Hello, ${name}`;
  }
};
