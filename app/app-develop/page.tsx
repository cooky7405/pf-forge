"use client";

import Image from "next/image";
import app1 from "@/public/images/app1.svg";
import app2 from "@/public/images/app2.svg";
import app3 from "@/public/images/app3.svg";
import app4 from "@/public/images/app4.svg";
import app5 from "@/public/images/app5.svg";
import app6 from "@/public/images/app6.svg";
import app7 from "@/public/images/app7.svg";

const sections = [
  {
    image: app1,
    title: "변화에 대응할 수 있는 유연한 플랫폼",
    description: "최신 기술을 적용하여 변화에 대응하는 플랫폼을 제공합니다.",
  },
  {
    image: app2,
    title: "UI 트렌드 반영",
    description: "최신 UI/UX 트렌드를 반영한 직관적인 디자인을 제공합니다.",
  },
  {
    image: app3,
    title: "고객 맞춤형 기능 설계",
    description:
      "고객의 요구에 맞춘 기능을 설계하여 최상의 솔루션을 제공합니다.",
  },
  {
    image: app4,
    title: "확장 가능성",
    description: "미래의 확장을 고려한 구조로 유연한 개발이 가능합니다.",
  },
  {
    image: app5,
    title: "보안 강화",
    description: "최신 보안 기술을 적용하여 안전한 환경을 제공합니다.",
  },
  {
    image: app6,
    title: "데이터 분석",
    description: "효율적인 데이터 분석 기능을 지원하여 인사이트를 제공합니다.",
  },
  {
    image: app7,
    title: "클라우드 최적화",
    description:
      "클라우드 환경에서 최적의 성능을 발휘하는 솔루션을 제공합니다.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full max-w-screen overflow-hidden min-h-screen p-3 gap-12">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col items-start w-full md:w-1/2 lg:w-1/3 p-4 text-left relative"
        >
          {/* 아이콘과 제목 */}
          <div className="flex items-center gap-4 w-fit">
            <Image
              src={section.image}
              alt={section.title}
              width={50}
              height={50}
              className="h-auto"
            />
            <h2 className="text-xl md:text-2xl font-bold whitespace-nowrap">
              {section.title}
            </h2>
          </div>

          {/* 긴 선 */}
          <div className="mt-2 w-full flex items-center gap-10">
            <div className="border-t-2 border-blue-300 flex-grow"></div>
          </div>

          {/* 설명 텍스트 */}
          <p className="text-md text-gray-600 mt-2 max-w-xs">
            {section.description}
          </p>
        </div>
      ))}
    </div>
  );
}
