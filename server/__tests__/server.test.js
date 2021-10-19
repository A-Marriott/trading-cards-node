const request = require('supertest');
const app = require('../server');

describe('Api testing', () => {
    it('Get game', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
            expect(Object.keys(res.body).length).not.toEqual(0)
            done();
        })
    });
    it('Play card', (done) => {
        request(app)
        .get('/playcard/0')
        .expect(200)
        .end((err, res) => {
            expect(Object.keys(res.body).length).not.toEqual(0)
            done();
        })
    });
    it('Change player', (done) => {
        request(app)
        .get('/changeplayer')
        .expect(200)
        .end((err, res) => {
            expect(Object.keys(res.body).length).not.toEqual(0)
            done();
        })
    });
    it('Restart game', (done) => {
        request(app)
        .get('/restartgame')
        .expect(200)
        .end((err, res) => {
            expect(Object.keys(res.body).length).not.toEqual(0)
            done();
        })
    });
});
