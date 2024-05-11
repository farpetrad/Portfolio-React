import React from 'react';
import { IconDefinition } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./SkillBox.scss";

export interface SkillBoxProps {
    badgeText?: string;
    skillText: string;
    color?: string;
    slotContent?: IconDefinition;
    alt?: string;
  };

  export const SkillBox: React.FC<SkillBoxProps> = ({ badgeText, skillText, color, slotContent, alt}): JSX.Element => {
    return (
    <div className="skill-container">
        <div className="skill-badge" style={{ backgroundColor: color }}>
        { slotContent ? <FontAwesomeIcon icon={slotContent} title={alt} size="3x" style={{ color: '#193154' }} /> : badgeText }
        </div>
        <span>{ skillText }</span>
    </div>)
  }
