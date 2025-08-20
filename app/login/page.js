"use client";
import { useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // เปลี่ยนค่า input
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = true;
    if (!formData.password.trim()) newErrors.password = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🧠 รวม handleSubmit + login API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) {
      // แจ้งเตือนถ้าไม่ได้กรอกแบบ SweetAlert
      Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกข้อมูลให้ครบ',
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    // เริ่ม Login API
    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ!',
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/admin/users";
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "form-control";
    if (submitted && errors[fieldName]) return `${baseClass} border-danger`;
    return baseClass;
  };

  // ✅ UI ส่วน login เดิมของคุณ
  return (
    <div className="min-vh-100 align-items-center" style={{ 
      background: 'linear-gradient(135deg, rgba(133, 157, 255, 0.1) 0%, rgba(126, 196, 207, 0.1) 50%, rgba(184, 146, 255, 0.1) 100%)'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 mt-5">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">

                <div className="text-center mb-4">
                  <div className="mb-3">
                    <div 
                      className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      style={{ 
                        width: '80px', 
                        height: '80px',
                        background: 'linear-gradient(135deg, #ff0055ff, #325ab7ff)'
                      }}
                    >
                      <i className="bi bi-person-fill text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                  </div>
                  <h2 className="fw-bold mb-2" style={{ color: '#3d3d3dff' }}>
                    เข้าสู่ระบบ
                  </h2>
                  <p className="text-muted">ยินดีต้อนรับกลับ! กรอกข้อมูลเพื่อเข้าสู่ระบบ</p>
                </div>

                <form>
                  {/* Username */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-person me-2"></i> ชื่อผู้ใช้ <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className={getInputClassName('username')}
                      placeholder="กรอกชื่อผู้ใช้"
                      style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0' }}
                    />
                    {submitted && errors.username && (
                      <div className="text-danger small mt-1">
                        กรุณากรอกชื่อผู้ใช้
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-lock me-2"></i> รหัสผ่าน <span className="text-danger">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={getInputClassName('password')}
                        placeholder="กรอกรหัสผ่าน"
                        style={{ padding: '12px 50px 12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0' }}
                      />
                      <button
                        type="button"
                        className="btn position-absolute end-0 top-50 translate-middle-y me-2"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ border: 'none', background: 'transparent' }}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                    </div>
                    {submitted && errors.password && (
                      <div className="text-danger small mt-1">
                        กรุณากรอกรหัสผ่าน
                      </div>
                    )}
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="form-check-input"
                      />
                      <label className="form-check-label small">จดจำการเข้าสู่ระบบ</label>
                    </div>
                    <Link href="/forgot-password" className="text-decoration-none small" style={{ color: '#1500ff' }}>
                      ลืมรหัสผ่าน?
                    </Link>
                  </div>

                  {/* Login button */}
                  <div className="d-grid mb-3">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn btn-lg py-3"
                      style={{ 
                        background: 'linear-gradient(135deg, #ff0055ff, #325ab7ff)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px'
                      }}
                    >
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      เข้าสู่ระบบ
                    </button>
                  </div>
                </form>

                <div className="text-center small mt-3">
                  ยังไม่มีบัญชี? <Link href="/register">สมัครสมาชิก</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
