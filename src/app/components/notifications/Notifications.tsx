import React from 'react'
import styles from "./Notif.module.css";
import Link from "next/link";
import CardNotif from "./CardNotif";

export default function Notifications() {
  return (
    <div className={styles.card}>
      <h2 className={styles.h2}>Notification</h2>
      <CardNotif />
      <CardNotif />
      <CardNotif />
    </div>
  )
}
