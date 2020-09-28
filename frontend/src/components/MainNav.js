import React from 'react';
import classnames from 'classnames';
import { getMenu } from 'silverstripe-gatsby-helpers';
import { Link } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"
const MainNav = () => {
    const menuItems = getMenu(1);
    return (
        <nav className="mainNav">
            <ul>
            {menuItems.map(item => (
                <li key={item.id} className={classnames({
                    current: item.isCurrent,
                    section: item.isSection,
                })}>
                    {/* <Link to={item.link}>
                        {item.SilverStripeSiteTree.menuTitle}
                    </Link> */}

                    <AniLink cover to={item.link} bg="#663399">
                        {item.SilverStripeSiteTree.menuTitle}
                    </AniLink>
                </li>
            ))}
            </ul>
        </nav>
    );
};

export default MainNav;