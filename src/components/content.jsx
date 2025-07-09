import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import background21 from '../assets/bg21.png';
import coverImage from '../assets/cover_du.png';
import OurProgram from '../assets/Our_program.png';
import Regist from '../assets/Regist.png';
import Timeline from '../assets/Timeline.png';

const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardStyle =
    'relative bg-gray-100 p-6 rounded-xl shadow-md transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-indigo-100';

  return (
    <main className="text-gray-800 bg-white">
      {/* Cover Image Section */}
      <section className="w-full h-auto">
        <img
          src={coverImage}
          alt="Doscom University Cover"
          className="w-full object-cover"
        />
      </section>

      {/* Konten Utama */}
      <section className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-6">
          Selamat Datang di Doscom University
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Bootcamp ini ditujukan bagi pemula maupun intermediate yang ingin belajar tentang Web Development, Mobile Development, dan pengembangan aplikasi secara kolaboratif dengan mentor dari Doscom.
        </p>

        {/* Cards with Icons */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 - Web Dev */}
          <div className={cardStyle} data-aos="fade-right">
            <img
              src={OurProgram}
              alt="Our Program"
              className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-40"
            />
            <h3 className="text-xl font-semibold mt-12 mb-2 text-center">Web Development</h3>
            <p className="text-center">
              Belajar HTML, CSS, JavaScript hingga framework modern seperti ReactJS.
            </p>
          </div>

          {/* Card 2 - Mobile Dev */}
          <div className={cardStyle} data-aos="fade-up">
            <img
              src={Timeline}
              alt="Timeline"
              className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-32"
            />
            <h3 className="text-xl font-semibold mt-12 mb-2 text-center">Mobile Development</h3>
            <p className="text-center">
              Belajar prinsip dasar Dart dan penggunaan framework seperti Kotlin dan Flutter.
            </p>
          </div>

          {/* Card 3 - Project */}
          <div className={cardStyle} data-aos="fade-left">
            <img
              src={Regist}
              alt="Registration"
              className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-36"
            />
            <h3 className="text-xl font-semibold mt-12 mb-2 text-center">Project Kolaboratif</h3>
            <p className="text-center">
              Gabung tim, buat proyek nyata, dan latih softskill kerja sama tim secara nyata.
            </p>
          </div>
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
