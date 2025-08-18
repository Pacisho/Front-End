'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  

  // ข้อมูลส่วนตัว
  const personalInfo = {
    name: "Phatdanai Kaeochan",
    nickname: "AJ",
    role: "History - All racers",
    bio: "ฉันเป็นคนที่ชื่นชอบการแข่งขัน Game Esports และชอบในการค้านคว้าหาข้อมูลของแต่ละคนที่มีทักษะโดดเด่นในด้านต่างๆ โดยเฉพาะในวงการเกม รวมไปถึงข้อมูลของนักแสดงแต่ละคนด้วย",
    quote: "การเรียนรู้คือสิ่งที่ ไม่มีวันสิ้นสุด",
    skills: ["Esports Player Research", "Game Meta Analysis", "Team & Match Scouting", "Content Creation & Esports Writing", "Data-Driven Insight"],
    education: [
      { degree: "ระดับประกาศนียบัตรวิชาชีพชั้นสูง", school: "วิทยาลัยเทคนิคเชียงใหม่", year: "2568" },
      { degree: "ระดับประกาศนียบัตรวิชาชีพ", school: "วิทยาลัยการอาชีพฝาง", year: "2567" }
    ],
    experience: [
      { position: "สร้างเว็บไซต์เก็บข้อมูล", company: "Create a data collection website", year: "2567" },
      { position: "ค้นหาข้อมูลของแต่ละคน", company: "Find information about each person", year: "2567" }
    ],
    socialMedia: [
      { platform: "Instagram", handle: "@patrdnay1", icon: "bi-instagram", url: "https://www.instagram.com/" },
      { platform: "YouTube", handle: "Phatdanai Kaeochan", icon: "bi-youtube", url: "https://www.youtube.com/" },
      { platform: "Facebook", handle: "Phatdanai Kaeochan", icon: "bi-facebook", url: "https://www.facebook.com/" },
    ]
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-5 text-center mb-4 mb-lg-0">
          <div className="position-relative" style={{ width: '300px', height: '300px', margin: '0 auto' }}>
            <Image 
              src="/a16.jpg" 
              alt={personalInfo.name} 
              width={300} 
              height={300}
              className="rounded-circle shadow"
              style={{ objectFit: 'cover', border: '5px solid white' }}
            />
            <div className="position-absolute" style={{ 
              bottom: '10px', 
              right: '10px', 
              background: '#0007ccff', 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(16, 0, 244, 0.51)',
              border: '3px solid white'
            }}>
              <i className="bi bi-compass-fill fs-4 text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="p-4 rounded-4 shadow-sm">
            <h1 className="display-5 fw-bold mb-2" style={{ color: '#272727ff' }}>{personalInfo.name}</h1>
            <h3 className="fs-4 mb-3 text-secondary">"{personalInfo.nickname}" - {personalInfo.role}</h3>
            <p className="lead mb-4">{personalInfo.bio}</p>
            <div className="d-flex gap-3 mb-3">
              {personalInfo.socialMedia.map((social, index) => (
                <a key={index} href="#" className="text-decoration-none">
                  <div style={{ 
                    width: '45px', 
                    height: '45px', 
                    background: '#8974ffff', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className={`bi ${social.icon} fs-5 text-white`}></i>
                  </div>
                </a>
              ))}
            </div>
            <div className="p-3 rounded-3 mb-3" style={{ background: 'white' }}>
              <p className="fst-italic mb-0">"{personalInfo.quote}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'story' ? 'active' : ''}`} 
                onClick={() => setActiveTab('story')}
                style={{ 
                  background: activeTab === 'story' ? '#ff4444ff' : 'transparent',
                  color: activeTab === 'story' ? 'white' : '#666',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  margin: '0 5px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-book me-2"></i>
                เรื่องราวของฉัน
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'skills' ? 'active' : ''}`} 
                onClick={() => setActiveTab('skills')}
                style={{ 
                  background: activeTab === 'skills' ? '#3460c0ff' : 'transparent',
                  color: activeTab === 'skills' ? 'white' : '#666',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  margin: '0 5px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-stars me-2"></i>
                ทักษะและความสามารถ
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`} 
                onClick={() => setActiveTab('experience')}
                style={{ 
                  background: activeTab === 'experience' ? '#8659d9ff' : 'transparent',
                  color: activeTab === 'experience' ? 'white' : '#666',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  margin: '0 5px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-briefcase me-2"></i>
                ประสบการณ์
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="row">
        <div className="col-12">
          <div className="p-4 rounded-4 shadow-sm" style={{ 
            background: activeTab === 'story' ? 'rgba(255, 133, 162, 0.1)' : 
                       activeTab === 'skills' ? 'rgba(126, 196, 207, 0.1)' : 
                       'rgba(184, 146, 255, 0.1)',
            minHeight: '300px'
          }}>
            {/* My Story Tab */}
            {activeTab === 'story' && (
              <div className="story-content">
                <h3 className="mb-4" style={{ color: '#ff4444ff' }}>
                  <i className="bi bi-quote me-2"></i>
                  เรื่องราวของฉัน
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">จุดเริ่มต้นของความสนใจในประวัติของนักแข่ง</h5>
                        <p className="card-text">
                          ความสามรถของนักแข่งแต่ละคนมีความน่าสนใจและมีเอกลักษณ์เฉพาะตัว ฉันเริ่มสนใจในการศึกษาประวัติของนักแข่งเหล่านี้ตั้งแต่ยังเด็ก
                          โดยเฉพาะนักแข่งที่มีทักษะโดดเด่นในด้านต่างๆ เช่น การวางแผนกลยุทธ์ การปรับตัวต่อสถานการณ์ และการทำงานเป็นทีม
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">แรงบันดาลใจ</h5>
                        <p className="card-text">
                          แรงบันดาลใจของฉันมาจากการเห็นนักแข่งที่มีความมุ่งมั่นและทุ่มเทในการฝึกซ้อม ฉันเชื่อว่าการเรียนรู้จากประวัติของพวกเขาสามารถช่วยให้ฉันเข้าใจถึงความสำคัญของการทำงานหนักและการไม่ยอมแพ้
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title mb-3">ปรัชญาการท่องเที่ยว</h5>
                        <p className="card-text">
                          ฉันเชื่อว่าการศึกษาประวัติของนักแข่งและการเข้าใจถึงความทุ่มเทของพวกเขา สามารถนำมาปรับใช้ในชีวิตประจำวันได้ ตัวอย่างเช่น การวางแผนและการเตรียมตัวให้พร้อมสำหรับทุกสถานการณ์
                          นอกจากนี้ การเรียนรู้จากความผิดพลาดและการปรับปรุงตน
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="skills-content">
                <h3 className="mb-4" style={{ color: '#7ea9cfff' }}>
                  <i className="bi bi-lightning-charge me-2"></i>
                  ทักษะและความสามารถ
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">ทักษะหลัก</h5>
                        <ul className="list-group list-group-flush">
                          {personalInfo.skills.map((skill, index) => (
                            <li key={index} className="list-group-item border-0 d-flex align-items-center">
                              <div style={{ 
                                width: '30px', 
                                height: '30px', 
                                background: '#7ec4cf', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                marginRight: '15px'
                              }}>
                                <i className="bi bi-check-lg text-white"></i>
                              </div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">การศึกษา</h5>
                        <ul className="list-group list-group-flush">
                          {personalInfo.education.map((edu, index) => (
                            <li key={index} className="list-group-item border-0">
                              <div className="d-flex justify-content-between">
                                <strong>{edu.degree}</strong>
                                <span className="badge rounded-pill" style={{ background: '#7ec4cf', padding: '8px 12px' }}>
                                  {edu.year}
                                </span>
                              </div>
                              <div>{edu.school}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body text-center p-4">
                        <h5 className="card-title mb-3">ทีมที่แนะนำ</h5>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <Image 
                              src="/a21.jpg" 
                              alt="สถานที่ท่องเที่ยว 1" 
                              width={300} 
                              height={200}
                              className="rounded-3 shadow-sm img-fluid"
                              style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <Image 
                              src="/a22.jpg" 
                              alt="สถานที่ท่องเที่ยว 2" 
                              width={300} 
                              height={200}
                              className="rounded-3 shadow-sm img-fluid"
                              style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <Image 
                              src="/a23.jpg" 
                              alt="สถานที่ท่องเที่ยว 3" 
                              width={300} 
                              height={200}
                              className="rounded-3 shadow-sm img-fluid"
                              style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="experience-content">
                <h3 className="mb-4" style={{ color: '#8555e3ff' }}>
                  <i className="bi bi-briefcase me-2"></i>
                  ประสบการณ์
                </h3>
                <div className="timeline position-relative">
                  {personalInfo.experience.map((exp, index) => (
                    <div key={index} className="card border-0 shadow-sm mb-4">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="card-title mb-0">{exp.position}</h5>
                          <span className="badge rounded-pill" style={{ background: '#b892ff', padding: '8px 12px' }}>
                            {exp.year}
                          </span>
                        </div>
                        <h6 className="card-subtitle mb-3 text-muted">{exp.company}</h6>
                        <p className="card-text">
                          {index === 0 ? 
                            "ในฐานะผู้สนใจในข้อมูลของนักแข่ง ฉันได้สร้างเว็บไซต์เพื่อเก็บรวบรวมข้อมูลและประวัติของนักแข่งแต่ละคน" : 
                            "ทำงานร่วมกับเพื่อนในทีมเพื่อค้นหาข้อมูลของนักแข่งที่มีทักษะโดดเด่นในด้านต่างๆ เช่น การวางแผนกลยุทธ์ การปรับตัวต่อสถานการณ์ และการทำงานเป็นทีม"
                          }
                        </p>
                        <div className="mt-3">
                          <h6 className="mb-2">ผลงานสำคัญ:</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2 d-flex align-items-center">
                              <i className="bi bi-check-circle-fill me-2" style={{ color: '#b892ff' }}></i>
                              {index === 0 ? "พัฒนาเว็บไซต์ที่ใช้งานง่ายและมีข้อมูลที่ครบถ้วนเกี่ยวกับนักแข่ง" :
                                             "มีการวิเคราะห์ข้อมูลเพื่อสร้างความเข้าใจในทักษะและความสามารถของนักแข่งแต่ละคน"}
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <i className="bi bi-check-circle-fill me-2" style={{ color: '#b892ff' }}></i>
                              {index === 0 ? "สร้างเครือข่ายกับนักแข่งและผู้สนใจในวงการ Esports" :
                                             "พัฒนาระบบเว็บไซต์ที่สามารถเข้าถึงข้อมูลได้อย่างรวดเร็วและมีประสิทธิภาพ"}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title mb-3">เป้าหมายในอนาคต</h5>
                    <p className="card-text">
                      ฉันหวังว่าจะสามารถพัฒนาทักษะและความสามารถของตนเองให้ดียิ่งขึ้น และนำข้อมูลที่เก็บรวบรวมมาใช้ในการวิเคราะห์และพัฒนานักแข่งในอนาคต
                      นอกจากนี้ยังต้องการสร้างชุมชนที่สนับสนุนการเรียนรู้และการแบ่งปันข้อมูลเกี่ยวกับนักแข่ง Esports
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <div className="p-4 rounded-4 shadow-sm" style={{ background: 'rgba(213, 195, 216, 0.27)' }}>
            <h3 className="mb-3" style={{ color: '#000000ff' }}>สนใจข้อมูลนักแข่งของฉัน</h3>
            <p className="mb-4">หากคุณสนใจข้อมูลของทักแข่งเพื่อนำข้อมูลไปวิเคราะห์ในการแข่งขัน สามารถติดต่อได้ตามช่องทางด้านล่าง</p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn px-4 py-2" style={{ background: '#f35b5bff', color: 'white', borderRadius: '30px' }}>
                <i className="bi bi-envelope-fill me-2"></i>
                ส่งอีเมล
              </button>
              <button className="btn px-4 py-2" style={{ background: '#3936e2ff', color: 'white', borderRadius: '30px' }}>
                <i className="bi bi-chat-fill me-2"></i>
                แชทกับฉัน
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}