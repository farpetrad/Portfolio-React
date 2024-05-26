import React from 'react';
import './NavItem.scss';

export interface NavItemProps {
    children?: React.ReactNode;
    label: string;
    href: string;
    target?: string;
}
export const NavItem: React.FC<NavItemProps> = ({ children, label, href, target }): JSX.Element => {
    return (
        <div className='nav-item' id="nav-item">
            <a href={href}  target={target} tabIndex={0}>
                {children ? children : label}
            </a>
        </div>
    );
};
