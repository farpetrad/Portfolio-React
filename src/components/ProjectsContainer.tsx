import React, { useState } from 'react';
import { ProjectBox, ProjectItemProps } from './ProjectBox';

export const ProjectsContainer: React.FC = (): JSX.Element => {
    const projects: ProjectItemProps[] = [
        {
          name: "Splinterlands",
          description: `Worked with a team of developers to re-write a jQuery website in React,
            Typescript and Stitches. In addition architectured and designed postgres
            database schema, REST based microservices and block operations for the
            games first expansion Land using Express.js, Nest.js running on Node.js in
            TypeScript.`,
          year: "2022 - 2024",
          role: "Full-Stack Developer / Architect",
          img: require("../assets/splinterlands.png"),
          alt: "Screenshot of Splinterlands website",
          projectLink: "https://splinterlands.com",
          slides: [
            {
              img: require("../assets/splinterlands.png"),
              alt: "Screenshot of Splinterlands website",
            },
            {
              img: require("../assets/splinterlands2.png"),
              alt: "Screenshot of Praetoria map",
            },
            {
              img: require("../assets/splinterlands3.png"),
              alt: "Screenshot of Praetoria production overview",
            },
            {
              img: require("../assets/splinterlands4.png"),
              alt: "Screenshot of Region production overview",
            },
            {
              img: require("../assets/splinterlands5.png"),
              alt: "Screenshot of Buy SPS",
            },
            {
              img: require("../assets/splinterlands6.png"),
              alt: "Screenshot of Battle History",
            },
            {
              img: require("../assets/splinterlands7.png"),
              alt: "Screenshot of battle",
            },
          ],
        },
        {
          name: "Pulte Mortgage Login and Secure sites",
          description: `Architectured and created login site (login.pultemortgage.com) and the 
              secure sites hidden behind the login, the MyLoan dashboard (secure.pultemortgage.com) 
              and the Loan Questionnaire (start.pultemortgage.com) using Vue.js 2, vue-router and vuex
              on the front end, in addition to designing and architecturing REST based microservices using 
              .NET Core, MS SQLServer and GraphQL on the back end`,
          year: "2018 - 2020",
          role: "Digital Customer Experience .NET Solutions Architect and Lead Vue.js Developer",
          img: require("../assets/login_pulte_mortgage.png"),
          alt: "Screenshot of Pulte Mortgage Login website",
          projectLink: "https://login.pultemortgage.com/",
          slides: [
            {
              img: require("../assets/login_pulte_mortgage.png"),
              alt: "Screenshot of Pulte Mortgage Login website",
            },
            {
              img: require("../assets/myloan_dashboard.png"),
              alt: "Screenshot of MyLoan Dashboard with conditions",
            },
            {
              img: require("../assets/myloan_dashboard2.png"),
              alt: "Screenshot of MyLoan Dashboard Property Location",
            },
            {
              img: require("../assets/myloan_dashboard3.png"),
              alt: "Screenshot of MyLoan Dashboard profile management screen",
            },
            {
              img: require("../assets/loanquestionnaire.png"),
              alt: "Screenshot of Loan Questionnaire start screen",
            },
            {
              img: require("../assets/loanquestionnaire2.png"),
              alt: "Screenshot of Loan Questionnaire screen",
            },
          ],
        },
        {
          name: "Pulte Mortgage Articles",
          description: `Architectured and created a blog site for prospective home buyers using Vue.js 2, vue-router and vuex
              on the front end.  Articles are delivered to the site through a CMS.`,
          year: "2018 - 2020",
          role: "Digital Customer Experience .NET Solutions Architect and Lead Vue.js Developer",
          img: require("../assets/pulte_articles.png"),
          alt: "Screenshot of Pulte Articles website",
          projectLink:
            "https://articles.pultemortgage.com/article/when-a-first-time-buyer-is-also-a-first-time-builder",
          slides: [],
        },
      ];
      const [selectedProject, setSelectedProject] = useState<ProjectItemProps | null>(null);
    return (
        <>
            <div className="row mt-5 mb-5">
                <div className="offset-1 col-10 text-start mt-5">
                <h2>Featured Projects</h2>
                <p>
                    Here are some of the selected projects that showcase my passion for
                    front-end development.
                </p>
            </div>
        </div>
        {projects.map((p, index: number)=> {
            const obj = { ...p };
            obj.onProjectSelect = () => setSelectedProject(p);
            return <div className={index === projects.length-1 ? "row mt-5 mb-5" : "row mt-5"} key={`${p.name}-${index}`}>
                <ProjectBox {...obj} />
            </div>
        })}
        </>);
}
