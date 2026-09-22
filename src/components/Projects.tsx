import './Projects.css';

const projects = [
  {
    title: 'Attendance Module (HRMS)',
    description: 'Designed a calendar-based UI showing daily status with color-coded indicators. Features include geo-fenced punch-in/out tracking and attendance regularization requests.',
    tech: ['React Native', 'Redux', 'SQL', 'Geo-fencing']
  },
  {
    title: 'Leave Management Module',
    description: 'Built an intuitive interface for leave application and balance tracking. Implemented a configurable leave clubbing feature driven by backend business rules.',
    tech: ['React Native', 'REST API', 'JavaScript']
  },
  {
    title: 'Store-Opening Checklist App',
    description: 'Delivered a mobile application for a retail client to manage and track store opening checklists.',
    tech: ['React Native', '.NET API', 'SQL Server']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Real-Time Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
