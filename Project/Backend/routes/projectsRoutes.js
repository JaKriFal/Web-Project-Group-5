const express = require("express");
const projectsController = require("../controllers/projectsController");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const upload = require("../middleware/multer");

// Create a New Recruiter
router.post(
  "/",
  authenticateToken,
  upload.fields([
    { name: "images", maxCount: 5 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  projectsController.createProject
);

// Get All Projects
router.get("/", projectsController.getAllProjects);

// Get artist's Projects
router.get(
  "/artistsProjects",
  authenticateToken,
  projectsController.getArtistsProjects
);

// Get recruiter's Projects
router.get(
  "/recruitersProjects",
  authenticateToken,
  projectsController.getRecruitersProjects
);

// Get Single Project by ID
router.get("/:id", projectsController.getProject);

// Update Recruiter by ID
router.put("/:id", authenticateToken, projectsController.updateProject);

// Delete Recruiter by ID
router.delete("/:id", projectsController.deleteProject);

module.exports = router;
