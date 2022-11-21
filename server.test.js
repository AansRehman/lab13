const request = require('supertest');
const app = require('./routes/User.js');
const monsgoose = require('mongoose');
// const supertest = require('supertest');
// const { describe, default: test } = require("node:test");

describe("Test the root path", ()=>{
    test("It should response the GET method", ()=>{
        const response= request(app).post("http://localhost:8000/User/add")
        .send({
            "Name": "Hasan",
            "Email": "Hasan",
            "Age": 21,
            "Contact": 789
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("Test the root path", ()=>{
    test("It should response the GET method", ()=>{
        const response= request(app).post("http://localhost:8000/User/add")
        .send({
            "Name": "Hasan"
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("Test the root path", ()=>{
    test("It should response the DELETE method", ()=>{
        const response= request(app).delete("http://localhost:8000/User/637b5eec2703438657078173")
        
        expect(response.statusCode).toBe(200);
    })
})
