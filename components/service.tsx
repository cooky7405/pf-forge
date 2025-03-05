"use client";

// 필요한 도구와 컴포넌트를 불러옵니다.
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import ServiceCard from "@/components/service-card";
import ServiceApp from "@/components/service-app";
import ServicePc from "@/components/service-pc";
import ServiceIcon from "../public/images/app1.svg";

// 서비스 카드에 들어갈 정보를 담은 목록입니다.
const servicesData = [
  {
    title: "앱 개발",
    description: `"사주세요" 플렛폼: ios/android 개발: React Native 결제/채팅/쇼핑`,
    Icon: ServiceIcon,
    component: <ServiceApp />,
  },
  {
    title: "PC 개발",
    description: "PC 소프트웨어 개발 및 유지보수",
    Icon: ServiceIcon,
    component: <ServicePc />,
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

// 현재 브라우저 창의 너비를 보고, 모바일(너비 768px 미만)이면 null, 아니면 0을 반환하는 함수입니다.
const getInitialSelectedService = () => {
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }
  return 0;
};

export default function Service() {
  // 초기 선택된 서비스 값:
  // - 모바일이면 null
  // - 그 외에는 0 (첫번째 카드)
  const [selectedService, setSelectedService] = useState<number | null>(
    getInitialSelectedService()
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Popper 관련 상태: 팝업(모달)이 어디에 붙을지 기준이 되는 카드(요소)와 모달 요소를 저장합니다.
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  // usePopper를 사용하여 기준 요소(referenceElement)와 팝업 요소(popperElement)의 위치를 계산합니다.
  // placement: "bottom-start"는 기준 요소의 바로 아래 왼쪽에 팝업이 나타나도록 합니다.
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 0], // 추가 이동 값이 없도록 설정합니다.
        },
      },
    ],
  });

  // 현재 모바일 여부를 저장할 참조 변수입니다.
  // 처음에 브라우저 너비가 768px 미만이면 모바일(true), 아니면 false를 저장합니다.
  const mobileRef = useRef<boolean>(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  // 창 크기가 변경될 때 실행되는 효과입니다.
  // 모바일 크기로 작아질 경우에만 selectedService를 초기화(null로)합니다.
  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth < 768; // 지금 창이 모바일 크기인지 확인합니다.
      // 만약 지금은 모바일인데, 이전에는 모바일이 아니었으면 초기화합니다.
      if (isCurrentlyMobile && !mobileRef.current) {
        setSelectedService(null);
      }
      // 현재 모바일 상태를 mobileRef에 저장합니다.
      mobileRef.current = isCurrentlyMobile;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 카드 클릭 시 실행되는 함수입니다.
  // 클릭한 카드를 기준 요소로 설정하고, 모달을 열거나 닫습니다.
  const handleSelectService = (index: number, event: React.MouseEvent) => {
    // 클릭한 카드의 실제 HTML 요소를 가져와 기준 요소로 설정합니다.
    const cardElement = event.currentTarget.firstElementChild as HTMLElement;
    setReferenceElement(cardElement);

    // 만약 같은 카드를 다시 클릭하면 모달을 닫고, 다른 카드를 클릭하면 모달을 엽니다.
    if (selectedService === index) {
      setIsModalOpen(false);
      setSelectedService(null);
      console.log(`인덱스 ${index} 선택 해제, 모달 닫힘`);
    } else {
      setSelectedService(index);
      setIsModalOpen(true);
      console.log(`인덱스 ${index} 선택, 모달 열림`);
    }
  };

  // 모달을 닫는 함수입니다.
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    console.log("모달 닫힘");
  };

  // 모달 요소를 만듭니다.
  // createPortal을 사용하면 모달을 document.body에 띄워 부모 요소와의 위치 문제를 피할 수 있습니다.
  const modal = isModalOpen && selectedService !== null && (
    <div
      ref={setPopperElement} // 이 요소를 Popper가 위치를 계산할 때 사용합니다.
      style={styles.popper} // Popper가 계산한 위치 스타일을 적용합니다.
      {...attributes.popper} // Popper가 필요로 하는 추가 속성들도 적용합니다.
      className="bg-white p-6 rounded-lg w-11/12 max-w-md shadow-lg border border-gray-300 md:hidden"
    >
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={closeModal} // 이 버튼을 누르면 모달이 닫힙니다.
      >
        ✕
      </button>
      {servicesData[selectedService]?.component}
      {/* 선택된 서비스에 해당하는 상세 컴포넌트를 모달 안에 보여줍니다. */}
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-8 relative">
      {/* 서비스 카드 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            onClick={(event) => handleSelectService(index, event)}
          >
            <ServiceCard
              Icon={service.Icon}
              title={service.title}
              description={service.description}
              isSelected={selectedService === index}
            />
          </div>
        ))}
      </div>

      {/* 큰 화면(데스크탑)에서는 선택된 서비스의 상세 컴포넌트를 바로 옆에 보여줍니다. */}
      <div className="w-full hidden md:flex md:justify-center">
        {selectedService !== null && servicesData[selectedService]?.component}
      </div>

      {/* 모바일 화면에서는 모달을 Portal을 통해 document.body에 렌더링합니다. */}
      {isModalOpen && createPortal(modal, document.body)}
    </div>
  );
}
