import React from 'react';
import '../App.css';

const Sponsors = () => {
  const sponsors = [
    { id: 1, name: 'Спонсор 1', logo: 'sponsor1.jpg' },
    { id: 2, name: 'Спонсор 2', logo: 'sponsor2.jpg' },
    { id: 3, name: 'Спонсор 3', logo: 'sponsor3.jpg' },
    { id: 4, name: 'Спонсор 4', logo: 'sponsor4.jpg' },
    { id: 5, name: 'Спонсор 5', logo: 'sponsor5.jpg' }
  ];

  return (
    <section id="sponsors" className="sponsors">
      <div className="sponsors-container">
        {sponsors.concat(sponsors).map((sponsor, index) => ( // Дублираме списъка
          <div key={index} className="sponsor-item">
            <img src={sponsor.logo} alt={sponsor.name} style={{ width: '100px', height: 'auto' }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
