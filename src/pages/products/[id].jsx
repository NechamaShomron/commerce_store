
import { useEffect, useState } from 'react';

export default function productDetails({ product }) {
    const [singleProduct, setSingleProduct] = useState(product);

    useEffect(() => {
        debugger;
        setSingleProduct(product);
    }, [product])

    return (
        <>
            <h1>{singleProduct.title}</h1>
        </>
    )
}
export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    debugger;

    const paths = products.map((product) => ({
        params: { id: `${product.id}` },
    }))

    // { fallback: false } means other routes should 404
    return { paths, fallback: true }
}
export async function getStaticProps(context) {
    const res = await fetch("https://fakestoreapi.com/products/" + context.params.id)
    const product = await res.json()
    return {
        props: { product },
        revalidate: 60
    };
}