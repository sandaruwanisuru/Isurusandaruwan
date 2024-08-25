import './About.css';
import about from '../../assets/about.png';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const opentab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="container">
        <div className="aboutImage">
          <img src={about} alt="About Me" />
        </div>
        <div className="aboutText">
          <div className="tab">
            <h4
              className={`tabLink ${
                activeTab === 'education' ? 'activeLink' : ''
              }`}
              onClick={() => opentab('education')}
            >
              Education
            </h4>
            <h4
              className={`tabLink ${
                activeTab === 'experience' ? 'activeLink' : ''
              }`}
              onClick={() => opentab('experience')}
            >
              Experience
            </h4>
          </div>

          <div
            className={`tabcontent ${
              activeTab === 'education' ? 'activeTab' : ''
            }`}
          >
            <div className="tabContents">
              <p>
                Bachelor of Engineering Technology <br />
                <span>2021</span> <br />
                University Of Ruhuna
              </p>
              <p>
                Industrial PLC course <br />
                <span>2024</span>
                <br /> SLIR Institute
              </p>
            </div>
          </div>
          <div
            className={`tabcontent ${
              activeTab === 'experience' ? 'activeTab' : ''
            }`}
          >
            <p>
              Production Engineer <br />
              <span>2024 May</span> <br />
              DravimaLanka(pvt)LTD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
