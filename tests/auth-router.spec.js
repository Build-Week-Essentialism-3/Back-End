require('dotenv').config();
const request = require('supertest');
const server = require('../api/server.js');

describe('auth-router', function() {
    describe('login', function() {
        it('should return a token', function() {
            const payload = { username: 'testing', password: '123456' };
            return request(server)
                .post('/api/auth/login')
                .send(payload)
                .then(res => {
                    expect(typeof res.body.token).toBe('string');
            });
        });
    });
});