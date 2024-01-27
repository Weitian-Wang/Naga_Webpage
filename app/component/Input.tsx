'use client';
import React from 'react';
import styles from './input.module.css'
function Card() {
  return (
    <div className={styles.inputBox}>
      <input className={styles.input} required type='txt' id='uname'/>
      <label className={styles.label} htmlFor='uname'>First Name</label>
    </div>
  )
}

export default Card