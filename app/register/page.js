
'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  const initialState = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    title: '',
    address: '',
    sex: '',
    birthday: '',
    acceptTerms: false,
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'username',
      'password',
      'title',
      'firstname',
      'lastname',
      'address',
      'sex',
      'birthday',
    ];
    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = true;
    });
    if (!formData.acceptTerms) newErrors.acceptTerms = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) return;

    const payload = {
      ...formData,
      fullname: `${formData.firstname} ${formData.lastname}`,
    };

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          router.push('/register');
        });
        setFormData(initialState);
        setSubmitted(false);
        setErrors({});
      } else {
        Swal.fire({
          title: 'เกิดข้อผิดพลาด',
          text: result.message || 'ไม่สามารถบันทึกข้อมูลได้',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
    }
  };

  return (
  <form onSubmit={handleSubmit}>
   <div className="shadow p-5 rounded-4 bg-white mx-auto my-5" style={{ maxWidth: '900px' }}>
      <div className="d-flex justify-content-center mb-4">
        <h3
          className="py-1 px-3 fw-bold"
          style={{
            display: 'inline-block',
            border: '5px solid',
            borderImage: 'linear-gradient(to right, red, blue, purple) 1',
            borderRadius: '50%', // ยังคงใช้ 20% ตามที่คุณต้องการ
            lineHeight: '1.5', // ช่วยให้รูปทรงดูสมดุลมากขึ้น
          }}
        >
          สมัครสมาชิก
        </h3>
      </div>

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
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
          {submitted && errors.title && <div className="text-danger small">กรุณาเลือกคำนำหน้า</div>}
        </div>

        {/* Firstname */}
        <div className="mb-3">
          <label className="form-label">ชื่อ</label>
          <input
            type="text"
            name="firstname"
            className={`form-control ${submitted && errors.firstname ? 'border-danger' : ''}`}
            placeholder="กรอกชื่อ"
            value={formData.firstname}
            onChange={handleInputChange}
          />
          {submitted && errors.firstname && <div className="text-danger small">กรุณากรอกชื่อ</div>}
        </div>

        {/* Lastname */}
        <div className="mb-3">
          <label className="form-label">นามสกุล</label>
          <input
            type="text"
            name="lastname"
            className={`form-control ${submitted && errors.lastname ? 'border-danger' : ''}`}
            placeholder="กรอกนามสกุล"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          {submitted && errors.lastname && <div className="text-danger small">กรุณากรอกนามสกุล</div>}
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

        {/* Sex */}
        <div className="mb-3">
          <label className="form-label">เพศ</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="sex"
              id="male"
              value="ชาย"
              checked={formData.sex === 'ชาย'}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="male">ชาย</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="sex"
              id="female"
              value="หญิง"
              checked={formData.sex === 'หญิง'}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="female">หญิง</label>
          </div>
          {submitted && errors.sex && <div className="text-danger small">กรุณาเลือกเพศ</div>}
        </div>

        {/* Birthday */}
        <div className="mb-3">
          <label className="form-label">วันเกิด</label>
          <input
            type="date"
            name="birthday"
            className={`form-control ${submitted && errors.birthday ? 'border-danger' : ''}`}
            value={formData.birthday}
            onChange={handleInputChange}
          />
          {submitted && errors.birthday && <div className="text-danger small">กรุณาเลือกวันเกิด</div>}
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

        {/* Submit Button */}
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
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 4, 255, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <i className="bi bi-envelope-check me-2"></i>
            ยืนยันการสมัครสมาชิก
          </button>
        </div>
      </div>
    </form>
  );
}
