import supertest from "supertest";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const app = require("./app.js");

const chai = await import("chai");
const { expect } = chai;

describe("TEST TODO API", () => {
  it("should create a new task", async () => {
    const response = await supertest(app)
      .post("/task")
      .send({ title: "test", description: "test description" });

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("title", "test");
  });

  it("should update a existing task", async () => {
    const newTitle = "TASK UPDATED";

    const response = await supertest(app)
      .post("/task")
      .send({ title: "test", description: "test description" });

    const createdTask = response.body;

    const response_update = await supertest(app)
      .put(`/task/${createdTask.id}`)
      .send({ title: newTitle });

    expect(response_update.status).to.equal(200);
  });

  it("should get all tasks", async () => {
    const res = await supertest(app).get("/task");
    expect(res.status).to.equal(200);
  });

  after(async () => {
    //limpieza
  });
});
