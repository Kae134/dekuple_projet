import React from 'react'
import styles from './CartEntreprise.module.css'
import { FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function CartEntreprise3() {
  return (
    <div className={styles.cart}>
      <FaPhone className={styles.logo}/>
      <Link href="/" className={styles.link}>
        Lire plus
      </Link>
    </div>
  )
}