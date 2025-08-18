
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top" style={{background:'#fff'}}>
      <div className="container py-2">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img src="/a13.png" alt="Logo" width="30" height="30" className="me-2 rounded-circle" />
          <span style={{color:'#000000ff', fontWeight:'600', fontFamily:'Poppins, sans-serif'}}>Attack All Around</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav" 
          aria-expanded={isOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
          style={{border: 'none', boxShadow: 'none'}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link href="/" className="nav-link position-relative" style={{color:'#000000ff', fontWeight:'500'}}>
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/about" className="nav-link" style={{color:'#000000ff'}}>เกี่ยวกับเรา</Link>
            </li>
            <li className="nav-item dropdown mx-2">
              <a 
                className="nav-link" 
                href="/service" 
                role="button" 
                aria-expanded="false" 
                style={{color:'#000000ff'}}
              >
                บริการของเรา
              </a>
            </li>
            <li className="nav-item mx-2">
              <Link href="/contact" className="nav-link" style={{color:'#000000ff'}}>ติดต่อเรา</Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center gap-3 flex-wrap justify-content-center mt-3 mt-lg-0">
            <form className="d-flex" role="search">
              <div className="input-group">
                <input 
                  className="form-control" 
                  type="search" 
                  placeholder="ค้นหาข้อมูล..." 
                  aria-label="Search" 
                  style={{
                    borderRadius:'2rem 0 0 2rem', 
                    background:'#ffffffff', 
                    border: '1px solid #eee', 
                    borderRight: 'none',
                    fontSize: '0.9rem'
                  }} 
                />
                <button 
                  className="btn" 
                  type="submit" 
                  style={{
                    borderRadius:'0 2rem 2rem 0', 
                    background:'#0094ceff', 
                    color:'#fff', 
                    fontSize: '0.9rem', 
                    padding: '0.375rem 1rem',
                    border: '1px solid #0094ceff'
                  }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            
            <div className="d-flex gap-2">
              <Link 
                href="/register" 
                className="btn" 
                style={{
                  borderRadius:'2rem', 
                  background:'#ff003cff', 
                  color:'#fff', 
                  fontSize: '0.9rem', 
                  padding: '0.375rem 1.25rem',
                  boxShadow: '0 2px 5px rgba(181, 234, 215, 0.3)'
                }}
              >
                สมัครสมาชิก
              </Link>
              
              <Link 
                href="/login" 
                className="btn" 
                style={{
                  borderRadius:'2rem', 
                  background:'#0d00ffff', 
                  color:'#fff', 
                  fontSize: '0.9rem', 
                  padding: '0.375rem 1.25rem',
                  boxShadow: '0 2px 5px rgba(157, 124, 216, 0.3)'
                }}
              >
                เข้าสู่ระบบ
              </Link>

              <Link 
                href="/music" 
                className="btn" 
                style={{
                  borderRadius:'2rem', 
                  background:'#b700ffff', 
                  color:'#fff', 
                  fontSize: '0.9rem', 
                  padding: '0.375rem 1.25rem',
                  boxShadow: '0 2px 5px rgba(157, 124, 216, 0.3)'
                }}
              >
                เลือกเพลง
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}