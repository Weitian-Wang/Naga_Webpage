
import Input from "../component/Input"
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
      {/* contact us */}
      <section id="contact" className={styles.section}>
        <div className={styles.content}>
          <Input name="Name"></Input>
          <Input name="Email"></Input>
          <Input name="Phone"></Input>
          <Input name="Service"></Input>
          <Input name="Budget"></Input>
          <Input name="Notes"></Input>
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