// app/components/ServiceCard.tsx
import React from "react";

type ServiceCardProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export default function ServiceCard({
  Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
      {/* 왼쪽: 아이콘(이미지) 영역 */}
      <div className="relative w-16 h-16 flex justify-center items-center">
        <div className="relative w-16 h-16 border-2 border-white group-hover:border-blue-500 bg-blue-500 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
          {/* 아이콘 컴포넌트에 fill-current와 text-blue-500를 적용하면, SVG 내부에 fill="currentColor"가 설정되어 있을 경우 파란색으로 변경됩니다. */}
          <Icon className="p-1 w-16 h-16 max-w-full max-h-full fill-current text-white group-hover:text-blue-500" />
        </div>
      </div>

      {/* 오른쪽: 제목, 설명 */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
