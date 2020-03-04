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

describe('project-router', function() {
    describe('projects', function() {
        it('gets a users projects', function () {
            return request(server)
                .get('/api/users/1/projects')
                .set('Authorization', token)
                .then(res => {
                    expect(res.body.length).toBeGreaterThanOrEqual(1);
                });
        });

        it('gets a project by ID', function() {
            return request(server)
                .get('/api/projects/2')
                .set('Authorization', token)
                .then(res => {
                    expect(res.body).toHaveProperty('id');
                    expect(res.body).toHaveProperty('user_id');
                    expect(res.body).toHaveProperty('project');
                    expect(res.body).toHaveProperty('description');
                })
        })
    });
});