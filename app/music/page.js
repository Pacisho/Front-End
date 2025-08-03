'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function MusicPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [playingSong, setPlayingSong] = useState(null);
  const audioRef = useRef(null);

  const handlePlaySong = (audioSrc) => {
    const globalAudio = document.getElementById('globalAudio');
    if (globalAudio) {
      globalAudio.src = audioSrc;
      globalAudio.play().catch((err) => console.error("ไม่สามารถเล่นเพลงได้:", err));
    }
  };

  const songs = [
    {
      id: 1,
      title: "สาวมหาลัย",
      artist: "SL Music",
      image: "/a31.jpg",
      audio: "/m2.mp3",
      category: "pop",
      description: "เพลงใหม่ล่าสุดจากหมู่เรา ฝากติดตาม ผลงานด้วยนะครับ ",
    },
    {
      id: 2,
      title: "สิหมายเจ้าแต่ผู้เดียว",
      artist: "แม็ค วัชรพล Ft. T-REX",
      image: "/a30.jpg",
      audio: "/m1.mp3",
      category: "rf",
      description: "เพลงอีสานซึ้งๆ จากศิลปินดัง",
    },
    {
      id: 3,
      title: "วาสนาขี้เหล้า",
      artist: "SL MUSIC",
      image: "/a32.jpg",
      audio: "/m3.mp3",
      category: "pop",
      description: "เพลงใหม่ล่าสุดจากหมู่เรา ฝากติดตาม ผลงานด้วยนะครับ",
    },
    {
      id: 4,
      title: "ฮัก ฮัก ฮัก",
      artist: "หนิง ต้นไม้มิวสิค",
      image: "/a33.jpg",
      audio: "/m4.mp3",
      category: "rf",
      description: "Official Lyrics",
    },
     {
      id: 5,
      title: "เพลงรัก",
      artist: "Three Man Down",
      image: "/a34.jpg",
      audio: "/m5.mp3",
      category: "at",
      description: "That’s the only one love song for you",
    },
   {
      id: 6,
      title: "สิบอกอิแม่ไปขอ",
      artist: "ออย ราเชน ไทรถแห่",
      image: "/a35.jpg",
      audio: "/m6.mp3",
      category: "rf",
      description: "OFFICIAL MV",
    },
    {
      id: 7,
      title: "ข้างกัน",
      artist: "Three Man Down",
      image: "/a36.jpg",
      audio: "/m7.mp3",
      category: "at",
      description: "Official Video",
    },
      {
      id: 8,
      title: "ก่อนลา",
      artist: "วสันต์17",
      image: "/a37.jpg",
      audio: "/m8.mp3",
      category: "at",
      description: "Official MV",
    },
    {
      id: 9,
      title: "ปิ๊กคืนพะเยา",
      artist: "คำ‘ต่าย",
      image: "/a38.jpg",
      audio: "/m9.mp3",
      category: "pop",
      description: "Live Session",
    },
    {
      id: 10,
      title: "จางหาย",
      artist: "Goy Arachaporn",
      image: "/a39.jpg",
      audio: "/m10.mp3",
      category: "at",
      description: "cover mv by 606",
    },
     {
      id: 11,
      title: "พี่สาวครับ",
      artist: "แปม ไกอา หน้ากากโพนี่",
      image: "/a40.jpg",
      audio: "/m11.mp3",
      category: "pop",
      description: "We Kid Thailand เด็กร้องก้องโลก",
    },
    {
      id: 12,
      title: "The 1975",
      artist: "About You",
      image: "/a41.jpg",
      audio: "/m12.mp3",
      category: "af",
      description: "Being Funny In A Foreign Language - Out Now ",
    },
       {
      id: 13,
      title: "The Happiest Girl",
      artist: "Stephen Dawes",
      image: "/a42.jpg",
      audio: "/m13.mp3",
      category: "af",
      description: "Lyric Video",
    },
     {
      id: 14,
      title: "Lost Stars",
      artist: "Adam Levine",
      image: "/a43.jpg",
      audio: "/m14.mp3",
      category: "af",
      description: "Academy Award Nominee For Best Original Song ",
    },
     {
      id: 15,
      title: "what if we?",
      artist: "Emi Choi",
      image: "/a44.jpg",
      audio: "/m15.mp3",
      category: "af",
      description: "Official Lyric Visualizer",
    },
     {
      id: 16,
      title: "P.S. I LOVE YOU",
      artist: "Paul Partohap",
      image: "/a45.jpg",
      audio: "/m16.mp3",
      category: "af",
      description: "Lyric Video",
    },
     {
      id: 17,
      title: "บอกรัก",
      artist: "Bedroom Audio",
      image: "/a46.jpg",
      audio: "/m17.mp3",
      category: "at",
      description: "Official Audio",
    },
     {
      id: 18,
      title: "Anybody",
      artist: "shae, WIMY",
      image: "/a47.jpg",
      audio: "/m18.mp3",
      category: "af",
      description: "official music video",
    },
     {
      id: 19,
      title: "Keep Cold",
      artist: "Numcha",
      image: "/a48.jpg",
      audio: "/m19.mp3",
      category: "af",
      description: "Official MV",
    },
     {
      id: 20,
      title: "ฟ้าคงเหงาเมื่อไร้เธอ",
      artist: "Velika",
      image: "/a49.jpg",
      audio: "/m20.mp3",
      category: "at",
      description: "Official Audio",
    },
    {
      id: 21,
      title: "กีติดไฟ",
      artist: "ผัวมาดามแพม",
      image: "/a50.jpg",
      audio: "/m21.mp4",
      category: "at",
      description: "TikTok",
    },
    {
      id: 22,
      title: "Michi Teyu Ku",
      artist: "Earthernative",
      image: "/a51.jpg",
      audio: "/m22.mp3",
      category: "at",
      description: "Fujii Kaze Cover",
    },
    {
      id: 23,
      title: "Loop",
      artist: "ASIA7",
      image: "/a52.jpg",
      audio: "/m23.mp3",
      category: "at",
      description: "Official MV",
    },
     {
      id: 24,
      title: "เรื่องราวของ DOLIA",
      artist: "DOLIA",
      image: "/a53.jpg",
      audio: "/m24.mp3",
      category: "at",
      description: "Official MV",
    },
  ];

  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: 'bi-music-note-list', color: '#6f00ffff' },
    { id: 'pop', name: 'ภาคเหนือ', icon: 'bi-music-note', color: '#ff0000ff' },
    { id: 'at', name: 'ภาคกลาง', icon: 'bi-headphones', color: '#00a9a5' },
    { id: 'rf', name: 'ภาคอีสาน', icon: 'bi-boombox', color: '#232222ff' },
    { id: 'af', name: 'ENG', icon: 'bi-music-note-list', color: '#ff8000ff' },
  ];

  const filteredSongs = activeCategory === 'all'
    ? songs
    : songs.filter(song => song.category === activeCategory);

  useEffect(() => {
    if (audioRef.current && playingSong) {
      audioRef.current.load();
      audioRef.current.play().catch((err) => {
        console.error("ไม่สามารถเล่นเพลงได้:", err);
      });
    }
  }, [playingSong]);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">รายการเพลงของเรา</h1>
        <p className="text-muted">เลือกเพลงตามหมวดหมู่ที่คุณชอบ แล้วฟังได้ทันที</p>

        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`btn d-flex align-items-center gap-2 px-3 py-2 rounded-pill ${
                activeCategory === category.id ? 'text-white' : 'text-dark'
              }`}
              style={{
                background: activeCategory === category.id ? category.color : 'transparent',
                border: `1px solid ${category.color}`,
              }}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`bi ${category.icon}`}></i> {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {filteredSongs.map((song) => (
          <div key={song.id} className="col-md-6 col-lg-4">
            <div className="card shadow-sm h-100 rounded-4 overflow-hidden d-flex flex-column">
              <Image
                src={song.image}
                alt={song.title}
                width={500}
                height={300}
                className="card-img-top"
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title">{song.title}</h5>
                <p className="text-muted mb-2">โดย {song.artist}</p>
                <p className="card-text">{song.description}</p>
                <button
                  style={{
                    background: 'linear-gradient(135deg, #ff0055ff, #325ab7ff)',
                    border: 'none',
                    borderRadius: '12px',
                    color: 'white',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  className="w-100 mt-auto"
                  onClick={() => setPlayingSong(song.audio)}
                >
                  <i className="bi bi-play-circle me-2"></i> เล่นเพลง
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Audio Player */}
      {playingSong && (
        <div className="fixed-bottom bg-dark p-3 d-flex justify-content-between align-items-center text-white">
          <span>
            <i className="bi bi-music-note-beamed me-2"></i>
            กำลังเล่น: <code>{playingSong.split('/').pop()}</code>
          </span>
          <audio ref={audioRef} controls className="w-50">
            <source src={playingSong} type="audio/mpeg" />
            เบราว์เซอร์ของคุณไม่รองรับการเล่นเสียง
          </audio>
          <button className="btn btn-outline-light btn-sm" onClick={() => setPlayingSong(null)}>
            ปิด
          </button>
        </div>
      )}
    </div>
  );
}
