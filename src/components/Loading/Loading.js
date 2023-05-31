import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import styles from "./Loading.module.scss"

function Loading() {
  return (
    <div className={styles.loadingContainer}>
        <div className={styles.loadingIcon}>
            <AiOutlineLoading3Quarters/>
        </div>
    </div>
  )
}

export default Loading