const leads = require('./leads/leads.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  app.configure(leads);
  app.configure(users);
};
