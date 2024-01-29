import Image from "next/image";
import Link from "next/link";
import Input from "./component/Input"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div>
      {/* header */}
      <header className={styles.siteHeader}>
        <h1 className={styles.logo}>NAGA</h1>
        <div className={styles.navWrapper}>
            <a href="#about" className={styles.navLabel}>About</a>
            <a href="#services" className={styles.navLabel}>Services</a>
            <a href="#partners" className={styles.navLabel}>Partners</a>
            <a href="#contact" className={styles.navLabel}>Contact</a>
        </div>
      </header>

      <main>
      {/* slogan and branding */}
      <section id="about" className={styles.section}>
        <div className={styles.content}>
          <h2>Unlock Your Brand's Potential with NAGA</h2>

          <h3>Navigate</h3>
          <h3>Audience</h3>
          <h3>Grow Brand</h3>
          <h3>Awareness</h3>
        </div>
      </section>

      {/* services */}
      <section id="services" className={styles.section}>
        <div className={styles.content}>
          <div>
            Social Media Management
            <li>Instagram</li>
            <li>Facebook</li>
            <li>TikTok</li>
            <p>Maximize your audience outreach and engagement with our professional visual designer and writer.</p>
            <p>Guaranteed consistency with your branding identity, color palette, and aesthetics.</p>
          </div>

          <div>
            Search Engine Optimization
            <p>Optimize your site source code for smoother user experience.</p>
            <p>Improve site structure for boosted search engine visibility.</p>
          </div>

          <div>
            Paid Promotion
            <p>Utilizing our influencer reservoir to amplify your campaign.</p>
            <p>Precision-target your audience for maximum impact.</p>
            <p>Hands-free, leave the legal part to us.</p>
          </div>
        </div>
      </section>

      {/* partners and cases */}
      <section id="partners" className={styles.section}>
        <div className={styles.content}>
        </div>
      </section>

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