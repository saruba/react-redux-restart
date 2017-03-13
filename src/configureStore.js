if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.production');
} else {
  module.exports = require('./configureStore.production');
  // module.exports = require('./configureStore.development');
}
