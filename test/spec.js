const { expect } = require("chai");
const request = require("supertest");
const app = require("../app");

// const app = require("supertest")(require(".../app"));

describe("This confirms that tests is being run", () => {
  it("If this passes, comparisons is working", () => {
    expect(true).to.equals(true);
  });
});

describe("This describes that we have a working GET route", () => {
  it("Responses with 200", () => {
    expect(true).to.equals(true);
    request(app)
      .get("/")
      .expect(200)
      .end((error) => {
        if (error) throw error;
      });
  });
});
