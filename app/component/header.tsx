import React from 'react'
import styles from './header.module.css'
function Header() {
  return (
        <header className={styles.siteHeader}>
        <h1 className={styles.logo} onClick={() => {window.location.replace("/");}}>NAGA</h1>
                {/* Small screen menu button */}
        <a className={styles.menuLink}>
          <span className={styles.bar1}></span>
          <span className={styles.bar2}></span>
          <span className={styles.bar3}></span>
        </a>
        <div className={styles.navWrapper}>
            <a href="/about" className={styles.navLabel}>About</a>
            <a href="/services" className={styles.navLabel}>Services</a>
            <a href="/partners" className={styles.navLabel}>Partners</a>
            <a href="/contact" className={styles.navLabel}>Contact</a>
        </div>
      </header>
  )
}

export default Header