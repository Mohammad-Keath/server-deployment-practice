const server = require('../src/server')
const supertest = require("supertest");
const request = supertest(server.app);

describe("API Server",()=>{
    test("getting data from home route /",async()=>{
        const response =await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('hello from home route')
    })
})