import React from 'react'
import styles from './CartEntreprise.module.css'
import { SiVolkswagen } from "react-icons/si";
import Link from "next/link";

export default function CartEntreprise1() {
  return (
    <div className={styles.cart}>
      <SiVolkswagen className={styles.logo}/>
      <Link href="/" className={styles.link}>
        Lire plus
      </Link>
    </div>
  )
}