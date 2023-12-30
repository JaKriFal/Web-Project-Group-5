const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app.js");
const api = supertest(app);
const Recruiter = require("../models/recruiters.js");
const Job = require("../models/jobs.js");

let token = null;
let recruiter_id = null;

const recruitersInDb = async () => {
  const recruiters = await Recruiter.find({});
  return recruiters.map((recruiter) => recruiter.toJSON());
};

const jobsInDb = async () => {
  const jobs = await Job.find({});
  return jobs.map((job) => job.toJSON());
};

beforeAll(async () => {
  await Recruiter.deleteMany({});

  const recruiter = await api.post("/api/recruiters/signup").send({
    companyName: "Jason",
    email: "jason@mail.com",
    password: "R3g5T7#gh",
  });
  token = recruiter.body.token;

  const recruiter_response = await recruitersInDb();
  console.log(recruiter_response);
  recruiter_id = recruiter_response[0]._id;
});

describe("when there is initially some jobs saved", () => {
  beforeEach(async () => {
    await Job.deleteMany({});
    await api.post("/api/jobs").set("Authorization", `Bearer ${token}`).send({
      position: "3D Artist",
      description: "Job",
      skills: "Maya",
      location: "London",
      type: "Permanent",
      medium: "3D",
      tags: "Artist,3D",
      user_id: recruiter_id,
    });
    await api.post("/api/jobs").set("Authorization", `Bearer ${token}`).send({
      position: "2D Illustrator",
      description: "Job",
      skills: "Photoshop",
      location: "London",
      type: "Permanent",
      medium: "2D",
      tags: "Illustrator,2D",
      user_id: recruiter_id,
    });
  });

  describe("testing registration of recruiters", () => {
    test("creation succeeds with a fresh username", async () => {
      const newRecruiter = {
        companyName: "Bob",
        email: "bob@mail.com",
        password: "S3g5T7#gh!!",
      };

      await api
        .post("/api/recruiters/signup")
        .send(newRecruiter)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("testing login of recruiters", () => {
    test("login succeeds with correct credentials", async () => {
      const newRecruiter = {
        companyName: "Jeff",
        email: "jeff@mail.com",
        password: "S3g5T7#gh!!!",
      };

      await api
        .post("/api/recruiters/signup")
        .send(newRecruiter)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      const recruiterToLogin = {
        email: "jeff@mail.com",
        password: "S3g5T7#gh!!!",
      };

      await api
        .post("/api/recruiters/login")
        .send(recruiterToLogin)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("testing retrieval of jobs", () => {
    test("jobs are returned as json", async () => {
      await api
        .get("/api/jobs")
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("testing retrieval of a specific job", () => {
    test("a specific job is returned as json", async () => {
      const jobsAtStart = await jobsInDb();
      const jobToView = jobsAtStart[0];

      await api
        .get(`/api/jobs/${jobToView._id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("testing creation of jobs", () => {
    test("a valid job can be added", async () => {
      const newJob = {
        position: "3D Artist",
        description: "Job",
        skills: "Maya",
        location: "London",
        type: "Permanent",
        medium: "3D",
        tags: "Artist,3D",
        user_id: recruiter_id,
      };

      await api
        .post("/api/jobs")
        .set("Authorization", `Bearer ${token}`)
        .send(newJob)
        .expect(201)
        .expect("Content-Type", /application\/json/);

      const jobsAtEnd = await jobsInDb();
      expect(jobsAtEnd).toHaveLength(jobsAtEnd.length);
    });
  });

  describe("testing updating of jobs", () => {
    test("a specific job can be updated", async () => {
      const jobsAtStart = await jobsInDb();
      const jobToUpdate = jobsAtStart[0];

      const newJob = {
        position: "3D Artist",
        description: "Job",
        skills: "Maya",
        location: "London",
        type: "Permanent",
        medium: "3D",
        tags: "Artist,3D",
        user_id: recruiter_id,
      };

      await api
        .put(`/api/jobs/${jobToUpdate._id}`)
        .set("Authorization", `Bearer ${token}`)
        .send(newJob)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("testing deletion of jobs", () => {
    test("a specific job can be deleted", async () => {
      const jobsAtStart = await jobsInDb();
      const jobToDelete = jobsAtStart[0];

      await api
        .delete(`/api/jobs/${jobToDelete._id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      const jobsAtEnd = await jobsInDb();
      expect(jobsAtEnd).toHaveLength(jobsAtStart.length - 1);
    });
  });
});
