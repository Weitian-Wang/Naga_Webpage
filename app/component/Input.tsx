'use client';
import React from 'react';
import styles from './input.module.css'

type Props = {
  name: string,
  type: string,
}

Input.defaultProps = {
  type: "text",
}

function Input(props: Props) {
  return (
    <div className={styles.inputBox}>
      <input className={styles.input} type={props.type} id={props.name} />
      <label className={styles.label} htmlFor={props.name}>{props.name}</label>
    </div>
  )
}


export default Input
