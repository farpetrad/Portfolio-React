import React, { useState } from "react";
import './Navbar.scss';

export interface NavbarProps {
    children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ children}): JSX.Element => {
    const [menuOpened, setMenuOpened] = useState<boolean>(false); 
    const [togglerMenuStyles, setTogglerMenuStyles] = useState<string>("collapsed");
    const [contentMenuStyles, setContentMenuStyles] = useState<string>("");
    const navbarTogglerClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        const opened = !menuOpened;
        setMenuOpened(menuOpened => !menuOpened);
        
        if (opened) {
            setTogglerMenuStyles("");
            setContentMenuStyles("show");
        } else {
            setTogglerMenuStyles("collapsed");
            setContentMenuStyles("");
        }
    };
    return (
      <div id="navbar-component">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-0">
            <div className="navbar-header my-2">
                <a className="navbar-brand ms-5 me-0" href="/" title="Brand Logo">Neal Cynkus</a>
            </div>

            <button
                className={'navbar-toggler ml-auto ' + togglerMenuStyles }
                type="button"
                id="navbar-toggler"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={(event) => navbarTogglerClicked(event)}>
                <span className="navbar-toggler-icon" />
            </button>

            <div
                className={'collapse navbar-collapse pl-2 ' + contentMenuStyles}
                id="navbarContent">
                <div className="navbar-nav ms-auto" style={{color: 'white'}}>
                    {children}
                </div>
            </div>
        </nav>
      </div>
    );
  }
  