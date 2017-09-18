function options() {
  this.url = 'https://api.createsend.com/api/v3.1/clients',
  this.auth = {
  	'user' : 'fc96dc9ded698bbfbfb975409a864a42',
  	'pass' : 'x'
  }
};
options.prototype.showurl = function() {
  return this.url;
};

module.exports = options;