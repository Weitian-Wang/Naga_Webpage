'use client';
import React from 'react';
import styles from './input.module.css'

type reactProps = {
  name: string;
}

function Input(props: reactProps) {
  return (
    <div className={styles.inputBox}>
      <input className={styles.input} required type='txt' id={props.name}/>
      <label className={styles.label} htmlFor={props.name}>{props.name}</label>
    </div>
  )
}

export default Input