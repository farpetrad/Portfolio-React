import React from 'react';
import { faComputerMouseScrollwheel } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AboutBox } from '../components/AboutBox';
import { HeadlineBox } from '../components/HeadlineBox';
import { ExperienceBox } from '../components/ExperienceBox';
import { SkillsContainer } from '../components/SkillsContainer';
import { ProjectsContainer } from '../components/ProjectsContainer';
import './Home.scss';
import ArrowDown from "../assets/Arrow 1.svg"

export const HomeView: React.FC = (): JSX.Element => {
    return (
        <>
        <div className="home container-fluid sitepage" style={{ alignContent: 'center'}}>
            <div className="row mt-5">
                <div className="offset-sm-1 col-sm-10 col-md-4 col-xxl-2">
                    <div><AboutBox /></div>
                </div>
                <div className="col-10 col-md-6 text-start">
                    <HeadlineBox />
                </div>
                <div className="col-sm-10 offset-sm-1 offset-xxl-0 col-md-4 col-xxl-2">
                    <ExperienceBox />
                </div>
            </div>
            <div className="row mouse">
                <div className="col-12 mouse-scroll-container">
                    <FontAwesomeIcon
                    icon={faComputerMouseScrollwheel}
                    size="2x"
                    />
                </div>
                <div className="col-12 mouse-scroll-container mt-2">
                    <img
                    src={ArrowDown}
                    className="mouse-icon"
                    alt="Arrow pointing down"
                    />
                </div>
            </div>
        </div>
        <div className="container-fluid" id="skills">
            <SkillsContainer />
      </div>
      <div className="container-fluid" id="projects">
            <ProjectsContainer />
      </div>
      </>
    );
}
