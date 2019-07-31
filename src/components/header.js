import React from 'react'
import { Link } from 'gatsby';
// import './header.module.scss'

import headerStyles from './header.module.scss'

const Header = () => {
  return(
    <header className={headerStyles.header}>
      <h1 >
        <Link to='/' className={headerStyles.title}>
          Title from testSite
        </Link>
      </h1>
      <p>
          <ul className={headerStyles.navList}>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Blog</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link></li>
        </ul>
        </p>
    </header>
  )
}

export default Header