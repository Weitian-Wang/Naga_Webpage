import React from 'react'
import styles from './header.module.css'
import { useState } from 'react';

function Header() {
  const [navExpand, setNavExpand] = useState(false);

  return (
        <header className={`${styles.siteHeader} ${navExpand?'':styles.active}`}>
        <h1 className={styles.logo} onClick={() => {window.location.replace("/");}}>NAGA</h1>
                {/* Small screen menu button */}
        <a className={`${styles.menuLink} ${navExpand?'':styles.active}`} onClick={() => {setNavExpand(!navExpand)}}>
            <span className={`${styles.bar1} ${navExpand?'':styles.active}`}></span>
            <span className={`${styles.bar2} ${navExpand?'':styles.active}`}></span>
            <span className={`${styles.bar3} ${navExpand?'':styles.active}`}></span>
        </a>
        <div className={`${styles.navWrapper} ${navExpand?'':styles.active}`}>
            <a href="/about" className={styles.navLabel}>About</a>
            <a href="/services" className={styles.navLabel}>Services</a>
            <a href="/partners" className={styles.navLabel}>Partners</a>
            <a href="/contact" className={styles.navLabel}>Contact</a>
        </div>
      </header>
  )
}

export default Header