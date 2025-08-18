"use client";
import React from "react";

export default function UiUxDesignPage() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
      paddingBottom: "40px",
    },
    header: {
      background: "linear-gradient(to right, #fd7e14, #ffc107)",
      color: "white",
      padding: "30px 20px",
      textAlign: "center",
      borderBottomLeftRadius: "20% 10%",
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
      color: "#fd7e14",
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
        <h1>UI/UX Design คืออะไร?</h1>
        <p>ออกแบบประสบการณ์ใช้งานและหน้าตาให้ดีขึ้นสำหรับผู้ใช้</p>
      </header>

      <section style={styles.section}>
        <div style={styles.box}>
          <h2 style={styles.heading}>1. UI (User Interface) คืออะไร?</h2>
          <p>
            คือการออกแบบหน้าตาของแอปหรือเว็บไซต์ เช่น สี ปุ่ม ไอคอน ตัวอักษร เพื่อให้ดูดี ใช้งานง่าย
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>2. UX (User Experience) คืออะไร?</h2>
          <p>
            คือการออกแบบประสบการณ์ผู้ใช้ ให้ใช้งานแล้วรู้สึกดี ไม่สับสน เช่น การจัดเมนูให้หาเจอง่าย ลดขั้นตอนการทำงาน
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>3. เครื่องมือที่นิยมใช้</h2>
          <p>
            เช่น Figma, Adobe XD, Sketch สำหรับออกแบบ UI <br />
            และใช้การทดสอบผู้ใช้ (User Testing) เพื่อปรับ UX
          </p>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2025 UIUX Thai | Phatdanai Kaeochan
      </footer>
    </div>
  );
}
