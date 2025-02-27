"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categories = [
  {
    name: "회사소개",
    subcategories: [
      { name: "why? pf!", link: "#" },
      { name: "we are", link: "#" },
    ],
  },
  {
    name: "서비스 소개",
    subcategories: [
      { name: "앱개발", link: "service-app/" },
      { name: "웹페이지 개발", link: "#" },
      { name: "PC 전용 프로그램 개발", link: "#" },
      { name: "서비스 관리 및 유지 보수", link: "#" },
    ],
  },
];

export default function Navigation() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const router = useRouter();

  const handleSubcategoryClick = (subcategory: {
    name: string;
    link: string;
  }) => {
    setSelectedSubcategory(subcategory.name);
    router.push(subcategory.link);
  };

  return (
    <nav className="flex flex-row items-center justify-between w-full max-w-[200px] mx-auto  space-x-2 just rounded-full px-4 py-2 min-w-[250px] min-h-[50px]">
      {categories.map((category) => (
        <div
          key={category.name}
          className="relative"
          onMouseEnter={() => setOpenCategory(category.name)}
          onMouseLeave={() => setOpenCategory(null)}
        >
          {/* 카테고리 버튼 */}
          <button
            className={`category-btn whitespace-nowrap ${
              openCategory === category.name
                ? "bg-white text-project outline outline-1 outline-project outline-offset-[-1px]"
                : ""
            }`}
          >
            {category.name}
          </button>

          {/* 서브 카테고리 (크기 고정) */}
          <div
            className={`absolute submenu flex flex-col w-full min-w-[200px] min-h-[100px] transition-all duration-300 ${
              openCategory === category.name
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            {category.subcategories.map((sub) => (
              <button
                key={sub.name}
                onClick={() => handleSubcategoryClick(sub)}
                className={`submenu-item rounded-lg ${
                  selectedSubcategory === sub.name
                    ? "bg-project text-white"
                    : ""
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
