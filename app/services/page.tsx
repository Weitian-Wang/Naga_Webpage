"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import Header from "../component/header"

export default function Home() {
  return (
    <div>
      {/* header */}
      <Header></Header>

      <main>

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