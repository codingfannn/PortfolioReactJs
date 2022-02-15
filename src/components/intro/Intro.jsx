import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello, my name is</h2>
          <h1 className="intro-name">Noemi Radvan</h1>

          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Full Stack Web Developer</div>
              <div className="intro-title-item">Ethical problem solver</div>
              <div className="intro-title-item">Fun communicator</div>
              <div className="intro-title-item">Creative tech-head</div>
              <div className="intro-title-item">Motivated collaborator</div>
            </div>
          </div>

          <p className="intro-desc">
            I am an ethical problem solver with a high level of attention to
            details and quality, who loves working with people and helps the job
            of teams, with the ability of quick adaptation and improvisation.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
      </div>
    </div>
  );
};

export default Intro;
