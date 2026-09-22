import './Experience.css';

const experiences = [
  {
    role: 'React Native Developer',
    company: 'Integrum Technologies Private Limited, Chennai',
    period: 'May 2025 – Present',
    description: [
      'Developed and maintained core modules of a live HRMS mobile application (Attendance, Leave Management, Reimbursement).',
      'Implemented geo-fence tracking, calendar-based UIs, and manager approval workflows.',
      'Authored SQL queries and integrated REST APIs.',
      'Leveraged AI-assisted tools (Claude, ChatGPT) to accelerate delivery.'
    ]
  },
  {
    role: 'Sales Supervisor',
    company: 'Puma Pvt Ltd, Chennai',
    period: 'Oct 2022 – Dec 2024',
    description: [
      'Supervised a team of sales associates, ensuring efficient store operations.',
      'Managed schedules, tracked inventory, and compiled sales reports using Microsoft Excel.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card glass" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <h4 className="exp-company">{exp.company}</h4>
              <ul className="exp-desc">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
