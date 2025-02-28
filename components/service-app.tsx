"use client";

import Image from "next/image";
import { app_sections } from "@/lib/constants";

export default function ServiceApp() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-300">
      {/* 공통 컨테이너 (1200px 제한 + 왼쪽 정렬) */}
      <div className="max-w-[1200px] w-full flex flex-col items-start pl-4">
        {/* 앱개발 텍스트 */}
        <div className="text-3xl py-6">앱개발</div>

        {/* 섹션 컨텐츠 */}
        <div className="w-full">
          {app_sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-full lg:w-1/2 p-4 text-left relative"
            >
              {/* 아이콘과 제목 (앱개발 텍스트와 동일한 x 좌표) */}
              <div className="flex items-center gap-4 w-fit">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={100}
                  height={40}
                  className="h-auto"
                />
                <h2 className="text-xl font-bold whitespace-nowrap max-w-xs">
                  {section.title}
                </h2>
              </div>
              {/* 긴 선 */}
              <div className="w-full flex items-center">
                <div className="border-t-2 border-blue-300 w-full max-w-[500px]"></div>
              </div>
              {/* 설명 텍스트 */}
              <p className="text-md text-gray-600 mt-2 max-w-xs">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
