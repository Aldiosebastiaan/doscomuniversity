import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import background21 from '../assets/bg21.png';
import OurProgram from '../assets/Our_program.png';
import BgWeb from '../assets/bg_web_du.png';

import Img1 from '../assets/web-dev-fe.png';
import Img2 from '../assets/web-dev-be.png';
import Img3 from '../assets/mobile-dev.png';
import Img4 from '../assets/cyber-sec.png';

import Card1 from '../assets/judul_card1.png';
import Card2 from '../assets/judul_card2.png';
import Card3 from '../assets/judul_card3.png';
import Card4 from '../assets/judul_card4.png';

import FrontendWeeks from '../assets/web-dev-fe-card.png';
import FrontendTechStack from '../assets/web-dev-fe-card-2.png';

import BackendWeeks from '../assets/web-dev-be-card.png';
import BackendTechStack from '../assets/web-dev-be-card-2.png';

import FlipCard from './flipcard';

import KelasFE from '../assets/kelas-fe1.JPG';
import '../styles/style.css';

const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const baseImages = [Img1, Img2, Img3, Img4];
  const images = Array.from({ length: 20 }, () => baseImages).flat();

  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };


  return (
    <main
      className="relative text-white min-h-screen pt-[300px] overflow-hidden bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${BgWeb})` }}
    >

      <section className="max-w-5xl mx-auto px-6 py-10" data-aos="fade-up">
        <h2 className="text-4xl mt-25 font-bold text-center mb-6">
          Selamat Datang di Doscom University
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Bootcamp ini ditujukan bagi pemula maupun intermediate yang ingin belajar tentang Web Development, Mobile Development, dan pengembangan aplikasi secara kolaboratif dengan mentor dari Doscom.
        </p>

        <div
          className="flex justify-center mb-12"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src={OurProgram}
            alt="Our Program"
            className="max-w-[400px] h-auto rounded-lg shadow-lg transition-transform duration-700 hover:scale-110 hover:shadow-2xl"
          />
        </div>

        {/* Carousel */}
        <div className="w-full flex justify-center mb-20" data-aos="fade-up" data-aos-delay="400">
          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            navigation
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="w-full max-w-5xl rounded-xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="w-[300px]">
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-4xl mx-auto mb-0" data-aos="fade-up" data-aos-delay="500">

          <FlipCard
            frontImage={FrontendTechStack}
            backImage={FrontendWeeks}
            title={Card1}
          />
          <FlipCard
            frontImage={BackendTechStack}
            backImage={BackendWeeks}
            title={Card2}
          />
          <FlipCard
            frontImage={BackendTechStack}
            backImage={BackendWeeks}
            title={Card3}
          />
          <FlipCard
            frontImage={BackendTechStack}
            backImage={BackendWeeks}
            title={Card4}
          />
        </div>
      </section>

      <section className="w-full mb-0 px-4 md:px-0" data-aos="fade-right" data-aos-delay="300">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
            Pilih Program Belajarmu Bersama Kami!
          </h2>
          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
            Kami memberikan pembelajaran serta pelatihan yang kamu butuhkan sesuai dengan kurikulum kampus dan industri digital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Development */}
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden group shadow-lg cursor-pointer">
              <img
                src={KelasFE}
                alt="Frontend Development"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />
              <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 text-white text-right w-[250px]">
                <h4 className="text-xl md:text-2xl font-bold">Frontend Development</h4>
                <p className="text-sm md:text-base mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Bangun UI modern dengan HTML, CSS, JS, dan React.
                </p>
              </div>
            </div>

            {/* Backend Development */}
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden group shadow-lg cursor-pointer">
              <img
                src={KelasFE}
                alt="Backend Development"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />
              <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 text-white text-right w-[250px]">
                <h4 className="text-xl md:text-2xl font-bold">Backend Development</h4>
                <p className="text-sm md:text-base mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Bangun API, sistem auth, database, dan server.
                </p>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden group shadow-lg cursor-pointer">
              <img
                src={KelasFE}
                alt="Mobile Development"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />
              <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 text-white text-right w-[250px]">
                <h4 className="text-xl md:text-2xl font-bold">Mobile Development</h4>
                <p className="text-sm md:text-base mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Kembangkan aplikasi Android/iOS menggunakan Flutter atau React Native.
                </p>
              </div>
            </div>

            {/* Cyber Security */}
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden group shadow-lg cursor-pointer">
              <img
                src={KelasFE}
                alt="Cyber Security"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />
              <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 text-white text-right w-[250px]">
                <h4 className="text-xl md:text-2xl font-bold">Cyber Security</h4>
                <p className="text-sm md:text-base mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Pelajari keamanan siber, penetration testing, dan ethical hacking.
                </p>
              </div>
            </div>
          </div>
        </div>


      </section>


      <section className="max-w-6xl mx-auto px-6 mt-10 text-white" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Silabus & Timeline per Kelas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* FRONTEND */}
          <div className="bg-[#1e1e2f] rounded-xl p-6 shadow-md border border-indigo-500" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Web Development - Frontend</h3>
            <ul className="space-y-4">
              <li><strong>Pembukaan:</strong> Orientasi & pengenalan Git, VS Code, struktur project</li>
              <li><strong>Minggu 1:</strong> HTML, CSS, Responsive Layout, TailwindCSS</li>
              <li><strong>Minggu 2:</strong> JavaScript dasar, DOM, Event, API fetch</li>
              <li><strong>Minggu 3:</strong> ReactJS, Komponen, Props, State, Routing</li>
              <li><strong>Minggu 4:</strong> Mini Project: Landing Page + Blog App</li>
              <li><strong>Penutupan:</strong> Presentasi Final Project & Evaluasi</li>
            </ul>
          </div>

          {/* BACKEND */}
          <div className="bg-[#1e1e2f] rounded-xl p-6 shadow-md border border-purple-500" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Web Development - Backend</h3>
            <ul className="space-y-4">
              <li><strong>Pembukaan:</strong> Pengenalan backend, terminal, Git, struktur folder</li>
              <li><strong>Minggu 1:</strong> PHP dasar, Routing, MVC dengan CodeIgniter 4</li>
              <li><strong>Minggu 2:</strong> CRUD, MySQL, Validasi, Session</li>
              <li><strong>Minggu 3:</strong> REST API, Postman, Integrasi FE</li>
              <li><strong>Minggu 4:</strong> Final Project: API untuk sistem data</li>
              <li><strong>Penutupan:</strong> Review, Best Practice & Final Evaluation</li>
            </ul>
          </div>

          {/* MOBILE DEV */}
          <div className="bg-[#1e1e2f] rounded-xl p-6 shadow-md border border-green-500" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Mobile Development</h3>
            <ul className="space-y-4">
              <li><strong>Pembukaan:</strong> Pengenalan mobile dev, tools (Flutter/React Native)</li>
              <li><strong>Minggu 1:</strong> Dart dasar / JSX Mobile, State Management</li>
              <li><strong>Minggu 2:</strong> UI/UX Mobile, Form & Validation</li>
              <li><strong>Minggu 3:</strong> HTTP Request, Integrasi API</li>
              <li><strong>Minggu 4:</strong> Mini App Project: Todo List / Auth App</li>
              <li><strong>Penutupan:</strong> Demo App & Feedback</li>
            </ul>
          </div>

          {/* CYBER SECURITY */}
          <div className="bg-[#1e1e2f] rounded-xl p-6 shadow-md border border-red-500" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-semibold text-red-400 mb-4">Cyber Security</h3>
            <ul className="space-y-4">
              <li><strong>Pembukaan:</strong> Pengenalan dunia keamanan digital & mindset security</li>
              <li><strong>Minggu 1:</strong> Linux dasar, Command Line, Permissions</li>
              <li><strong>Minggu 2:</strong> Network Security, Port Scanning, Wireshark</li>
              <li><strong>Minggu 3:</strong> Web Vulnerabilities: SQLi, XSS, CSRF</li>
              <li><strong>Minggu 4:</strong> Capture The Flag (CTF) Challenge Mini</li>
              <li><strong>Penutupan:</strong> Evaluasi + Penghargaan</li>
            </ul>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <footer className="bg-[#0f172a] text-white pt-16 mt-10 pb-10 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gabung Bersama Kami</h2>
          <p className="text-lg md:text-xl text-gray-300">
            Komunitas belajar teknologi yang aktif, kolaboratif, dan siap membantumu berkembang.
          </p>
        </div>

        {/* Kontak */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
          {/* Info Kontak */}
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">Kontak Kami</h3>
            <p className="mb-4 text-gray-300">
              Ingin tahu lebih banyak tentang program kami atau ada pertanyaan seputar pendaftaran? Hubungi kami!
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>
                📧 Email: <a href="mailto:doscom@gmail.com" className="text-indigo-400 hover:underline">doscom@gmail.com</a>
              </li>
              <li>
                📱 WhatsApp: <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">+62 812-3456-7890</a>
              </li>
              <li>
                📍 Lokasi: Fakultas Ilmu Komputer, Universitas Dian Nuswantoro
              </li>
            </ul>
          </div>

          {/* Form Kontak */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">Kirim Pesan</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full p-3 rounded-lg bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Alamat Email"
                className="w-full p-3 rounded-lg bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                rows="4"
                placeholder="Pesanmu"
                className="w-full p-3 rounded-lg bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-6 py-3 rounded-lg font-semibold text-white shadow-md"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Doscom University. Made with 💙 by <a href="https://doscom.org" className="text-indigo-400 hover:underline">Doscom</a>
        </div>
      </footer>
    </main>
  );
};

export default Content;
