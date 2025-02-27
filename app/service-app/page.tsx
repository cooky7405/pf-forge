"use client";

import Image from "next/image";
import Navigation from "@/components/navigation";
import MainLogo from "@/components/main-logo";

const titlesAndDescriptions = [
  {
    title: "변화에 대응할 수 있는 유연한 플랫폼",
    description: "최신 기술을 적용하여 변화에 대응하는 플랫폼을 제공합니다.",
  },
  {
    title: "UI 트렌드 반영",
    description: "최신 UI/UX 트렌드를 반영한 직관적인 디자인을 제공합니다.",
  },
  {
    title: "고객 맞춤형 기능 설계",
    description:
      "고객의 요구에 맞춘 기능을 설계하여 최상의 솔루션을 제공합니다.",
  },
  {
    title: "확장 가능성",
    description: "미래의 확장을 고려한 구조로 유연한 개발이 가능합니다.",
  },
  {
    title: "보안 강화",
    description: "최신 보안 기술을 적용하여 안전한 환경을 제공합니다.",
  },
  {
    title: "데이터 분석",
    description: "효율적인 데이터 분석 기능을 지원하여 인사이트를 제공합니다.",
  },
  {
    title: "클라우드 최적화",
    description:
      "클라우드 환경에서 최적의 성능을 발휘하는 솔루션을 제공합니다.",
  },
];

const sections = titlesAndDescriptions.map((item, index) => ({
  image: `/images/app${index + 1}.svg`,
  title: item.title,
  description: item.description,
}));

export default function ServiceApp() {
  return (
    <>
      <header className="flex bg-blue_deep p-4">
        <div className="px-4  ">
          <MainLogo />
        </div>
        <div className="flex-1 text-blue_light">
          <Navigation />
        </div>
      </header>
      <div className="flex flex-wrap items-center justify-center max-w-screen overflow-hidden min-h-screen p-3 gap-0">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-start w-full lg:w-1/2 p-4 text-left relative"
          >
            {/* 아이콘과 제목 */}
            <div className="flex items-center gap-4 w-fit">
              <Image
                src={section.image}
                alt={section.title}
                width={50}
                height={20}
                className="h-auto"
              />
              <h2 className="text-xl font-bold whitespace-nowrap max-w-xs">
                {section.title}
              </h2>
            </div>

            {/* 긴 선 */}
            <div className="w-full flex items-center ">
              <div className="border-t-2 border-blue-300 w-full max-w-[500px]"></div>
            </div>

            {/* 설명 텍스트 */}
            <p className="text-md text-gray-600 mt-2 max-w-xs">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
