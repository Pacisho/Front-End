"use client";
import React from "react";

export default function OtherServicesPage() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif", // เปลี่ยนฟอนต์
      backgroundColor: "#f9f9f9",
      color: "#333",
      paddingBottom: "40px",
    },
    header: {
      background: "linear-gradient(to right, #6f42c1, #e83e8c)",
      color: "white",
      padding: "30px 20px",
      textAlign: "center",
      borderBottomLeftRadius: "20% 10%", // มุมโค้งมน
      borderBottomRightRadius: "20% 10%",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
    section: {
      maxWidth: "960px",
      margin: "auto",
      padding: "40px 20px",
    },
    box: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "24px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)", // เงาดูนุ่ม
    },
    heading: {
      color: "#6f42c1",
      marginBottom: "12px",
    },
    footer: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#eee",
      marginTop: "40px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Other Services</h1>
        <p>บริการอื่น ๆ ที่เรามีเพื่อเสริมความครบวงจรของธุรกิจคุณ</p>
      </header>

      <section style={styles.section}>
        <div style={styles.box}>
          <h2 style={styles.heading}>1. SEO Optimization</h2>
          <p>
            ปรับแต่งเว็บไซต์ให้ติดอันดับ Google ช่วยให้ลูกค้าเจอคุณง่ายขึ้นด้วยเทคนิคการวางโครงสร้างเว็บไซต์ คีย์เวิร์ด และการวิเคราะห์
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>2. Web Hosting & Domain</h2>
          <p>
            บริการจดโดเมน .com, .co.th และให้เช่าพื้นที่เว็บไซต์ (Web Hosting) พร้อม SSL และระบบสำรองข้อมูล
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>3. System Maintenance</h2>
          <p>
            ดูแลและปรับปรุงเว็บไซต์/แอปให้ทันสมัย ปลอดภัย และทำงานได้ดีตลอดเวลา
          </p>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2025 DevServices Thai | Phatdanai Kaeochan
      </footer>
    </div>
  );
}
