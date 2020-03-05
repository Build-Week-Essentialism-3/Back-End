require('dotenv').config();
const request = require('supertest');
const server = require('../api/server.js');

describe('server', function() {
    describe('environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.NODE_ENV).toBe('testing');
        });
    });

    describe('GET /', function() {
        it('should return "Essentialism 3" as the value', function() {
            return request(server).get('/')
                .then(res => {
                    expect(res.body.project).toBe('Essentialism 3');
            });
        });
    });
});