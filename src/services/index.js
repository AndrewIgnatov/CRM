const users = require('./users/users.service.js');
const leads = require('./leads/leads.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(leads);
};
