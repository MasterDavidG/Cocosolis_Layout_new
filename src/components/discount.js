import React from 'react';
import '../App.css';

const Discount = () => {
  const messages = [
    { id: 1, text: 'Пакетите за Black Friday са тук <3 пазарувай с 30 % отстъпка' },
    { id: 2, text: 'Не пропускайте Black Friday - пазарувай с 30 % отстъпка' }
  ];

  return (
    <section className="fixed-banner">
      <div className="discount-container">
        {messages.concat(messages).map((message, index) => (
          <div key={index} className="discount-item">
            {message.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discount;
