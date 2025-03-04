// app/components/Service.tsx
import React from "react";
import ServiceCard from "@/components/service-card";
import Image from "next/image"; // (Testimonials에서 사용 예시)
import ServiceIcon from "../public/images/app1.svg";

// 예시 데이터: 실제 사용 시 서버/파일 등에서 받아올 수도 있음
const servicesData = [
  {
    title: "앱 개발",
    description: `"사주세요"플렛폼: ios/android개발:ReactNative 결제/채팅/쇼핑핑`,
    Icon: ServiceIcon,
  },
  {
    title: "서비스 2",
    description: "서비스에 대한 간단한 설명 2",
    Icon: ServiceIcon,
  },
  {
    title: "서비스 3",
    description: "서비스에 대한 간단한 설명 3",
    Icon: ServiceIcon,
  },
  {
    title: "서비스 4",
    description: "서비스에 대한 간단한 설명 4",
    Icon: ServiceIcon,
  },
  {
    title: "서비스 5",
    description: "서비스에 대한 간단한 설명 5",
    Icon: ServiceIcon,
  },
  {
    title: "서비스 6",
    description: "서비스에 대한 간단한 설명 6",
    Icon: ServiceIcon,
  },
];

export default function Service() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          Icon={service.Icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
