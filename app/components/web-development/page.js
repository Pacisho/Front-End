// WebDevelopmentPage.jsx
"use client";
import React from "react";

// เพิ่มฟอนต์ Google Fonts
import Head from "next/head";

export default function WebDevelopmentPage() {
  const styles = {
    container: {
      fontFamily: "'Kanit', sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
      paddingBottom: "40px",
    },
    header: {
      background: "linear-gradient(to right, #ff0059, #ff0000)",
      color: "white",
      padding: "40px 20px",
      textAlign: "center",
      borderBottomLeftRadius: "20%",
      borderBottomRightRadius: "20%",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    section: {
      maxWidth: "960px",
      margin: "auto",
      padding: "50px 20px",
    },
    box: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "24px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "transform 0.2s ease",
    },
    heading: {
      color: "#ff0059",
      marginBottom: "10px",
    },
    footer: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#eee",
      marginTop: "60px",
      fontSize: "14px",
    },
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={styles.container}>
        <header style={styles.header}>
          <h1>Web Development คืออะไร?</h1>
          <h4>เรียนรู้พื้นฐานของการพัฒนาเว็บไซต์</h4>
        </header>

        <section style={styles.section}>
          <div style={styles.box}>
            <h2 style={styles.heading}>1. Frontend คืออะไร?</h2>
            <p>
              Frontend คือส่วนที่ผู้ใช้เห็น เช่น หน้าเว็บ, ปุ่ม, เมนู ใช้ HTML, CSS และ
              JavaScript
            </p>
          </div>

          <div style={styles.box}>
            <h2 style={styles.heading}>2. Backend คืออะไร?</h2>
            <p>
              Backend คือส่วนเบื้องหลังของเว็บไซต์ ใช้ควบคุมข้อมูล ล็อกอิน ฐานข้อมูล เช่น
              Node.js, PHP, Python
            </p>
          </div>

          <div style={styles.box}>
            <h2 style={styles.heading}>3. Database คืออะไร?</h2>
            <p>
              Database คือที่เก็บข้อมูล เช่น รายชื่อสมาชิก รายการสั่งซื้อ ใช้ MySQL, MongoDB
              เป็นต้น
            </p>
          </div>
        </section>

        <footer style={styles.footer}>
          © 2025 WebDev Thai | สร้างโดย Phatdanai Kaeochan
        </footer>
      </div>
    </>
  );
}
