import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Product.module.css';

export default function Product({ id, title, price, image }) {

    return (
        <div className={styles.product_container}>
            <div className={styles.product_image_container}>
                <Image loader={() => image} src={image} alt={title} className={styles.product_image} width={120} height={120} unoptimized={true} priority />
            </div>
            <div className={styles.product_vital_details}>
                <span className={styles.title}>{title}</span>
                <span>Price: {price}$</span>
            </div>
            <div className={styles.button_container}>
                <Link className={styles.more_info_button} href={`/products/`+id}>View Details</Link>
            </div>
        </div>
    )
}