import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import PaymentButton from './PaymentButton'

const sampleProduct = {
  _id: '6a54f5857e5243d6cbcf69b4',
  image:
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  title: 'Modern Wireless Headphones',
  description: 'Immerse yourself in rich, deep audio with a clean, comfortable design built for everyday listening.',
  price: {
    amount: 2499,
    currency: 'INR',
  },
}

const App = () => {
  const [product, setProduct] = useState(sampleProduct)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/product/get-item')
      .then((response) => {
        const products = response.data?.products
        const normalizedProduct = Array.isArray(products) ? products[0] : products
        setProduct(normalizedProduct || sampleProduct)
      })
      .catch((error) => {
        console.error('Failed to fetch product:', error)
        setProduct(sampleProduct)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const priceValue =
    typeof product?.price === 'object'
      ? product.price?.amount / 100 ?? product.price?.value ?? 'N/A'
      : product?.price ?? 'N/A'

  return (
    <div className="app-shell">
      {loading ? (
        <div className="product-card loading-card">Loading product...</div>
      ) : product ? (
        <article className="product-card">
          <div className="product-image-wrap">
            <img className="product-image" src={product.image} alt={product.title} />
            <span className="product-badge">Featured</span>
          </div>

          <div className="product-content">
            <p className="product-label">Premium Product</p>
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description">{product.description}</p>

            <div className="product-footer">
              <div>
                <span className="price-label">Price</span>
                <div className="price-value">₹{priceValue}</div>
              </div>

                 <PaymentButton/>
              {/* <button className="buy-button" type="button">
                <PaymentButton/>
              </button> */}
            </div>
          </div>
        </article>
      ) : (
        <div className="product-card empty-card">No product available</div>
      )}
    </div>
  )
}

export default App