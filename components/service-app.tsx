"use client";

import Image from "next/image";
import { app_sections } from "@/lib/constants";

export default function ServiceApp() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      {/* 앱개발 텍스트 */}
      <div className="text-3xl py-6 font-bold">앱개발</div>

      {/* 섹션 컨텐츠 (반응형 1~3열 지원) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {app_sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col p-4 border rounded-lg shadow-md"
          >
            {/* 아이콘과 제목을 가로 정렬 */}
            <div className="flex items-end space-x-4">
              {/* 아이콘 */}
              <Image
                src={section.image}
                alt={section.title[0]}
                width={100}
                height={40}
                className="h-auto"
              />

              {/* 제목 리스트 */}
              <div className="flex flex-col">
                {section.title.map((title, titleIndex) => (
                  <h2 key={titleIndex} className="text-lg font-semibold">
                    {title}
                  </h2>
                ))}
              </div>
            </div>

            {/* 구분선 */}
            <div className="flex items-center mt-2">
              <div className="border-t-2 border-blue-300 w-full"></div>
            </div>

            {/* 설명 텍스트 */}
            <p className="text-md text-gray-600 mt-2">
              {section.descriptions.map((description, descriptionIndex) => (
                <h2 key={descriptionIndex}>{description}</h2>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
