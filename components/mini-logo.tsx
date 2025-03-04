import HomeIcon from "../public/images/logo.svg";

const MiniLogo = () => {
  return (
    <div className="relative w-32 h-32 flex justify-center items-center">
      <div className="absolute inset-0 bg-gray-800 rounded-full"></div>
      <div className="relative w-28 h-28 bg-blue-500 rounded-full flex items-center justify-center">
        {/* 로고 이미지 (비율 유지하며 크기 조정) */}
        <HomeIcon className="p-1 w-24 h-24 max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default MiniLogo;
