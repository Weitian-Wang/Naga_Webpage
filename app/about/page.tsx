import styles from "./page.module.css"

export default function Home() {
  return (
    <div>
      {/* header */}
      <header className={styles.siteHeader}>
        <h1 className={styles.logo}>NAGA</h1>
        <div className={styles.navWrapper}>
            <a href="/about" className={styles.navLabel}>About</a>
            <a href="/services" className={styles.navLabel}>Services</a>
            <a href="/partners" className={styles.navLabel}>Partners</a>
            <a href="/contact" className={styles.navLabel}>Contact</a>
        </div>
      </header>

      <main>
      {/* slogan and branding */}
      <section id="about" className={styles.section}>
        <div className={styles.content}>
          <h2>Unlock Your Brand&apos;s Potential with NAGA</h2>

          <h3>Navigate</h3>
          <h3>Audience</h3>
          <h3>Grow Brand</h3>
          <h3>Awareness</h3>
        </div>
      </section>
      {/* main location? */}
      </main>
      {/* copy right */}
      <div className={styles.footer}>
        <div>
          <p>© 2024 NAGA VENTURES LLC. All rights reserved.</p>
          <p>Registered Address 30 N Gould St Ste R, Sheridan, Wyoming 82801</p>
          <p>Phone: 626-0182-NAGA</p>
          <p>Email: customer_support@naga.com</p>
        </div>
      </div>
    </div>
  );
}