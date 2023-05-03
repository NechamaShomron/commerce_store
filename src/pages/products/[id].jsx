import { React, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../components/Product/ProductDetails.module.css';

export default function productDetails({ product }) {
  const [singleProduct, setSingleProduct] = useState(product);

  useEffect(() => {
    setSingleProduct(product);
  }, [product]);
  return (
    <div className={styles.product_container}>
      <div className={styles.back_button_container}>
        <Link className={styles.back_button} href="/products">Back to Products</Link>
      </div>
      <div className={styles.category}>
        {singleProduct && singleProduct.category}
      </div>
      <div className={styles.info_container}>
        <div className={styles.image_container}>
          <Image className={styles.image} role="presentation" loader={() => singleProduct && singleProduct.image} src={singleProduct && singleProduct.image} alt={singleProduct && singleProduct.title} layout="fill" />
          <div className={styles.price}>
            Price:
            {' '}
            {singleProduct && singleProduct.price}
            $
          </div>
        </div>
        <div className={styles.text_info}>
          <div className={styles.title}>
            {singleProduct && singleProduct.title}
          </div>
          <div className={styles.description}>
            {singleProduct && singleProduct.description}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { id: `${product.id}` },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: true };
}
export async function getStaticProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
  const product = await res.json();
  return {
    props: { product },
    revalidate: 60,
  };
}
