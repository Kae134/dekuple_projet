import React from 'react'
import styles from './CartEntreprise.module.css'
import { CgChanel } from "react-icons/cg";
import Link from "next/link";

export default function CartEntreprise2() {
  return (
    <div className={styles.cart}>
      <CgChanel className={styles.logo}/>
      <Link href="/" className={styles.link}>
        Lire plus
      </Link>
    </div>
  )
}