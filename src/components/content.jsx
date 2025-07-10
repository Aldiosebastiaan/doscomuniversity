import React, { useEffect } from 'react';
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

import '../styles/custom-swiper.css';

const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const baseImages = [Img1, Img2, Img3, Img4];
  const images = Array.from({ length: 10 }, () => baseImages).flat(); // 4 x 5 = 20 slide


  return (
    <main
      className="relative text-white bg-cover bg-no-repeat bg-[top_30%] min-h-screen pt-[300px]"
      style={{ backgroundImage: `url(${BgWeb})` }}
    >
      {/* Konten Utama */}
      <section className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-6">
          Selamat Datang di Doscom University
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Bootcamp ini ditujukan bagi pemula maupun intermediate yang ingin belajar tentang Web Development, Mobile Development, dan pengembangan aplikasi secara kolaboratif dengan mentor dari Doscom.
        </p>

        {/* Gambar OurProgram */}
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

        {/* Swiper Carousel */}
        <div className="w-full flex justify-center mb-20" data-aos="fade-up" data-aos-delay="400">
          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 2000,
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
      </section>

      {/* Section Ajak Daftar */}
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
