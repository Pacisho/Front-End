'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('all');

  const tourServices = [
    {
      id: 1,
      title: "AAA",
      description: "สัมผัสถึงการแข่งขันที่เข้มข้นและความสนุกสนานของทีม AAA กับเรา",
      image: "/a25.jpg",
      duration: "ล่าสุด",
      price: "ข้อมูลล่าสุด",
      category: "cultural",
      highlights: [
        "ดวลฝีมือกับทีมระดับแนวหน้าในสนามแข่งขันจริง",
        "รับชมแมตช์เดือดแบบสด ๆ พร้อมบรรยากาศสุดมัน",
        "เรียนรู้กลยุทธ์จากโปรเพลเยอร์และโค้ชชื่อดัง",
      ]
    },
    {
      id: 2,
      title: "EVOS",
      description: "สัมผัสถึงการแข่งขันที่เข้มข้นและความสนุกสนานของทีม EVOS กับเรา",
      image: "/a26.jpg",
      duration: "ล่าสุด",
      price: "ข้อมูลล่าสุด",
      category: "adventure",
      highlights: [
        "ดวลฝีมือกับทีมระดับแนวหน้าในสนามแข่งขันจริง",
        "รับชมแมตช์เดือดแบบสด ๆ พร้อมบรรยากาศสุดมัน",
        "เรียนรู้กลยุทธ์จากโปรเพลเยอร์และโค้ชชื่อดัง",
      ]
    },
    {
      id: 3,
      title: "ESANLOVEGROUP",
      description: "เป็นกรุ๊ปของนักแสดงที่มีความเก่งกาจและมีความสามารถในการแสดงที่หลากหลาย",
      image: "/a27.jpg",
      duration: "ล่าสุด",
      price: "ข้อมูลล่าสุด",
      category: "beach",
      highlights: [
        "ละครสั้นเรื่อง เป็นเพื่อนให้ได้ก่อน",
        "เพลงใหม่ล่าสุดจากวง Esan Love Group",
        "ละครสั้นเรื่อง น้องชาย นายเสื้อซ็อป",
      ]
    },
    {
      id: 4,
      title: "PoonGodx2",
      description: "เป็นคนที่มีความสามารถในการเล่นเกม Free Fire เป็นตัวแทนระดับประเทศ ที่มีอายุน้อยที่สุดเพียง 14 ปี",
      image: "/a17.jpg",
      duration: "ล่าสุด",
      price: "ข้อมูลล่าสุด",
      category: "cultural",
      highlights: [
        "เล่นเกม Free Fire ระดับโปร",
        "เข้าร่วมการแข่งขันระดับประเทศ",
        "เข้าร่วมการแข่งขันระดับโลก",
      ]
    },
    {
      id: 5,
      title: "THE THECRUZ",
      description: "เป็นคนที่มีความสามารถในการเล่นเกม Free Fire เป็นตัวแทนระดับโลก",
      image: "/a28.jpg",
      duration: "ล่าสุด",
      price: "ข้อมูลล่าสุด",
      category: "adventure",
      highlights: [
        "เล่นเกม Free Fire ระดับโปร",
        "เข้าร่วมการแข่งขันระดับประเทศ",
        "เข้าร่วมการแข่งขันระดับโลก",
      ]
    },
    {
      id: 6,
      title: "KERORO",
      description: "เป็นคนที่มีความสามารถในการเล่นเกม Free Fire เป็นตัวแทนระดับโลก",
      image: "/a19.jpg",
      duration: "ล่าสุด",
      price: "ข้อมูลล่าสุด",
      category: "cultural",
      highlights: [
        "เล่นเกม Free Fire ระดับโปร",
        "เข้าร่วมการแข่งขันระดับประเทศ",
        "เข้าร่วมการแข่งขันระดับโลก",
      ]
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? tourServices
    : tourServices.filter(service => service.category === activeCategory);

  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: 'bi-grid-fill', color: '#ff003cff' },
    { id: 'cultural', name: 'AAA', icon: 'bi-controller', color: '#00b9d5ff' },
    { id: 'adventure', name: 'EVOS', icon: 'bi-trophy-fill', color: '#5900ffff' },
    { id: 'beach', name: 'ESANLOVEGROUP', icon: 'bi-people-fill', color: '#ff003cff' }
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#2f2f2fff' }}>บริการของเรา</h1>
        <p className="lead mb-4">ค้นหาข้อมูลของนักแข่งที่คุณสนใจหรือนักแสดงที่ชื่นชอบกับเรา</p>

        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`btn px-4 py-2 d-flex align-items-center gap-2 ${activeCategory === category.id ? 'text-white' : 'text-dark'}`}
              style={{
                background: activeCategory === category.id ? category.color : 'transparent',
                borderRadius: '30px',
                border: `1px solid ${category.color}`,
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`bi ${category.icon}`}></i>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */} 
      <div className="row g-4">
        {filteredServices.map((service) => (
          <div key={service.id} className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
              <div className="position-relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 p-3 w-100" style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: 'white'
                }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge rounded-pill" style={{
                      background: '#000',
                      padding: '8px 12px'
                    }}>
                      <i className={`bi ${
                        service.category === 'cultural' ? 'bi-controller' :
                        service.category === 'adventure' ? 'bi-trophy-fill' : 'bi-people-fill'
                      } me-1`}></i>
                      {service.category === 'cultural' ? 'AAA' :
                       service.category === 'adventure' ? 'EVOS' : 'ESANLOVEGROUP'}
                    </span>
                    <span className="badge rounded-pill bg-white text-dark" style={{ padding: '8px 12px' }}>
                      <i className="bi bi-clock me-1"></i>
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                <h5 className="card-title mb-3">{service.title}</h5>
                <p className="card-text mb-3">{service.description}</p>
                <div className="mb-3">
                  <h6 className="mb-2">ไฮไลท์:</h6>
                  <ul className="list-unstyled">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="mb-1 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill me-2 text-success"></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-footer bg-white border-0 p-4 pt-0 d-flex justify-content-between align-items-center">
                <div className="fw-bold text-primary">{service.price}</div>
                <button className="btn btn-outline-dark rounded-pill">
                  <i className="bi bi-info-circle me-2"></i>
                  รายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
