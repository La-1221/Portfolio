const Project = require('../models/Project');

// GET /api/projects
exports.getProjects = async (_req, res) => {
  try {
    const projects = await Project.find().sort({ featured: -1, order: 1, createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch projects' });
  }
};

// POST /api/projects  (admin seed use)
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
