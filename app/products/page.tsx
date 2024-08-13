import React, {useEffect} from 'react';
import CustomLayout from '@components/CustomLayout/CustomLayout';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './css/Products.module.css';

interface Products {
  id: number, 
  title: any, 
  slug: string,
  status: string, 
  type: string
}

const Products = async () => {

  const baseUrl = process?.env?.NEXT_PUBLIC_BASE_URL ?? '';
  const apiUrl = process?.env?.NEXT_PUBLIC_API_URL ?? '';
  const res = await fetch(`${baseUrl + apiUrl}/products`);
  const products = await res.json();

  return (
    <CustomLayout>
        <h1 className='page-title'>Products</h1>
        <div className={styles.productsList}>
          {
            products && products.map((item: any) => {
              return (
                <ProductCard
                  link={item?.link}
                  title={item?.title?.rendered} 
                />
              )
            })
          }
        </div>
    </CustomLayout>
  )
}

export default Products