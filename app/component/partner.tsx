import Image from 'next/image'
import React from 'react'
import styles from './partner.module.css'

type Props = {
  partnerName: string;
  img_url: string;
}
function Partner(props: Props) {
  return (
    <div className={styles.partnerWrapper}>
        <div><Image src={props.img_url} className={styles.customerImg} alt="customer" width={240} height={150}></Image></div>
        <div className={styles.partnerName}>{props.partnerName}</div>
    </div>
  )
}

export default Partner