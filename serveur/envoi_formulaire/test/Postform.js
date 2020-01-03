const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server.js");
const should = require("chai").should;
describe("POST /notes", () => {
  it("OK, creating a new form", done => {
    request(app)
      .post("/formulaires/add")
      .send({
        formulaire_matricule: "170050",
        formulaire_grpA: 2,
        formulaire_grpV: 8,
        formulaire_raison: "edt"
      })
      .then(res => {
        const body = res.body;
        expect(200);
        expect(body).to.contain.property("formulaire_matricule");
        expect(body.formulaire_matricule).to.equal("170050");
        expect(body).to.contain.property("formulaire_grpA");
        expect(body.formulaire_grpA).to.equal(2);
        expect(body).to.contain.property("formulaire_grpV");
        expect(body.formulaire_grpV).to.equal(8);
        expect(body).to.contain.property("formulaire_raison");
        expect(body.formulaire_raison).to.equal("edt");
        done();
      })
      .catch(err => done(err));
  });
});
