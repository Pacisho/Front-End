'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Import Bootstrap JS
    const bootstrap = import('bootstrap/dist/js/bootstrap.bundle.min.js');
    
    // Setup event listener for carousel
    bootstrap.then(() => {
      const carouselElement = document.getElementById('carouselExample');
      if (carouselElement) {
        carouselElement.addEventListener('slide.bs.carousel', (event) => {
          setActiveIndex(event.to);
        });
      }
    });

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const captions = [
    { description: "", buttonText: "", color: "#ff0059ff" },
    { description: "", buttonText: "", color: "#00ddffff" },
    { description: "", buttonText: "", color: "#5900ffff" }
  ];

  return (
    <div className="carousel-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '0px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', margin: '20px 0' }}>
      {/* Cute decorative elements */}
      <div className="decorative-elements">
        <div style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 10, animation: 'float 3s ease-in-out infinite', display: isMobile ? 'none' : 'block' }}>
          <div style={{ width: '50px', height: '50px', background: 'rgba(255, 133, 162, 0.7)', borderRadius: '50%', backdropFilter: 'blur(5px)' }}></div>
        </div>
        <div style={{ position: 'absolute', bottom: '25px', right: '25px', zIndex: 10, animation: 'float 4s ease-in-out infinite', display: isMobile ? 'none' : 'block' }}>
          <div style={{ width: '30px', height: '30px', background: 'rgba(126, 196, 207, 0.7)', borderRadius: '50%', backdropFilter: 'blur(5px)' }}></div>
        </div>
        <div style={{ position: 'absolute', top: '80px', right: '40px', zIndex: 10, animation: 'float 5s ease-in-out infinite', display: isMobile ? 'none' : 'block' }}>
          <div style={{ width: '20px', height: '20px', background: 'rgba(184, 146, 255, 0.7)', borderRadius: '50%', backdropFilter: 'blur(5px)' }}></div>
        </div>
      </div>

      <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
          {[ "/a5.jpg", "/a2.png", "/a4.jpg" ].map((src, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div style={{ position: 'relative' }}>
                <Image 
                  src={src} 
                  className="d-block w-100" 
                  alt={`Slide ${index + 1}`} 
                  width={1920} 
                  height={690} 
                  style={{ 
                    objectFit: 'cover', 
                    height: isMobile ? '400px' : '600px',
                    filter: 'brightness(0.9)'
                  }} 
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="prev"
          style={{
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            top: '50%',
            transform: 'translateY(-50%)',
            left: isMobile ? '10px' : '20px',
            opacity: 0.8,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ 
            filter: 'invert(1)',
            width: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px'
          }} />
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="next"
          style={{
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            top: '50%',
            transform: 'translateY(-50%)',
            right: isMobile ? '10px' : '20px',
            opacity: 0.8,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ 
            filter: 'invert(1)',
            width: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px'
          }} />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Extra styling */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .carousel-control-prev:hover, .carousel-control-next:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1.1);
        }

        button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .carousel-control-prev:hover, .carousel-control-next:hover {
            transform: translateY(-50%) scale(1.05);
          }

          button:hover {
            transform: scale(1.03);
          }
        }
      `}</style>
    </div>
  );
}
