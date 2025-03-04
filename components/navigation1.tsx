// app/page.tsx
import MiniLogo from "./mini-logo";

export default function Navigation1() {
  return (
    <div className="bg-gray-900 text-white w-64 min-w-[200px] fixed top-0 left-0 bottom-0 overflow-y-auto p-6">
      <MiniLogo />

      <nav>
        <h2 className="mb-8 text-xl font-bold">PLATFORM FORGE</h2>
        <ul className="space-y-4">
          <li>
            <a href="#home" className="hover:opacity-70">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:opacity-70">
              About
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:opacity-70">
              Resume
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:opacity-70">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#services" className="hover:opacity-70">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
