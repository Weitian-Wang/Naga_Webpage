"use client";
import Image from "next/image";
import Link from "next/link";
import Input from "./component/Input"
import Partner from "./component/partner";
import Header from "./component/header"
import Footer from "./component/footer"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Header></Header>

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
          <div className={styles.customerWrapper}>
            <Partner img_url="/customer1.png" partnerName="Mountain"></Partner>
            <Partner img_url="/customer2.png" partnerName="Desert"></Partner>
            <Partner img_url="/customer3.png" partnerName="Archipelago"></Partner>
          </div>
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
      <Footer></Footer>
    </main>
  );
}