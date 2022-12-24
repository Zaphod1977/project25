import React from 'react';
import resumeImage from '../../assets/images/Resume.jpg'
import Project from '../Project';
function Resume(props) {

  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Resume</h2>
      <div >
        <div className="">
          <Project className="resume"
            imageSource={resumeImage}
            imageAlt=""
            label="">
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Resume;
