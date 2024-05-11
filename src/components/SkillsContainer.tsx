import React from 'react';
import { faPumpSoap, faC, faHashtag } from "@fortawesome/pro-regular-svg-icons";
import {
  faNodeJs,
  faGitAlt,
  faVuejs,
  faReact,
  faHtml5,
  faCss3,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { SkillBox, SkillBoxProps } from './SkillBox';

export const SkillsContainer: React.FC = (): JSX.Element => {
    const technologies: SkillBoxProps[][] = [
        [
          {
            badgeText: "CORE",
            skillText: ".NET Core",
            color: "#044458",
          },
          {
            badgeText: ".NET",
            skillText: ".NET Framework",
            color: "#CC9A06",
          },
          {
            skillText: "Node Js",
            slotContent: faNodeJs,
            alt: "Node Js icon",
          },
          {
            badgeText: "WPF",
            skillText: "WPF",
            color: "#146C43",
          },
          {
            badgeText: "WCF",
            skillText: "WCF",
            color: "#087990",
          },
          {
            badgeText: "REST",
            skillText: "REST",
            color: "#842029",
          },
        ],
        [
          {
            skillText: "SOAP",
            slotContent: faPumpSoap,
            alt: "Pump soap bottle icon",
          },
          {
            badgeText: "TFVC",
            skillText: "TFVC",
            color: "#343A40",
          },
          {
            skillText: "GIT",
            slotContent: faGitAlt,
            alt: "Git Alternative Icon",
          },
          {
            badgeText: "BB",
            skillText: "Babel",
            color: "#75B798",
          },
          {
            badgeText: "TS",
            skillText: "TypeScript",
            color: "#198754",
          },
          {
            badgeText: "JQ",
            skillText: "jQuery",
            color: "#ADB5BD",
          },
        ],
      ];
      const languages: SkillBoxProps[][] = [
        [
          {
            skillText: "Vue.js",
            slotContent: faVuejs,
          },
          {
            skillText: "React",
            slotContent: faReact,
            alt: "React icon",
          },
          {
            skillText: "C/C++",
            slotContent: faC,
            alt: "C icon for C and C++",
          },
          {
            skillText: "C#",
            slotContent: faHashtag,
            alt: "C# Icon",
          },
        ],
        [
          {
            skillText: "HTML",
            slotContent: faHtml5,
            alt: "HTML5 Icon",
          },
          {
            skillText: "CSS",
            slotContent: faCss3,
            alt: "CSS Icon",
          },
          {
            skillText: "SASS",
            slotContent: faSass,
            alt: "SASS Icon",
          },
          {
            badgeText: "JS",
            skillText: "JavaScript",
            color: "#193154",
          },
        ],
      ];
    return (
        <div className="row mt-5 mb-5">
        <div className="offset-1 col-10 text-start">
          <h3>Skills</h3>
        </div>
        <div className="offset-xxl-1 col-12 col-xxl-5 text-start mt-2 p-0">
          <div className="row">
            <div className="offset-1 offset-md-0 col-10">
              <h4>Technologies</h4>
            </div>
          </div>
          { technologies.map((t: SkillBoxProps[], index: number) => {
            return <div className={index === 0 ? "row mt-5" : "row"} key={index}>
                {t.map((skill: SkillBoxProps, skillIndex: number) => {
                    return <SkillBox key={skillIndex} skillText={skill.skillText} badgeText={skill.badgeText} color={skill.color} slotContent={skill.slotContent} alt={skill.alt} />;
                })}
            </div>
          })}
        </div>
        <div className="offset-0 offset-xxl-1 col-12 col-xxl-4 text-start mt-2 p-0">
          <div className="row">
            <div className="offset-1 offset-md-0 col-10">
              <h4>Languages</h4>
            </div>
          </div>
          { languages.map((t: SkillBoxProps[], index: number) => {
            return <div className={index === 0 ? "row mt-5" : "row"} key={index}>
                {t.map((skill: SkillBoxProps, skillIndex: number) => {
                    return <SkillBox key={skillIndex} skillText={skill.skillText} badgeText={skill.badgeText} color={skill.color} slotContent={skill.slotContent} alt={skill.alt} />;
                })}
            </div>
          })}
        </div>
      </div>);
}
