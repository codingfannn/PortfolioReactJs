import "./about.css";
import Me from "../../img/Noemi profil.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img className="about-img" src={Me} alt="" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>

        <div className="about-desc">
          <p className="desc-1">
            I am a junior full stack developer, with an extensive background in
            tourism and hospitality. I gained experience in different fields of
            my previous sector, mainly on the area of guest and customer
            satisfaction and team leading. I bring and I am able to implement
            this knowledge to the technology sector with great communication
            skills, ethical thinking and strong willingness of problem solving.
          </p>

          <p className="desc-2">
            My passion about web development started around 2 years ago. Due to
            the pandemic I got the chance to participate in an EU funded web dev
            course for absolute beginners and I absolutely fall in love with
            coding. At the beginning I was creating with the help of CSS, HTML
            and a small portion of Javascript in my free time as a hobbyst and
            this year I made a life changing decision, I decided to start a full
            stack web development course and want to get the most out of it, to
            land an entry level job, which will be also beneficial for me and
            for my company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
