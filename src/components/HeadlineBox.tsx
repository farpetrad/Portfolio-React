import React from 'react';
import './HeadlineBox.scss';

export const HeadlineBox: React.FC = (): JSX.Element => {
    return (
    <div className="main-title">
        <p className="code">&#60;h1&#62;</p>
        <h1>I'm <span className="name">Neal</span>,</h1>
        <span>
        <h1>a Full-stack developer</h1>
        <span className="code">&#60;/h1&#62;</span>
        </span>
        <p className="code mt-4">&#60;p&#62;</p>
        <p>
        I help business grow by crafting amazing web experiences. If you’re
        looking for a developer that likes to get stuff done,
        </p>
        <p className="code">&#60;/p&#62;</p>
    </div>);
}
