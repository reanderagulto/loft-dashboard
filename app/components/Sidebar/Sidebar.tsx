'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebarNavContainer}>
        <div className={styles.sidebarInnerContainer}>
            <Link href="/">
                <Image
                    src="/loft-logo.svg"
                    alt="Loft Logo"
                    className=""
                    width={98}
                    height={26}
                    priority
                />
            </Link>
            <nav>
                <ul>
                    <li className={styles.listItem}><Link href="/">Dashboard</Link></li>
                    <li className={styles.listItem}><Link href="/subscriptions">Subscription</Link></li>
                    <li className={styles.listItem}><Link href="/products">Products</Link></li>
                    <li className={styles.listItem}><Link href="/special-offers">Special Offers</Link></li>
                    <li className={styles.listItem}><Link href="#">Rate Us</Link></li>
                </ul>
            </nav>
        </div>
        <Link className={styles.listItem} href="#">Help</Link>
    </div>
  )
}

export default Sidebar