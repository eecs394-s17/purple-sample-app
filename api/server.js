const Hapi = require('hapi');
const server = new Hapi.Server();
const printers = require('./printer-data.js');
const corsHeaders = require('hapi-cors-headers');

server.connection({
  host: '0.0.0.0',
  port: +process.env.PORT,
});

server.route({
  method: 'GET',
  path: '/printers',
  handler: function(request, reply) {
    return reply(printers);
  }
});

server.route({
  method: 'GET',
  path: '/printers/active',
  handler: function(request, reply) {
    return reply(printers.filter(function(printer) {
      return printer.active;
    }));
  }
});

server.route({
  method: 'GET',
  path: '/printers/{id}',
  handler: function(request, reply) {
    return reply(printers.filter(function(printer) {
      return printer.id === parseInt(request.params.id);
    }));
  }
});

server.start(function(error) {
  if (error) throw error;
  console.log('API server is running at: ', server.info.uri);
});

server.ext('onPreResponse', addCorsHeaders);
