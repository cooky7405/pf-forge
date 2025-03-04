"use client";

import Image from "next/image";
import { web_sections } from "@/lib/constants";

export default function ServiceApp() {
  return (
    <div className="">
      {/* 공통 컨테이너 (1200px 제한 + 왼쪽 정렬) */}
      <div className="">
        {/* 앱개발 텍스트 */}
        <div className="text-3xl py-6 font-bold">웹페이지 개발</div>

        {/* 섹션 컨텐츠 */}
        <div className="flex flex-col gap-6">
          {web_sections.map((section, index) => (
            <div key={index} className="flex flex-col">
              {/* 아이콘과 제목을 가로로 정렬, 바닥(y축) 맞춤 */}
              <div className="flex items-end space-x-4">
                {/* 아이콘 */}
                <Image
                  src={section.image}
                  alt={section.titles[0]}
                  width={100}
                  height={40}
                  className="h-auto"
                />

                {/* 제목 리스트 */}
                <div className="flex flex-col">
                  {section.titles.map((title, titleIndex) => (
                    <h2 key={titleIndex} className="text-lg font-semibold">
                      {title}
                    </h2>
                  ))}
                </div>
              </div>

              {/* 고정된 길이의 긴 선 (예: 160px) */}
              <div className="flex items-center">
                <div
                  className="border-t-2 border-blue-300"
                  style={{ width: "430px" }}
                ></div>
              </div>

              {/* 설명 텍스트 */}
              <p
                className="text-md text-gray-600 mt-2 "
                style={{ width: "430px" }}
              >
                <div className="flex flex-col">
                  {section.descriptions.map((description, descriptionindex) => (
                    <h2 key={descriptionindex}>{description}</h2>
                  ))}
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
