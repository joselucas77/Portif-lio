import './index.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skill-row">
        <div className="skill-columm">
          <h3 className="title">Front-end</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  HTML <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  CSS <span>80%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  JS <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  React <span>80%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skill-columm">
          <h3 className="title">Back-end</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  PHP <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  Typescrip <span>85%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  NodeJS <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  PostgreSQL <span>80%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
