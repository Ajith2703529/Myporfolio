import './Skills.css';

const row1 = [
  { name: 'React Native', icon: 'devicon-react-original colored' },
  { name: 'React JS', icon: 'devicon-react-original colored' },
  { name: 'Redux', icon: 'devicon-redux-original colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' }
];

const row2 = [
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Django', icon: 'devicon-django-plain colored' },
  { name: 'SQL', icon: 'devicon-azuresqldatabase-plain colored' }
];

const row3 = [
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original colored' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
  { name: 'REST API', icon: 'devicon-nodejs-plain colored' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg-shape skills-shape-1"></div>
      <div className="skills-bg-shape skills-shape-2"></div>

      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title white-text">Technical Skills</h2>
          <p className="section-subtitle">The tools, languages, and technologies I use to build modern applications.</p>
        </div>
        
        <div className="skills-layout">
          <div className="skills-row">
            {row1.map((skill, i) => (
              <div key={i} className="skill-box" style={{ animationDelay: `${i * 0.1}s` }}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="skills-row">
            {row2.map((skill, i) => (
              <div key={i} className="skill-box" style={{ animationDelay: `${(i + 5) * 0.1}s` }}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="skills-row">
            {row3.map((skill, i) => (
              <div key={i} className="skill-box" style={{ animationDelay: `${(i + 10) * 0.1}s` }}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
