'use client';
import React from 'react';
import styles from './input.module.css'

type Props = {
  name: string,
  type: string,
  placeholder: string,
  isRequired: boolean
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
  isRequired: true
}

function Input(props: Props) {
  switch (props.type) {
    case "txt":
    case "text":
    case "number":
      return (
        <div className={styles.inputBox}>
          <input className={styles.input} type={props.type} id={props.name} required={props.isRequired} placeholder={props.placeholder} />
          <label className={styles.label} htmlFor={props.name}>{props.name}</label>
        </div>
      )

    case "textarea":
      return (
        <div className={styles.inputBox}>
          <textarea className={styles.input} id={props.name} required={props.isRequired} placeholder={props.placeholder} rows={3}></textarea>
          <label className={styles.label} htmlFor={props.name}>{props.name}</label>
        </div>
      )

    default:
      return;
  };
}


export default Input
