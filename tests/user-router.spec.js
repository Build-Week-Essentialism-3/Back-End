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

describe('user-router', function() {
    describe('user information', function() {
        it('should require authorization', function() {
            return request(server)
                .get('/api/users/1/user-info')
                .then(res => {
                    expect(res.statusCode).toBe(400);
                });
        });

        it('should get user information', function() {
            return request(server)
                .get('/api/users/1/user-info')
                .set('Authorization', token)
                .then(res => {
                    expect(res.body.name).toBe('Testing');
            });
        });

        it('should return updated user information', function() {
            return request(server)
                .put('/api/users/1/user-info')
                .set('Authorization', token)
                .send({
                    "user_id": 1,
                    "name": "Testing",
                    "nickname": "User"
                })
                .then(res => {
                    expect(res.body).toEqual({
                        "user_id": 1,
                        "name": "Testing",
                        "nickname": "User"
                    })
                })
        })
    })
})