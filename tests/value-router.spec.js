require('dotenv').config();
const request = require('supertest');
const server = require('../api/server.js');

let token;

beforeAll((done) => {
    request(server)
        .post('/api/auth/login')
        .send({ username: 'testing', password: '123456' })
        .then(res => {
            token = res.body.token;
            done();
        });
});

describe('value-router', function() {
    describe('values', function() {
        it('should add a new value', function() {
            return request(server)
                .get('/api/values')
                .set('Authorization', token)
                .then(res => {
                    expect(typeof res.body).toBe('object');
                });
        });
    });
});