'use client';
import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    title: '',
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    birthDate: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = true;
    if (!formData.password.trim()) newErrors.password = true;
    if (!formData.title) newErrors.title = true;
    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.address.trim()) newErrors.address = true;
    if (!formData.gender) newErrors.gender = true;
    if (!formData.birthDate) newErrors.birthDate = true;
    if (!formData.acceptTerms) newErrors.acceptTerms = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateForm()) {
      alert('สมัครสมาชิกสำเร็จ!');
      console.log('Form data:', formData);
      setFormData({
        username: '',
        password: '',
        title: '',
        firstName: '',
        lastName: '',
        address: '',
        gender: '',
        birthDate: '',
        acceptTerms: false
      });
      setSubmitted(false);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow p-5 rounded-4 bg-white mx-auto my-5" style={{ maxWidth: '900px' }}>
        <h3 className="text-center mb-4">สมัครสมาชิก</h3>

        {/* Username */}
        <div className="mb-3">
          <label className="form-label">ชื่อผู้ใช้</label>
          <input
            type="text"
            name="username"
            className={`form-control ${submitted && errors.username ? 'border-danger' : ''}`}
            placeholder="กรอกชื่อผู้ใช้"
            value={formData.username}
            onChange={handleInputChange}
          />
          {submitted && errors.username && <div className="text-danger small">กรุณากรอกชื่อผู้ใช้</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">รหัสผ่าน</label>
          <input
            type="password"
            name="password"
            className={`form-control ${submitted && errors.password ? 'border-danger' : ''}`}
            placeholder="กรอกรหัสผ่าน"
            value={formData.password}
            onChange={handleInputChange}
          />
          {submitted && errors.password && <div className="text-danger small">กรุณากรอกรหัสผ่าน</div>}
        </div>

        {/* Title */}
        <div className="mb-3">
          <label className="form-label">คำนำหน้าชื่อ</label>
          <select
            name="title"
            className={`form-select ${submitted && errors.title ? 'border-danger' : ''}`}
            value={formData.title}
            onChange={handleInputChange}
          >
            <option value="">-- คำนำหน้าชื่อ --</option>
            <option value="mr">นาย</option>
            <option value="mrs">นาง</option>
            <option value="miss">นางสาว</option>
          </select>
          {submitted && errors.title && <div className="text-danger small">กรุณาเลือกคำนำหน้า</div>}
        </div>

        {/* Name and Lastname */}
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="firstName"
              className={`form-control ${submitted && errors.firstName ? 'border-danger' : ''}`}
              placeholder="ชื่อ"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {submitted && errors.firstName && <div className="text-danger small">กรุณากรอกชื่อ</div>}
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName"
              className={`form-control ${submitted && errors.lastName ? 'border-danger' : ''}`}
              placeholder="นามสกุล"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {submitted && errors.lastName && <div className="text-danger small">กรุณากรอกนามสกุล</div>}
          </div>
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label">ที่อยู่</label>
          <textarea
            name="address"
            className={`form-control ${submitted && errors.address ? 'border-danger' : ''}`}
            rows={3}
            placeholder="กรอกที่อยู่..."
            value={formData.address}
            onChange={handleInputChange}
          />
          {submitted && errors.address && <div className="text-danger small">กรุณากรอกที่อยู่</div>}
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">เพศ</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="male">ชาย</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="female">หญิง</label>
          </div>
          {submitted && errors.gender && <div className="text-danger small">กรุณาเลือกเพศ</div>}
        </div>

        {/* Birth Date */}
        <div className="mb-3">
          <label className="form-label">วันเกิด</label>
          <input
            type="date"
            name="birthDate"
            className={`form-control ${submitted && errors.birthDate ? 'border-danger' : ''}`}
            value={formData.birthDate}
            onChange={handleInputChange}
          />
          {submitted && errors.birthDate && <div className="text-danger small">กรุณาเลือกวันเกิด</div>}
        </div>

        {/* Accept Terms */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="acceptTerms">
            ยอมรับเงื่อนไข
          </label>
          {submitted && errors.acceptTerms && <div className="text-danger small">กรุณายอมรับเงื่อนไข</div>}
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
           ยืนนันการสมัครสมาชิก
          </button>
        </div>
      </div>
    </form>
  );
}
