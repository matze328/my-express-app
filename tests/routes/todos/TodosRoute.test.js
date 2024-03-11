const request = require("supertest");
const app = require("../../../src/database/server");

describe("GET /v1/todos/all", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/all")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual([]);
  });
});
describe("GET /v1/todos/byid", () => {
  test("responds with json containing the todo with specified ID", async () => {
    // Mock a todo ID for testing
    const todoId = "1";

    // Send a GET request to the route with the mock todo ID
    const response = await request(app)
      .get("/v1/todos/byid")
      .query({ todoId })
      .expect("Content-Type", /json/)
      .expect(200);

    // Check if the response body contains the expected todo object
    expect(response.body.todo.id).toBe(todoId);
  });

  test("responds with 400 Bad Request if no todoId is provided", async () => {
    // Send a GET request to the route without providing a todoId
    const response = await request(app)
      .get("/v1/todos/byid")
      .expect(400);

    // Check if the response body contains the expected error message
    expect(response.text).toBe("Bad Request");
  });
});
