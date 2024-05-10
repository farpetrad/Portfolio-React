import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faLocationDot,
    faSuitcase,
    faLink,
  } from "@fortawesome/sharp-regular-svg-icons";
  import './AboutBox.scss';
  import Portrait from "../assets/me.jpg";

export const AboutBox: React.FC = (): JSX.Element => {
    const skills = ["Vue.js", "React", "C#", "C/C++"];
    return (
        <div className="about_box">
            <img src={Portrait} className="img-cropped" alt="My Portrait" />
            <div className="text-center">
            <h4>Neal</h4>
            <h5>Full-stack developer</h5>
            </div>
            <div className="text-start content-item">
            <FontAwesomeIcon
                icon={faEnvelope}
                style={{color: 'white', marginRight: '5px'}}
            />
            <a href="mailto:neal.cynkus@gmail.com">neal.cynkus@gmail.com</a>
            </div>
        <div className="text-start content-item">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{color: 'white', marginRight: '5px'}}
          />
          <span>Denver, Co</span>
        </div>
        <div className="text-start content-item">
          <FontAwesomeIcon
            icon={faSuitcase}
            style={{color: 'white', marginRight: '5px'}}
          />
          <span>Vue / React Full-stack</span>
        </div>
        <div className="text-start content-item">
          <FontAwesomeIcon
            icon={faLink}
            style={{color: 'white', marginRight: '5px'}}
          />
    
          <a href="https://myportfolio-beta-hazel.vercel.app/"
            >https://myportfolio-beta-hazel.vercel.app/</a
          >
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            {skills.map((s) => <div className='badge rounded-pill me-2 mt-2 skill'>{s}</div>)}
          </div>
        </div>
      </div>
    );
}
