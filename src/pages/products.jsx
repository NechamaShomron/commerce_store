import { React, useEffect, useState } from 'react';
import styles from '../../components/Product/Product.module.css';
import Product from '../../components/Product/Product';

// eslint-disable-next-line react/prop-types
export default function Products({ products }) {
  const [storeProducts, setStoreProducts] = useState(products);

  useEffect(() => {
    setStoreProducts(products);
  }, [products]);

  return (
    <div>
      <h1 className={styles.products_title}>Products</h1>
      <ul className={styles.product_list}>
        {storeProducts.map((product) => (
          <li key={product.id}>
            <Product role="presentation" id={product.id} title={product.title} price={product.price} image={product.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: { products },
    revalidate: 60,
  };
}
