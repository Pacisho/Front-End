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
          <h2 style={styles.heading}>3. ประวัติและเส้นทางสู่แชมป์โลก</h2>
          <p>
            <strong>Attack All Around (AAA)</strong> เป็นทีมอีสปอร์ตชั้นนำของประเทศไทย ที่ได้รับการยอมรับในระดับโลกจากผลงานอันยอดเยี่ยม โดยเฉพาะในเกม <strong>Free Fire</strong> ซึ่งเป็นเกมที่สร้างชื่อเสียงให้กับพวกเขามากที่สุด
          </p>
          <p>
            ทีม AAA ก่อตั้งขึ้นในปี 2014 และได้เข้าร่วมการแข่งขันเกมต่างๆ มาอย่างยาวนาน แต่ได้เริ่มเข้าสู่สังเวียน Free Fire อย่างจริงจังในปี 2021 หลังจากที่พวกเขาได้คว้าตัวผู้เล่นที่มีฝีมือเข้ามาเป็นส่วนหนึ่งของทีม
          </p>
          <p>
            เส้นทางของพวกเขาไม่ได้ราบรื่นนัก ในปี 2021 พวกเขาพลาดโอกาสในการคว้าแชมป์และต้องตกรอบในรายการ Free Fire World Series 2021 Singapore เนื่องจากปัญหาด้านอายุของผู้เล่น ทำให้พวกเขาไม่มีโอกาสแสดงศักยภาพอย่างเต็มที่
          </p>
          <p>
            อย่างไรก็ตาม ทีมได้ใช้ความผิดหวังครั้งนั้นเป็นแรงผลักดันและกลับมาแข็งแกร่งกว่าเดิม พวกเขาได้โค้ชอย่าง <strong>Jazper</strong> เข้ามาช่วยวางแผนและพัฒนากลยุทธ์ จนสามารถทำผลงานได้อย่างยอดเยี่ยมและคว้าสิทธิ์ไปแข่งขันในรายการระดับโลกอีกครั้ง
          </p>
          <h3 style={{ marginTop: "24px", marginBottom: "12px", color: "#00219aff" }}>ความสำเร็จสูงสุด: แชมป์โลก Free Fire</h3>
          <p>
            ความสำเร็จที่ยิ่งใหญ่ที่สุดของ AAA คือการคว้าแชมป์ <strong>Free Fire World Series 2022 Sentosa</strong> ที่ประเทศสิงคโปร์ เมื่อวันที่ 21 พฤษภาคม 2565 โดยทีมสามารถเอาชนะทีมคู่แข่งอย่าง <strong>EVOS Phoenix</strong> ไปได้อย่างเฉียดฉิวด้วยคะแนนรวม <strong>92 ต่อ 91 คะแนน</strong> ทำให้ทีมจากประเทศไทยครองอันดับ 1 และ 2 ของโลกได้สำเร็จ
          </p>
          <p>
            นอกจากถ้วยแชมป์แล้ว ผู้เล่น <strong>JLX</strong> ของทีม AAA ยังได้รับรางวัลผู้เล่นทรงคุณค่า (MVP) ประจำการแข่งขันอีกด้วย
          </p>
          <h3 style={{ marginTop: "24px", marginBottom: "12px", color: "#00219aff" }}>สถานะในปัจจุบัน</h3>
          <p>
            หลังจากความสำเร็จในระดับโลก ทีม AAA ก็ยังคงเข้าร่วมการแข่งขันอย่างต่อเนื่อง แต่ก็มีการเปลี่ยนแปลงผู้เล่นในทีมอยู่บ่อยครั้ง ซึ่งเป็นเรื่องปกติของวงการอีสปอร์ต ในช่วงปลายปี 2024 ทีม Free Fire ของ Attack All Around ได้ประกาศแยกทางกันอย่างเป็นทางการ
          </p>
          <p>
            แม้ว่าทีมชุดแชมป์โลกอาจจะไม่ได้ลงเล่นด้วยกันแล้ว แต่ชื่อของ <strong>Attack All Around</strong> และชัยชนะใน Free Fire World Series 2022 ก็ยังคงเป็นหนึ่งในหน้าประวัติศาสตร์ที่น่าภาคภูมิใจของวงการอีสปอร์ตไทย และเป็นเครื่องพิสูจน์ถึงความสามารถระดับโลกของนักกีฬาชาวไทยได้อย่างแท้จริง
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
