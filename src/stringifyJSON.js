const printArray = function(obj) {
  let storage = _.map(obj, function(value) {
    return stringifyJSON(value);
  });
  return storage;
};

const printObj = function(obj) {
  let undefinedOrFunction;
  let storage = _.map(obj, function(value, key) {
    if (value === undefined || typeof value === 'function') {
      undefinedOrFunction = '';  
    } else {
      return stringifyJSON(key) + ':' + stringifyJSON(value);
    }
  });
  if (undefinedOrFunction !== undefined) {
    return undefinedOrFunction;
  }
  return storage;
};

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }  

  if (Array.isArray(obj)) {
    return '[' + printArray(obj) + ']';
  } 

  if (typeof obj === 'object' && obj !== null) {
    return '{' + printObj(obj) + '}';
  }

  if (true) {
    return String(obj);
  } 
};