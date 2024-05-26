import React from 'react';
import styles from './CardGraph.module.css';

interface CardGraph1Props {
  color: string;
}

export default function CardGraph({ color }: CardGraph1Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} style={{ backgroundColor: color }}>
        
      </div>
    </div>
  );
}
