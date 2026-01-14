'use client'; 
import { useState, useEffect } from 'react';

export default function Home() {
  const [dataList, setDataList] = useState([]); // สร้างที่เก็บข้อมูล

  useEffect(() => {
    // แก้ไข URL ตรงนี้ตามตารางที่ต้องการดึง (เช่น /api/menus)
    fetch('https://backend-virid-pi-24.vercel.app/api/menus') 
      .then((res) => res.json())
      .then((data) => {
        setDataList(data); // เก็บข้อมูลที่ได้จากฐานข้อมูลลงใน State
      })
      .catch((err) => console.error("ดึงข้อมูลจากตารางไม่สำเร็จ:", err));
  }, []);

  return (
    <main>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {dataList.map((item) => (
          <Card 
            key={item.id} 
            title={item.name}    // ชื่อต้องตรงกับคอลัมน์ในตารางฐานข้อมูลนั้นๆ
            price={item.price}   // ชื่อต้องตรงกับคอลัมน์ในตารางฐานข้อมูลนั้นๆ
          />
        ))}
      </div>
    </main>
  );
}