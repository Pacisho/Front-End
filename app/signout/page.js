"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [tokenState, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleSignOut = () => {
    if (confirm("คุณแน่ใจหรือว่าต้องการ SignOut?")) {
      localStorage.removeItem("token");
      setToken(null);
      router.push("/login");
    }
  };

  return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      border: "2px solid #b3b3b3ff",          // ขอบสี่เหลี่ยม
      borderRadius: "20%",                // มุมโค้ง 20%
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // เงาเล็กน้อย
      backgroundColor: "#ffffffff",           // พื้นหลังสีขาว
      maxWidth: "350px",                 // กำหนดความกว้างสูงสุด
      margin: "40px auto"                // อยู่ตรงกลางหน้าจอ
    }}
  >
      {tokenState ? (
        <>
          <h3 style={{ marginBottom: "10px", fontWeight: "800" }}>
            ยืนยันการ SignOut
          </h3>
          <button
            type="button"
            onClick={handleSignOut}
            className="btn btn-outline-danger"
          >
            <i className="bi bi-box-arrow-right"></i> SignOut
          </button>
        </>
      ) : (
        <Link href="/login" className="btn btn-outline-primary">
          <i className="bi bi-box-arrow-in-right"></i> Login
        </Link>
      )}
    </div>
  );
}
