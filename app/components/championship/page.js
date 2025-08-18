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
          <h2 style={styles.heading}>3. เส้นทางสู่แชมป์โลก Free Fire</h2>
          <p>
            <strong>ชัยชนะของ AAA ในครั้งนี้ไม่ได้มาอย่างง่ายดาย</strong> แต่เป็นผลลัพธ์จากความพยายามและการเรียนรู้จากความผิดพลาดในอดีต
          </p>
          <p>
            ก่อนหน้านี้ในรายการ Free Fire World Series 2021 Singapore ซึ่งจัดขึ้นปีก่อนหน้า AAA ก็ได้สิทธิ์เข้าร่วม แต่ต้องเผชิญกับอุปสรรคสำคัญเมื่อผู้เล่นตัวหลักมีอายุไม่ถึงเกณฑ์ ทำให้ต้องลงแข่งโดยขาดกำลังสำคัญไป นอกจากนี้ทีมก็ไม่มีโค้ช ทำให้ผลงานออกมาไม่เป็นที่น่าพอใจนัก
          </p>
          <p>
            อย่างไรก็ตาม พวกเขาได้นำประสบการณ์อันเจ็บปวดนั้นมาเป็นบทเรียน และกลับมาฝึกซ้อมอย่างหนัก พร้อมกับการเปลี่ยนแปลงที่สำคัญคือการได้โค้ชอย่าง "Jazper" เข้ามาช่วยวางแผนและแก้เกม ซึ่งทำให้ฟอร์มการเล่นของทีมแข็งแกร่งขึ้นอย่างเห็นได้ชัด
          </p>
          <p>
            ทีม AAA ได้แสดงให้เห็นถึงพัฒนาการอย่างก้าวกระโดดในการแข่งขัน Free Fire Pro League Thailand Season 6 แม้ว่าจะจบในอันดับรองชนะเลิศ แต่ผลงานนี้ก็เพียงพอที่จะทำให้พวกเขาได้กลับไปแก้ตัวบนเวทีโลกอีกครั้งที่สิงคโปร์
          </p>
          <h3 style={{ marginTop: "24px", marginBottom: "12px", color: "#00219aff" }}>วินาทีแห่งประวัติศาสตร์</h3>
          <p>
            การแข่งขันรอบ Grand Finals ของ FFWS 2022 Sentosa มีความเข้มข้นอย่างที่ไม่เคยมีมาก่อน โดยมีทีมจากประเทศไทย 2 ทีมคือ AAA และ EVOS Phoenix แข่งขันกันอย่างสูสีตลอดทั้ง 6 เกม
          </p>
          <p>
            AAA อาศัยการเล่นที่ชาญฉลาดและรอบคอบ พวกเขาเก็บคะแนนได้อย่างสม่ำเสมอ ทั้งจากการสังหารคู่แข่งและการเอาตัวรอดจนจบเกม
          </p>
          <p>
            EVOS Phoenix ที่เป็นแชมป์เก่าก็ไม่ยอมแพ้ ไล่ตามมาติด ๆ และสร้างความตื่นเต้นให้กับผู้ชมด้วยการทำคะแนนไล่บี้กันมาทุกเกม
          </p>
          <p>
            ในที่สุดเมื่อจบการแข่งขันทั้ง 6 เกม AAA ก็สามารถทำคะแนนรวมได้ <strong>92 คะแนน</strong> เอาชนะ EVOS Phoenix ที่ทำไป <strong>91 คะแนน</strong> ไปได้เพียงแค่ 1 คะแนนเท่านั้น ซึ่งเป็นแต้มที่สูสีที่สุดครั้งหนึ่งในประวัติศาสตร์การแข่งขัน Free Fire World Series
          </p>
          <p>
            ชัยชนะครั้งนี้ทำให้ AAA ได้รับเงินรางวัล <strong>500,000 ดอลลาร์สหรัฐ (ประมาณ 17 ล้านบาท)</strong> และที่สำคัญกว่านั้นคือการประกาศศักดาให้ทั่วโลกเห็นว่าประเทศไทยคือหนึ่งในมหาอำนาจของวงการ Free Fire
          </p>
          <h3 style={{ marginTop: "24px", marginBottom: "12px", color: "#00219aff" }}>ความสำคัญของชัยชนะ</h3>
          <p>
            ชัยชนะของ AAA ไม่ได้เป็นเพียงแค่การคว้าถ้วยรางวัล แต่ยังเป็นแรงบันดาลใจให้กับนักกีฬาอีสปอร์ตชาวไทยหลายคน มันเป็นข้อพิสูจน์ว่าความพยายาม การเรียนรู้จากความผิดพลาด และการทำงานเป็นทีมจะนำไปสู่ความสำเร็จสูงสุดได้เสมอ
          </p>
          <p>
            หลังจากคว้าแชมป์โลก ทีม AAA ได้รับการยอมรับและคำชื่นชมอย่างกว้างขวาง ทั้งจากแฟน ๆ และจากคนในวงการกีฬา ทำให้ชื่อของ Attack All Around เป็นที่รู้จักในระดับโลกอย่างเต็มภาคภูมิ
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
