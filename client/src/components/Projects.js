import React, { useEffect, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { fetchProjects } from "../utils/api";
import { PROJECTS, EXPERIENCE } from "../utils/data";
import "./Projects.css";

const FILTERS = ["all", "fullstack", "academic"];

const ProjectCard = ({ project, index }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`project-card ${project.featured ? "project-card--featured" : ""} ${isVisible ? "fade-up" : ""}`}
      style={{ animationDelay: `${(index % 3) * 100}ms` }}
    >
      {project.featured && (
        <span className="project-card__badge">★ Featured</span>
      )}

      <div className="project-card__header">
        <div className="project-card__icon">
          {project.category === "fullstack" && "⬡"}
          {project.category === "frontend" && "◈"}
          {project.category === "backend" && "◉"}
          {project.category === "academic" && "🎓"}
          {project.category === "other" && "◳"}
        </div>
        <div className="project-card__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              title="GitHub"
              aria-label="View source on GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              title="Live demo"
              aria-label="View live demo"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__stack">
        {project.techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState(PROJECTS);
  const [filter, setFilter] = useState("all");
  const { ref, isVisible } = useScrollReveal();
  const { ref: expRef, isVisible: expVisible } = useScrollReveal();

  useEffect(() => {
    fetchProjects()
      .then((res) => {
        if (res.data?.data?.length) setProjects(res.data.data);
      })
      .catch(() => {
        /* fallback to static data */
      });
  }, []);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div
          ref={ref}
          className={`projects__header ${isVisible ? "fade-up" : ""}`}
        >
          <p className="section-label">// work</p>
          <h2 className="section-title">Project Showcase</h2>
          <p className="section-subtitle">
            Things I've built — from class projects to a full-stack system.
          </p>
        </div>

        <div className="projects__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`projects__filter ${filter === f ? "projects__filter--active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id || project._id}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
