"use client";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail("");
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        maxWidth: "400px",
        border: "1px solid #ccc",
        borderRadius: "5%",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h1 className="text-center mb-4">ลืมรหัสผ่าน</h1>

      {success && (
        <div className="alert alert-success" role="alert">
          ส่งลิงก์รีเซ็ตรหัสผ่านเรียบร้อย! โปรดตรวจสอบอีเมลของคุณ
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">อีเมล</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="กรอกอีเมลของคุณ"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="d-grid mb-4">
          <button
            type="submit"
            className="btn btn-lg py-3"
            style={{ 
              background: 'linear-gradient(135deg, #ff0055ff, #325ab7ff)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <i className="bi bi-envelope-check me-2"></i>
           ยืนนัน
          </button>
        </div>
      </form>
    </div>
  );
}
