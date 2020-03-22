const server = require('../server/index.js');
const request = require('supertest');

var testServer;

// simple tests

test('1 plus 1 equals 2', () => {
  expect(1+1).toEqual(2);
})

/////////// SERVER STUFF BELOW //////

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
    done();

  })

  test('specific artist endpoint responds with the actual artist', async (done) => {
    var name = 'Snool_Snool'
    const res = await request(server).get(`/artist/?name=Snool_Snool`);

    expect(res.statusCode.toBe(200));
    expect(res.body).toHaveProperty('name', name);
    done();
  })

  test('if artist cannot be found in the database on specific art req, return error', async (done) => {
    var name = 'A nonexistant artist';

    const res = await request(server).get(`/artist/?name=nonexistantartist`)
    expect(res.statusCode.toBe(404));
    done();
  })

});
