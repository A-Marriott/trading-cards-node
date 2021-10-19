const request = require('supertest');
const app = require('../server');

describe('Api testing', () => {
    it('Get game', (done) => {
        const expectedResponse = {}
        request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    })
})
