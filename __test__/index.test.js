const server = require('../server/index.js');
const request = require('supertest');

var testServer;
/////////// SERVER STUFF BELOW //////


// Test random get request is being properly received and responded to


// Test specific get request is being properly received and responded to

describe('Checking all get requests', () => {

  // Set up server to test
  beforeAll((done) => {
    testServer = server.listen(4444, () => {
      global.agent = request.agent(testServer);
      done();
    });
  });

  afterAll((done) => {
    return testServer && testServer.close(done);
  });


  test('random artist endpoint responds with a random artist name', async (done) => {
    const res = await request(server).get('/artist');

    expect(res.statusCode.toBe(200));
    expect(res.body).toBeDefined();

  })

  test('specific artist endpoint responds with the actual artist', async (done) => {
    var name = 'Snool_Snool'
    const res = await request(server).get(`/artist/?name=${name}`);

    expect(res.statusCode.toBe(200));
    expect(res.body).toHaveProperty('name', name);
  })

  test('if artist cannot be found in the database on specific art req, return error', async (done) => {
    var name = 'A nonexistant artist';

    const res = await request(server).get(`/artist/?name=${name}`)
    expect(res.statusCode.toBe(404));
  })

});
