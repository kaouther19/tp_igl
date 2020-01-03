const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server.js");
const should = require("chai").should;
describe("GET /notes/170070", () => {
  it("OK, aucune note de matricule 170070", done => {
    request(app)
      .get("/notes/170070")
      .then(res => {
        const body = res.body;
        expect(body.length).to.equal(0);
        done();
      })
      .catch(err => done(err));
  });
  it("OK, get une note dans notes qui a comme matricule_etudiant 170070", done => {
    request(app)
      .post("/notes/add")
      .send({
        note_matricule: "170070",
        note_module: "ORGA",
        note_cc: "16",
        note_ci: "17",
        note_cf: "18"
      })
      .then(res => {
        request(app)
          .get("/notes/170070")
          .then(res => {
            const body = res.body;
            expect(body.length).to.equal(1);
            done();
          });
      })
      .catch(err => done(err));
  });
});
