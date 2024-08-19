import React from 'react';
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
  const apiUrl = process?.env?.NEXT_PUBLIC_WC_API_URL ?? '';
  const consumerKey = process?.env?.NEXT_PUBLIC_WC_OAUTH_KEY ?? '';
  const signatureMethod = process?.env?.NEXT_PUBLIC_WC_OAUTH_SIG_METHOD ?? '';
  const oAuthNonce = process?.env?.NEXT_PUBLIC_WC_OAUTH_NONCE ?? '';
  const oAuthVersion = process?.env?.NEXT_PUBLIC_WC_OAUTH_VERSION ?? '';
  const oAuthSignature = process?.env?.NEXT_PUBLIC_WC_OAUTH_SIGNATURE ?? '';

  const res = await fetch(`${baseUrl}${apiUrl}/products?oauth_consumer_key=${consumerKey}&oauth_signature_method=${signatureMethod}&oauth_timestamp=1723646210&oauth_nonce=${oAuthNonce}&oauth_version=${oAuthVersion}&oauth_signature=${oAuthSignature}`);
  const products = await res.json();

  return (
    <div>Hello World</div>
  )
}

export default Products