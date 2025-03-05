"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // 햄버거 메뉴 & 닫기 버튼 아이콘
import MiniLogo from "./mini-logo";

export default function Navigation1() {
  const [isOpen, setIsOpen] = useState(false); // 메뉴 상태 관리

  // 메뉴 항목 데이터
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* 💻 큰 화면 (lg 이상)에서는 기본 사이드바 유지 */}
      <div className="hidden lg:flex lg:flex-col bg-gray-900 text-white w-64 min-w-[200px] fixed top-0 left-0 bottom-0 overflow-y-auto p-6">
        <div className="flex justify-center">
          <MiniLogo />
        </div>

        <nav>
          <h2 className="mb-8 text-xl font-bold">PLATFORM FORGE</h2>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:opacity-70">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 📱 작은 화면 (md 이하)에서는 햄버거 메뉴 표시 */}
      <button
        className="lg:hidden fixed top-4 right-4 p-2 bg-gray-900 text-white rounded-md z-50"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* 📱 모바일 네비게이션 사이드바 (햄버거 메뉴 클릭 시 열림) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          {/* 사이드바 */}
          <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col">
            {/* 닫기 버튼 */}
            <button className="self-end mb-4" onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* 메뉴 리스트 */}
            <nav>
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                PLATFORM FORGE
              </h2>
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-800 hover:text-blue-500 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
