const loaderUtils = require('loader-utils');

module.exports = function simpleFunctionalLoader(...args) {
  const { processor } = loaderUtils.getOptions(this);
  return processor.call(this, ...args);
};

module.exports.createLoader = function createLoader(processor) {
  if (
    typeof processor !== 'function' ||
    Function.prototype.toString.call(processor).indexOf('function')
  ) {
    throw new Error('create-loader: parameter passed to "createLoader" must be an ES5 function.');
  }

  const result = {
    loader: __filename,
    options: { processor },
    ident: 'create-loader' + '-' + Math.random(),
  };

  return result;
};
