'use client'; // ต้องใส่เพื่อให้ใช้ useState/useEffect ได้

import { useState, useEffect } from 'react';
import Carousel from './components/carousel';
import Card from './components/card';

export default function Home() {
  const [menus, setMenus] = useState([]); // สร้างที่เก็บข้อมูล

  useEffect(() => {
    // ดึงข้อมูลจาก Backend ที่เราย้ายไปพอร์ต 5000
    fetch('http://localhost:3000/api/menus') 
      .then((res) => res.json())
      .then((data) => {
        setMenus(data); // เอาข้อมูลที่ได้เก็บใส่ตัวแปร menus
      })
      .catch((err) => console.error("เชื่อมต่อ API ไม่สำเร็จ:", err));
  }, []);

  return (
    <main>
      <Carousel />
      
      {/* ส่วนที่แสดง Card */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {menus.length > 0 ? (
          menus.map((item) => (
            <Card 
              key={item.id} 
              title={item.name}    // ส่งชื่อเมนูไป
              price={item.price}   // ส่งราคาไป
            />
          ))
        ) : (
          <p>กำลังโหลดข้อมูลจาก Database...</p>
        )}
      </div>
    </main>
  );
}