import React from 'react';
import './ExperienceBox.scss';

export const ExperienceBox: React.FC = (): JSX.Element => {
    return (
    <div className="experience-box">
        <div className="experience-container">
        <div className="row">
            <div className="col-12 col-md-4">
            <h4>4</h4>
            </div>
            <div className="col-12 col-md-8 highlight">Programming Languages</div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4">
            <h4>6</h4>
            </div>
            <div className="col-12 col-md-8 highlight">Development Tools</div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 p-0">
            <h4>16</h4>
            </div>
            <div className="col-12 col-md-8 highlight">Years of Experience</div>
        </div>
        </div>
    </div>);
}
