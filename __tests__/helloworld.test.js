const helloWorld = require(../controllers/helloWorld);

it('returns a Hello World Object', () {

});



/* const helloWorld = require('../controllers/helloWorld'); 
var httpMocks = require('node-mocks-http');

it('returns a Hello World object', () => {
});

const request = httpMocks.createRequest({
  method: 'GET',
  url: '/'});

const response = httpMocks.createResponse();

helloWorld(request, response);

expect(response._getData().message).toBe('Hello World!'); /