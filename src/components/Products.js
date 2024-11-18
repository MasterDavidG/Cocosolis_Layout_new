import React, { useState } from 'react';
import '../App.css'; // Увери се, че стиловете са добавени в този файл

const Products = () => {
  const allProducts = [
    { id: 1, name: 'Продукт 1Продукт 1Продукт 1', description: 'Описание на продукта 1', image: 'product1.jpg', link: '#' },
    { id: 2, name: 'Продукт 2', description: 'Описание на продукта 2', image: 'product1.jpg', link: '#' },
    { id: 3, name: 'Продукт 3', description: 'Описание на продукта 3', image: 'product1.jpg', link: '#' },
    { id: 4, name: 'Продукт 4', description: 'Описание на продукта 4', image: 'product1.jpg', link: '#' },
    { id: 5, name: 'Продукт 5', description: 'Описание на продукта 5', image: 'product1.jpg', link: '#' },
    { id: 6, name: 'Продукт 6', description: 'Описание на продукта 6', image: 'product1.jpg', link: '#' },
    { id: 7, name: 'Продукт 7', description: 'Описание на продукта 7Описание на продукта 7', image: 'product1.jpg', link: '#' },
    { id: 8, name: 'Продукт 8', description: 'Описание на продукта 8', image: 'product1.jpg', link: '#' },
  ];

  const [visibleProducts, setVisibleProducts] = useState(4);

  const showMoreProducts = () => {
    setVisibleProducts((prevValue) => prevValue + 4);
  };

  return (
    <section id="products" className="products">
      <h2>Нашите Продукти</h2>
      <div className="product-list">
        {allProducts.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <a href={product.link} className="buy-now-btn">Купи сега</a>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < allProducts.length && (
        <button className="show-more-btn" onClick={showMoreProducts}>
          Покажи още
        </button>
      )}
    </section>
  );
};

export default Products;
