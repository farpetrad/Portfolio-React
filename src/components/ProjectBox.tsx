import React from 'react';
import './ProjectBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Arrow from "../assets/arrow.svg";

export interface SlideItem {
  img: string;
  alt: string;
};

export interface ProjectItemProps {
  name: string;
  description: string;
  year: string;
  role: string;
  img: string;
  alt: string;
  projectLink?: string;
  codepenLink?: string;
  githubLink?: string;
  slides: SlideItem[];
  onProjectSelect?: () => void;
};

export const ProjectBox: React.FC<ProjectItemProps> = (props) => {
    return (
    <>
        <div className="offset-1 col-10 col-xxl-4 project-img" style={{ cursor: props.slides.length > 0 ? 'pointer' : 'initial' }} onClick={() => props.onProjectSelect ? props.onProjectSelect() : () => { return; }}>
            <img src={props.img} className="img-fluid" alt={props.alt} />
        </div>
        <div className="offset-1 col-10 col-xxl-6 mt-3 mt-xxl-0 project-description text-start">
            <h3>{ props.name }</h3>
            <p>
            { props.description }
            </p>
            <div className="row mx-auto project-info">
                <div className="col-12"><h4>Project Info</h4></div>
            </div>
            <div className="row mx-auto project-info mt-4">
                <div className="col-6 p-0">Year</div>
                <div className="col-6 text-end">{ props.year }</div>
            </div>
            <div className="row mx-auto project-info mt-4">
                <div className="col-6 p-0">Role</div>
                <div className="col-6 text-end">{ props.role }</div>
            </div>
            <div className="d-flex project-links mb-5">
            {props.projectLink && <a href={props.projectLink} target="_blank" rel="noreferrer"
                >View Project <img src={Arrow} alt="arrow up right"/>
            </a>}
            {props.codepenLink && <a href={props.codepenLink} target="_blank" rel="noreferrer"
                >Live Demo <img src={Arrow} alt="arrow up right"/>
            </a>}
            {props.githubLink && <a href={props.githubLink} target="_blank" rel="noreferrer">
                See on GitHub&nbsp;
                <FontAwesomeIcon icon={faGithub} title="GitHub icon link to project"/>
            </a>}
    </div>
        </div>
    </>);
}
