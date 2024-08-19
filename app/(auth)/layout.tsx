import React from 'react';
import styles from './assets/Layout.module.css';

const AuthLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div className={styles.layoutContainer}>
      {children}
    </div>
  )
}

export default AuthLayout