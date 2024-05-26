import React from 'react';
import './AboutContainer.scss';

export const AboutContainer: React.FC = (): JSX.Element => {
    return   <div className="container-fluid" id="about-me">
    <div className="row about-me-container mb-5">
      <div className="col-10 offset-1 col-md-4">
        <h2>ABOUT ME</h2>
      </div>
      <div className="col-10 offset-1 offset-md-0 col-md-5 text-start">
        <p className="about-me-highlight">
          I am a Full-Stack developer based in Denver, Colorado looking for
          exciting opportunities. I have a diverse background across financial,
          travel, gaming and governement industries.
        </p>
        <p>
          I Have a degree in Game and Simulation programming but have diverse
          experience from low level C/C++ game development as well as in mission
          critical systems to higher level C# application and service
          development to JavaScript/TypeScript experience designing and
          developing fully responsive websites. I have a strong passion for
          learning and am always up for a challenge. When not programming I
          enjoy 3D printing, exploring the great outdoors, reading and
          satisfying my desire to learn new things.
        </p>
      </div>
    </div>
  </div>;
}
