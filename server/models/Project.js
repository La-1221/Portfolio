const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    techStack: [{ type: String }],
    category: {
      type: String,
      enum: ['fullstack', 'frontend', 'backend', 'academic', 'other'],
      default: 'fullstack',
    },
    liveUrl: { type: String, default: '' },
    githubUrl: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
