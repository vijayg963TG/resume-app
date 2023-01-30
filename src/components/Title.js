import React from 'react'
import styles from "../styles/Home.module.css";

export const Title = ({title}) => {
  return (
    <div className={styles.title}>{title}</div>
    // <div contentEditable={true} suppressContentEditableWarning={true} className={styles.title}>{title}</div>
  )
}
