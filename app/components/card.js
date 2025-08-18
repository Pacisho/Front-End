
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Card() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cards = [
    {
      image: "/a10.jpg",
      title: "Competition",
      description: "Discover our delightful collection",
      gradient: "linear-gradient(to bottom, #ffe6f2, #fff)",
      titleColor: "#873b6dff",
      buttonColor: "#a83381ff",
      link: "/components/competition"
    },
    {
      image: "/a11.jpg",
      title: "Championship",
      description: "Elegant designs for your space",
      gradient: "linear-gradient(to bottom, #e0c3fc, #fff)",
      titleColor: "#4d2c85ff",
      buttonColor: "#65449fff",
      link: "/components/championship"
    },
    {
      image: "/a12.jpg",
      title: "World class",
      description: "Fresh and calming aesthetics",
      gradient: "linear-gradient(to bottom, #b5ead7, #fff)",
      titleColor: "#145f50ff",
      buttonColor: "#2b7566ff",
      link: "/components/world-class"
    }
  ];

  return (
    <div className="container my-5">
      <h3 className="mb-4 text-center" style={{ color: '#2e2e2eff', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>Our Collection</h3>
      <div className="row g-4 justify-content-center">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card shadow-sm h-100"
              style={{
                borderRadius: '1rem',
                background: '#fff',
                border: 'none',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: hoveredCard === index ? 'translateY(-5px)' : 'none',
                boxShadow: hoveredCard === index ? '0 10px 20px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="card-img-container"
                style={{
                  overflow: 'hidden',
                  height: '240px'
                }}
              >
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={`Card ${index + 1}`}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </div>
              <div
                className="card-body text-center"
                style={{
                  background: card.gradient,
                  padding: '1.5rem 1rem'
                }}
              >
                <h5 style={{ color: card.titleColor, fontFamily: 'Poppins, sans-serif', fontWeight: '500', marginBottom: '0.5rem' }}>
                  {card.title}
                </h5>
                <p className="card-text" style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {card.description}
                </p>
                <Link href={card.link} legacyBehavior>
                  <a
                    className="btn btn-sm"
                    style={{
                      background: 'white',
                      color: card.buttonColor,
                      borderRadius: '2rem',
                      padding: '0.25rem 1rem',
                      fontSize: '0.85rem',
                      border: `1px solid ${card.buttonColor}`,
                      transition: 'all 0.3s',
                      opacity: hoveredCard === index ? 1 : 0.8,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    เพิ่มเติม
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
