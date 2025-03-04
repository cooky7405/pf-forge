"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import MainLogo from "@/components/main-logo";
import ServiceApp from "@/components/service-app";
import ServiceWeb from "@/components/service-web";
import ServicePC from "@/components/service-pc";
import ServiceInfo from "@/components/service-repair";

export default function Service() {
  // 브라우저 너비에 따라 그리드 레이아웃을 제어하는 state
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1024); // 1024px 이상이면 2열 레이아웃
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 상단 고정 헤더 */}
      <header className="flex bg-blue_deep p-4 sticky top-0 z-50">
        <div className="px-4">
          <MainLogo />
        </div>
        <div className="flex-1 text-blue_light">
          <Navigation />
        </div>
      </header>

      {/* 서비스 섹션 */}
      <section id="services" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* 브라우저 크기에 따라 그리드 레이아웃 변경 + Framer Motion layout 애니메이션 적용 */}
          <motion.div
            layout
            transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
            className={`grid justify-items-center ${
              isLarge ? "grid-cols-2" : "grid-cols-1"
            } gap-x-8 gap-y-8`}
          >
            <div className="min-w-[300px]">
              <ServiceApp />
            </div>
            <div className="min-w-[300px]">
              <ServiceWeb />
            </div>
            <div
              className={`min-w-[300px] ${
                isLarge ? "col-span-2 justify-self-center" : ""
              }`}
            >
              <ServicePC />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 서비스 관리 및 유지보수 섹션 */}
      <section id="info" className="py-8 scroll-mt-16">
        <ServiceInfo />
      </section>
    </>
  );
}
