import React from 'react'
import styles from "./StyleNav2.module.css"
import DekupleLogo from "@/src/public/image/Dekuple_logo.png"
import Link from "next/link"
import Image from "next/image"
import { FaHome, FaHeadset, FaBell  } from "react-icons/fa";
import { FaChartSimple, FaGear } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";


export default function NavBarv2() {
  return (
    <div className={styles.header}>
        <div className={styles.nav_top}>
            <Link href="#" className={styles.logo}>
                <Image
                    src={DekupleLogo}
                    alt="Logo Dekuple"
                    className={styles.img}
                />
            </Link>

            <div className={styles.nav}>
                <div className={styles.ul}>
                    <div className={styles.li}><Link href="#" className={styles.nav_link}><FaHome /></Link></div>
                    <div className={styles.li}><Link href="#" className={styles.nav_link}><FaChartSimple /></Link></div>
                    <div className={styles.li}><Link href="#" className={styles.nav_link}><FaHeadset /></Link></div>
                    <div className={styles.li}><Link href="#" className={styles.nav_link}><FaBell /></Link></div>
                    <div className={styles.li}><Link href="#" className={styles.nav_link}><FaGear /></Link></div>
                </div>
            </div>
        </div>

        <div className={styles.nav_bot}>
            <div className={styles.nav}>
                <div className={styles.ul}>
                    <div className={styles.li}><Link href="#" className={styles.nav_link}><RiLogoutBoxRLine /></Link></div>
                </div>
            </div>
        </div>
    </div>
  )
}