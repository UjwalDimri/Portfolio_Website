import React from 'react';

const technologies = [
  'Linux', 'CI/CD pipelines', 'Docker', 'Bash', 'Git & GitHub', 'OWASP principles',
  'Node.js', 'Python', 'REST APIs', 'MongoDB', 'MySQL', 'Automated testing'
];

export const TechTicker: React.FC = () => (
  <section className="tech-ribbon" aria-label={`Technology stack: ${technologies.join(', ')}`}>
    <div className="tech-ribbon__track" aria-hidden="true">
      {[0, 1].map((copy) => (
        <div className="tech-ribbon__group" key={copy}>
          {technologies.map((technology) => (
            <span className="tech-ribbon__item" key={`${copy}-${technology}`}>
              <span className="tech-ribbon__spark" />
              {technology}
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);
