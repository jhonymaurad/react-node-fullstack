var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'jhklsasfha' }, function(err, tunnel) {
  console.log('LT running');
});
