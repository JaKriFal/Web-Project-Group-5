const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app.js");
const api = supertest(app);
const Artist = require("../models/artists.js");
const Project = require("../models/projects.js");
const path = require("path");

let token = null;
let artist_id = null;

const imagesPath1 = path.resolve(__dirname, "./testingFiles/test_image1.png");
const imagesPath2 = path.resolve(__dirname, "./testingFiles/test_image2.png");
const thumbnailPath = path.resolve(
  __dirname,
  "./testingFiles/test_thumbnail.png"
);

const artistsInDb = async () => {
  const artists = await Artist.find({});
  return artists.map((artist) => artist.toJSON());
};

const projectsInDb = async () => {
  const projects = await Project.find({});
  return projects.map((project) => project.toJSON());
};

beforeAll(async () => {
  await Artist.deleteMany({});

  const artist = await api.post("/api/artists/signup").send({
    username: "Jason",
    email: "jason@mail.com",
    password: "R3g5T7#gh",
  });
  token = artist.body.token;

  const artist_response = await artistsInDb();
  console.log(artist_response);
  artist_id = artist_response[0]._id;
  console.log(artist_id);
});

describe("when there is initially some projects saved", () => {
  beforeEach(async () => {
    await Artist.deleteMany({});
    const projectData = {
      title: "Art Piece",
      user_id: artist_id,
      description: "This is an art piece",
      tags: ["art", "piece"],
    };
    await api
      .post("/api/projects")
      .set("Authorization", `Bearer ${token}`)
      .field("title", projectData.title)
      .field("artist_id", String(projectData.user_id))
      .field("description", projectData.description)
      .field("tags", projectData.tags)
      .attach("images", imagesPath1)
      .attach("images", imagesPath2)
      .attach("thumbnail", thumbnailPath);
  });

  describe("testing registration of artists", () => {
    test("creation succeeds with a fresh artistname", async () => {
      const newartist = {
        username: "Bob",
        email: "bob@mail.com",
        password: "S3g5T7#gh!!",
      };

      await api
        .post("/api/artists/signup")
        .send(newartist)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("testing login of artists", () => {
    test("login succeeds with correct credentials", async () => {
      const newartist = {
        username: "Jeff",
        email: "jeff@mail.com",
        password: "S3g5T7#gh!!!",
      };

      await api
        .post("/api/artists/signup")
        .send(newartist)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      const artistToLogin = {
        email: "jeff@mail.com",
        password: "S3g5T7#gh!!!",
      };

      await api
        .post("/api/artists/login")
        .send(artistToLogin)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });
  describe("testing retrieval of projects", () => {
    test("projects are returned as json", async () => {
      await api
        .get("/api/projects")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });
  describe("testing retrieval of a specific project", () => {
    test("a specific project is returned as json", async () => {
      const projectsAtStart = await projectsInDb();
      const projectToView = projectsAtStart[0];
      console.log(projectToView);

      await api
        .get(`/api/projects/${projectToView._id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });
  describe("testing creation of projects", () => {
    test("a valid project can be added", async () => {
      const newProjectData = {
        title: "Art Piece",
        user_id: artist_id,
        description: "This is an art piece",
        tags: ["art", "piece"],
      };

      await api
        .post("/api/projects")
        .set("Authorization", `Bearer ${token}`)
        .field("title", newProjectData.title)
        .field("artist_id", String(newProjectData.user_id))
        .field("description", newProjectData.description)
        .field("tags", newProjectData.tags)
        .attach("images", imagesPath1)
        .attach("images", imagesPath2)
        .attach("thumbnail", thumbnailPath)
        .expect(201);

      const projectsAtEnd = await projectsInDb();
      expect(projectsAtEnd).toHaveLength(projectsAtEnd.length);
    });
  });
  describe("testing updating of projects", () => {
    test("a specific project can be updated", async () => {
      const projectsAtStart = await projectsInDb();
      const projectToUpdate = projectsAtStart[0];

      const newproject = {
        title: "New Art Piece",
        user_id: artist_id,
        description: "This is a new art piece",
        tags: ["art", "piece"],
      };

      await api
        .put(`/api/projects/${projectToUpdate._id}`)
        .set("Authorization", `Bearer ${token}`)
        .field("title", newproject.title)
        .field("artist_id", String(newproject.user_id))
        .field("description", newproject.description)
        .field("tags", newproject.tags)
        .attach("images", imagesPath1)
        .attach("images", imagesPath2)
        .attach("thumbnail", thumbnailPath)
        .expect(201);
    });
  });
  describe("testing deletion of projects", () => {
    test("a specific project can be deleted", async () => {
      const projectsAtStart = await projectsInDb();
      const projectToDelete = projectsAtStart[0];

      await api
        .delete(`/api/projects/${projectToDelete._id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(201);

      const projectsAtEnd = await projectsInDb();
      expect(projectsAtEnd).toHaveLength(projectsAtStart.length - 1);
    });
  });
});
