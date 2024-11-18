import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Продукт 1',
    description: 'Описание на продукт 1',
    price: 45.00,
    image: 'product1.jpg',
    link: '#'
  },
  {
    id: 2,
    name: 'Продукт 2',
    description: 'Описание на продукт 2',
    price: 50.00,
    image: 'product2.jpg',
    link: '#'
  },
  // Добавете още продукти по същия начин
];

const ProductList = () => {
  return (
    <section className="product-list">
      <h2>Нашите продукти</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
