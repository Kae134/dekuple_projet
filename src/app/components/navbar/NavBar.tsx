import React from 'react';
import styles from "./StyleNav.module.css";
import DekupleLogo from "@/src/public/image/Dekuple_logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaHeadset, FaBell } from "react-icons/fa";
import { FaChartSimple, FaGear } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            src={DekupleLogo}
            alt="Dekuple logo"
            className={styles.img}
          />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="accueil" className={styles.navLink}><FaHome /></Link>
            </li>
            <li className={styles.li}>
              <Link href="stats" className={styles.navLink}><FaChartSimple /></Link>
            </li>
            <li className={styles.li}>
              <Link href="support" className={styles.navLink}><FaHeadset /></Link>
            </li>
            <li className={styles.li}>
              <Link href="notifications" className={styles.navLink}><FaBell /></Link>
            </li>
            <li className={styles.li}>
              <Link href="settings" className={styles.navLink}><FaGear /></Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/logout" className={styles.navLink}><RiLogoutBoxRLine /></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
