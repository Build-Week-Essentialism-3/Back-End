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

describe('prompt-router', function() {
    describe('prompt(s)', function() {
        it('should return a status code 400 when not authorized', function() {
            return request(server)
                .get('/api/prompt/1')
                .then(res => {
                    expect(res.statusCode).toBe(400);
                });
        });

        it('should return an object when adding a prompt', function() {
            return request(server)
                .post('/api/prompt/')
                .set('Authorization', token)
                .send({
                    "user_id": 1,
                    "description": "Cat ipsum dolor sit amet, lick the curtain just to be annoying so taco cat backwards spells taco cat and claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? yet need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me."
                })
                .then(res => {
                    expect(typeof res.body).toMatch('object');
                });
        });
    });
});