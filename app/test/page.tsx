import Navigation1 from "@/components/navigation1";

// app/page.tsx
export default function Home() {
  return (
    <>
      {/* 왼쪽 네비게이션 영역 */}
      <Navigation1 />

      {/* 오른쪽 메인(섹션) 영역 */}
      <div className="ml-64 p-6">
        <section
          id="home"
          className="min-h-screen border-b border-gray-300 py-8"
        >
          <h1 className="text-2xl font-bold mb-4">Home</h1>
          <p>여기는 Home 섹션입니다.</p>
        </section>

        <section
          id="about"
          className="min-h-screen border-b border-gray-300 py-8"
        >
          <h1 className="text-2xl font-bold mb-4">About</h1>
          <p>여기는 About 섹션입니다.</p>
        </section>

        <section
          id="resume"
          className="min-h-screen border-b border-gray-300 py-8"
        >
          <h1 className="text-2xl font-bold mb-4">Resume</h1>
          <p>여기는 Resume 섹션입니다.</p>
        </section>

        <section
          id="portfolio"
          className="min-h-screen border-b border-gray-300 py-8"
        >
          <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
          <p>여기는 Portfolio 섹션입니다.</p>
        </section>

        <section
          id="services"
          className="min-h-screen border-b border-gray-300 py-8"
        >
          <h1 className="text-2xl font-bold mb-4">Services</h1>
          <p>여기는 Services 섹션입니다.</p>
        </section>

        <section id="contact" className="min-h-screen py-8">
          <h1 className="text-2xl font-bold mb-4">Contact</h1>
          <p>여기는 Contact 섹션입니다.</p>
        </section>
      </div>
    </>
  );
}
