import React from 'react';
import './App.scss';
import './scss/site.scss';
import { Navbar } from './components/Navbar';
import { NavItem, NavItemProps } from './components/NavItem';
import { HomeView } from './views/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type NavItemType = NavItemProps & { icon?: IconDefinition, alt?: string; };

export const App: React.FC = (): JSX.Element => {
  const navItems: NavItemType[] = [
    { 
      href: "#skills", label: "Skills",
    },
    { 
      href: "#projects", label: "Projects",
    },
    { 
      href: "#about-me", label: "About",
    },
    { 
      href: "#contact", label: "Contact",
    },
    {
      href: "https://www.linkedin.com/in/neal-c-2749305b/",
      label: "LinkedIn",
      target: "_blank",
      icon: faLinkedin,
      alt: "LinkedIn icon",
    },
    {
      href: "https://github.com/farpetrad/Portfolio",
      label: "Github",
      target: "_blank",
      icon: faGithub,
      alt: "GitHub icon",
    },
  ];
  return (
    <div className="App" id="app">
      <Navbar>
        {navItems.map((n: NavItemType) => { 
          return n.icon ? 
            <NavItem href={n.href} label={n.label} >
              <FontAwesomeIcon icon={n.icon} size="2x" />
            </NavItem> 
            : <NavItem href={n.href} label={n.label} ></NavItem>;
        })}
      </Navbar>
      
      <div id="wrap">
        <div className='main'>
          <HomeView />
        </div>
      </div>
    </div>
  );
}


