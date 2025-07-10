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

      <section className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-4xl mx-auto mb-24" data-aos="fade-up" data-aos-delay="500">

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

<section className="w-full mb-32 px-4 md:px-0" data-aos="fade-right" data-aos-delay="300">
  <div className="max-w-6xl ml-40 mx-auto flex flex-col md:flex-row gap-10">
    
    {/* === KIRI: TEKS + GAMBAR INTERAKTIF === */}
    <div className="flex-1 space-y-6 -ml-4">
      {/* Teks */}
      <div className="max-w-xl text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Pilih Program Belajarmu Bersama Kami!
        </h3>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
          Kami memberikan pembelajaran, serta pelatihan yang kamu butuhkan sesuai dengan kurikulum kampus dan industri digital.
        </p>
      </div>

      {/* Gambar Web Development */}
      <div className="relative w-[600px] h-[200px] rounded-xl overflow-hidden group shadow-lg cursor-pointer">
        <img
          src={KelasFE}
          alt="Web Development"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 text-white text-right w-[250px]">
          <h4 className="text-xl md:text-2xl font-bold">Web Development</h4>
          <p className="text-sm md:text-base mt-2 leading-snug opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            Belajar membangun website dari frontend hingga backend dengan teknologi modern.
          </p>
        </div>
      </div>
    </div>

    {/* === KANAN: 2 GAMBAR === */}
    <div className="flex flex-col gap-6 flex-1 items-end">
      
      {/* Mobile Development */}
      <div className="relative w-[600px] h-[200px] rounded-xl overflow-hidden group shadow-lg cursor-pointer">
        <img
          src={KelasFE}
          alt="Mobile Development"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 text-white text-right w-[250px]">
          <h4 className="text-xl md:text-2xl font-bold">Mobile Development</h4>
          <p className="text-sm md:text-base mt-2 leading-snug opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            Bangun aplikasi mobile Android/iOS dengan Flutter & React Native.
          </p>
        </div>
      </div>

      {/* Cyber Security */}
      <div className="relative w-[600px] h-[200px] rounded-xl overflow-hidden group shadow-lg cursor-pointer">
        <img
          src={KelasFE}
          alt="Cyber Security"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 text-white text-right w-[250px]">
          <h4 className="text-xl md:text-2xl font-bold">Cyber Security</h4>
          <p className="text-sm md:text-base mt-2 leading-snug opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            Pelajari dasar keamanan sistem, ethical hacking, dan analisis risiko.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>




      {/* Call to Action */}
      <section
        className="shadow-lg bg-cover bg-no-repeat bg-center min-h-[200px]"
        style={{ backgroundImage: `url(${background21})` }}
        data-aos="fade-up"
      >
        <div className="bg-opacity-60">
          <div className="max-w-3xl mx-auto text-center py-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Ayo Bergabung!</h2>
            <p className="mb-6 text-white">
              Tingkatkan skillmu bersama komunitas belajar yang positif dan produktif.
            </p>
            <a
              href="/daftar"
              className="bg-gradient-to-r from-indigo-400 to-violet-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition hover:from-blue-600 hover:to-purple-700"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
