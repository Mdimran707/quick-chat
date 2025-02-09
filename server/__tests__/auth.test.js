const request = require("supertest");
const app = require("../app"); // Ensure this path is correct
const mongoose = require("mongoose");
const User = require("../models/user");

beforeAll(async () => {
    // Connect to test database
    const dbUri = process.env.TEST_DB_URI || "mongodb://localhost:27017/testdb";
    await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("Auth API Tests", () => {
    let testUser = {
        email: "testuser@example.com",
        password: "Test@1234"
    };

    it("should sign up a new user", async () => {
        const res = await request(app)
            .post("/api/auth/signup")
            .send(testUser);
        
        expect(res.statusCode).toBe(201);
        expect(res.body.success).toBe(true);
    });

    it("should not allow duplicate email", async () => {
        const res = await request(app)
            .post("/api/auth/signup")
            .send(testUser);
        
        expect(res.statusCode).toBe(200); // Expecting an error response
        expect(res.body.success).toBe(false);
        expect(res.body.message).toBe("User already exists.");
    });

    it("should log in the user", async () => {
        const res = await request(app)
            .post("/api/auth/login")
            .send(testUser);
        
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.token).toBeDefined();
    });
});

