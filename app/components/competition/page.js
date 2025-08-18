"use client";
import React from "react";

export default function EsportsAaaPage() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
      paddingBottom: "40px",
    },
    header: {
      background: "linear-gradient(to right, #1000ecff, #0a0060ff)",
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
      color: "#00219aff",
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
        <h1>Attack All Around (AAA)</h1>
        <p>ทีมอีสปอร์ตชั้นนำของประเทศไทยและระดับโลก</p>
      </header>

      {/* เนื้อหา */}
      <section style={styles.section}>
        <div style={styles.box}>
          <h2 style={styles.heading}>1. ภาพรวมองค์กร Attack All Around</h2>
          <p>
            AAA เป็นองค์กรอีสปอร์ตมืออาชีพจากประเทศไทย ก่อตั้งขึ้นในปี 2014 เริ่มจากทีมแข่งเกม Point Blank ก่อนจะขยายไปสู่หลายเกมและกลายเป็นทีมแถวหน้าในเอเชียตะวันออกเฉียงใต้ โดยมีรายได้จากการแข่งขันมากกว่า 870,000 ดอลลาร์สหรัฐฯ
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>2. ผลงานและเกมที่โดดเด่น</h2>
          <p>
            <strong>Free Fire:</strong><br />
            - แชมป์โลก Free Fire World Series 2022 Sentosa<br />
            - รองแชมป์ Free Fire Pro League Thailand Season 6<br />
            - แชมป์ Pro League Thailand 2023: Mid Season<br />
            <br />
            <strong>Point Blank:</strong><br />
            - แชมป์ Point Blank Thailand Championship 2019<br />
            - อันดับ 3 Point Blank 2023 International Championship<br />
            <br />
            <strong>VALORANT:</strong><br />
            - อันดับ 3 VALORANT Challengers 2023: Thailand Split 1<br />
            <br />
            <strong>PUBG Series:</strong><br />
            - อันดับ 5 PUBG Asia Super Cup 2023 Summer
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>3. อุปสรรคและเส้นทางสู่แชมป์โลก Free Fire</h2>
          <p>
            ในปี 2021 ทีม AAA ต้องเจอกับอุปสรรคสำคัญเมื่อผู้เล่นหลักอายุไม่ถึงเกณฑ์ และยังไม่มีโค้ช ทำให้ผลงานตกต่ำในรายการ Free Fire World Series 2021 แต่พวกเขานำประสบการณ์มาเรียนรู้และกลับมาแข็งแกร่งในปี 2022 ด้วยการคว้าแชมป์โลกจากรายการ Free Fire World Series 2022 Sentosa พร้อมกับโค้ช Jazper
          </p>
        </div>

        <div style={styles.box}>
          <h2 style={styles.heading}>4. ทีมในปัจจุบัน</h2>
          <p>
            ปัจจุบัน AAA ยังคงมีทีมในหลายเกมและยังเป็นหนึ่งในองค์กรอีสปอร์ตที่มีชื่อเสียงมากที่สุดของประเทศไทย โดยยังคงมุ่งมั่นในการแข่งขันระดับประเทศและระดับนานาชาติอย่างต่อเนื่อง
          </p>
        </div>
      </section>

      {/* ท้ายหน้า */}
      <footer style={styles.footer}>
        © 2025 Attack All Around Fanpage | Phatdanai Kaeochan
      </footer>
    </div>
  );
}
