import React from 'react'
import styles from "./cardNotif.module.css";
import Link from "next/link";

export default function CardNotif() {
  return (
    <div className={styles.card}>
      <div>
        <div className="image"></div>
        <h4 className={styles.h4}>Email notifacation</h4>
      </div>
      <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, fugiat.</p>
      <Link href="/" className={styles.link}>
        Lire plus
      </Link>
    </div>
  )
}
