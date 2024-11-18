import React from 'react';
import '../App.css';

const LargeProducts = () => {
  const largeProducts = [
    { id: 1, name: 'Голям Продукт 1', description: 'Описание на голям продукт 1', image: 'product1.jpg', link: '#' },
    { id: 2, name: 'Голям Продукт 2', description: 'Описание на голям продукт 2', image: 'product1.jpg', link: '#' },
    { id: 3, name: 'Голям Продукт 3', description: 'Описание на голям продукт 3', image: 'product1.jpg', link: '#' }
  ];

  return (
    <section className="large-products">
      <h2>Големи Продукти</h2>
      <div className="large-product-list">
        {largeProducts.map((product) => (
          <div key={product.id} className="large-product-item">
            <img src={product.image} alt={product.name} className="large-product-img" />
            <div className="large-product-info">
              <h3 className="large-product-name">{product.name}</h3>
              <p className="large-product-description">{product.description}</p>
              <div className="large-product-footer">
                <a href={product.link} className="large-buy-now-btn">Купи сега</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LargeProducts;
