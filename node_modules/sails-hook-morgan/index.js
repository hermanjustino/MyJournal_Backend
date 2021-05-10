const morgan = require('morgan');

module.exports = function (sails) {
  let hook;
  return {
    initialize: function(cb) {
      hook = this;
      return cb();
    },
    defaults: {
      __configKey__: {
        format: 'dev'
      }
    },
    routes: {
      before: {
        '*': function(req, res, next) {
          morgan(sails.config[hook.configKey].format)(req, res, next);
        }
      }
    }
  };
};
