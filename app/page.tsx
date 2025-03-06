"use client";

import Navigation1 from "@/components/navigation1";
import MainLogo from "@/components/main-logo";
import Service from "@/components/service";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="flex">
      {/* 네비게이션 */}
      <Navigation1 />

      {/* 오른쪽 메인(섹션) 영역 */}
      <div className="flex-1 lg:ml-64">
        <section
          id="home"
          className="relative min-h-screen border-b border-gray-300 py-8 overflow-hidden"
        >
          {/* 좌측 배경 영역 (절대 위치, 고정 150px) */}
          <div
            className="absolute top-0 left-0 h-full"
            style={{ width: "400px" }}
          >
            <div className="h-full grid grid-rows-[20%_20%_20%_40%]">
              <div className="bg-[#66b2ff]" />
              <div className="bg-[#003366]" />
              <div className="bg-[#66b2ff]" />
              <div className="bg-[#336699]" />
            </div>
          </div>

          {/* 우측 배경 영역 (절대 위치, 고정 150px) */}
          <div
            className="absolute top-0 right-0 h-full"
            style={{ width: "400px" }}
          >
            <div className="h-full grid grid-rows-[60%_40%]">
              <div className="bg-[#66b2ff]" />
              <div className="bg-[#336699]" />
            </div>
          </div>

          {/* 중앙 배경 영역 */}
          <div className="absolute inset-0 flex justify-center">
            {/* 여기서 max-w-[800px] 등 고정된 최대 너비를 주어
                브라우저가 넓으면 800px 너비로 유지되다가
                좌우 영역이 잘리면 자연스럽게 줄어들도록 합니다. */}
            <div className="relative w-full max-w-[1800px]">
              <div className="absolute inset-0 bg-[#003366]" />
              <div className="relative z-10">
                <div className="scale-50">
                  <MainLogo />
                </div>
                <div></div>
                <h2 className="text-6xl font-bold text-white px-5">
                  PLATPORM FORGE
                </h2>
                <div className="mt-8 px-5">
                  <h1 className="text-3xl font-bold text-white">
                    우리는 <AnimatedText />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 나머지 섹션들 */}
        <section
          id="about"
          className="min-h-screen border-b border-gray-300 py-8"
        >
          <h1 className="text-2xl font-bold">About</h1>
          <p>여기는 About 섹션입니다.</p>
        </section>

        <section
          id="resume"
          className="min-h-screen border-b border-gray-300 py-8"
        >
          <h1 className="text-2xl font-bold">Resume</h1>
          <p>여기는 Resume 섹션입니다.</p>
        </section>

        <section
          id="portfolio"
          className="min-h-screen border-b border-gray-300 py-8"
        >
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <p>여기는 Portfolio 섹션입니다.</p>
        </section>

        <section
          id="services"
          className="min-h-screen border-b border-gray-300 py-8"
        >
          <Service />
        </section>

        <section id="contact" className="min-h-screen py-8">
          <h1 className="text-2xl font-bold">Contact</h1>
          <p>여기는 Contact 섹션입니다.</p>
        </section>
      </div>
    </div>
  );
}
