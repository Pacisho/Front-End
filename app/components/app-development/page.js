"use client";
import React from "react";

export default function AppDevelopmentPage() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif", // ฟอนต์สวยขึ้น
      backgroundColor: "#f9f9f9",
      color: "#333",
      paddingBottom: "40px",
    },
    header: {
      background: "linear-gradient(to right, #25bb48ff, #1cb386ff)",
      color: "white",
      padding: "30px 20px",
      textAlign: "center",
      borderBottomLeftRadius: "20% 10%", // มุมโค้ง 20%
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
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    },
    heading: {
      color: "#25bb48",
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
      {/* ส่วนหัว */}
      <header style={styles.header}>
        <h1>App Development คืออะไร?</h1>
        <p>การพัฒนาแอปพลิเคชันบนมือถือและอุปกรณ์อื่น ๆ</p>
      </header>

      {/* เนื้อหา */}
      <section style={styles.section}>
        <div style={styles.box}>
          <h2 style={styles.heading}>1. Mobile App Development</h2>
          <p>
            การพัฒนาแอปสำหรับอุปกรณ์พกพา เช่น iOS และ Android โดยใช้เครื่องมืออย่าง Flutter, React Native, Kotlin, Swift
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>2. Native vs Cross-platform</h2>
          <p>
            - Native: เขียนแยกตามระบบ (iOS = Swift, Android = Kotlin)
            <br />
            - Cross-platform: เขียนครั้งเดียวใช้ได้หลายระบบ เช่น React Native, Flutter
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>3. Backend สำหรับแอป</h2>
          <p>
            แอปส่วนใหญ่ต้องมีเซิร์ฟเวอร์รองรับ เช่น API, ฐานข้อมูล (Firebase, Supabase, Node.js, PHP)
          </p>
        </div>
      </section>

      {/* ท้ายหน้า */}
      <footer style={styles.footer}>
        © 2025 AppDev Thai | Phatdanai Kaeochan
      </footer>
    </div>
  );
}
