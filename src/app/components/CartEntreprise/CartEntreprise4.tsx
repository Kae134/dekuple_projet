import React from 'react'
import styles from './CartEntreprise.module.css'
import { CgShapeHexagon } from "react-icons/cg";
import Link from "next/link";

export default function CartEntreprise4() {
  return (
    <div className={styles.cart}>
      <CgShapeHexagon className={styles.logo}/>
      <Link href="/" className={styles.link}>
        Lire plus
      </Link>
    </div>
  )
}