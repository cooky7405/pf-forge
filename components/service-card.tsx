import React from "react";

type ServiceCardProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  isSelected?: boolean;
};

export default function ServiceCard({
  Icon,
  title,
  description,
  isSelected,
}: ServiceCardProps) {
  return (
    <div
      className={`group flex items-center p-4 border rounded-lg transition-all cursor-pointer
        ${
          isSelected
            ? "border-blue-500 bg-blue-100 shadow-md"
            : "border-gray-200 hover:shadow-md"
        }
      `}
    >
      {/* 왼쪽: 아이콘 */}
      <div className="relative w-16 h-16 flex justify-center items-center">
        <div
          className={`relative w-16 h-16 border-2 rounded-full flex items-center justify-center transition-colors
            ${
              isSelected
                ? "border-blue-500 bg-white"
                : "border-white bg-blue-500 group-hover:bg-white"
            }
          `}
        >
          <Icon
            className={`p-1 w-16 h-16 max-w-full max-h-full fill-current transition-colors
              ${
                isSelected
                  ? "text-blue-500"
                  : "text-white group-hover:text-blue-500"
              }
            `}
          />
        </div>
      </div>

      {/* 오른쪽: 제목, 설명 */}
      <div className="ml-4">
        <h3
          className={`text-xl font-semibold mb-2 transition-colors 
            ${
              isSelected
                ? "text-blue-500"
                : "text-gray-800 group-hover:text-blue-500"
            }
          `}
        >
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
