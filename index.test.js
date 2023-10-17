const request = require("supertest")
const app = require("./src/app")


describe("testing Restaurants", () => {

    test("GET /restaurants returns status code of 200", async () => {
        const response = await request(app).get("/restaurants")

        expect(response.statusCode).toBe(200)
    })

    test("GET /restaurants returns an array of restaurants", async () => {
        const response = await request(app).get("/restaurants")
        
        expect(response.statusCode).toBe(200)
    })

    test("GET /restaurants returns the correct restaurant data", async () => {
        const response = await request(app).get("/restaurants")
       
        expect(response.body[0].id).toBe(1)
    })

    test("Post /restaurants request to return array has been updated", async ())
})