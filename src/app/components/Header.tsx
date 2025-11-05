import Link from "next/link";
import { Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-md transition-all">
      <nav className="container mx-auto flex items-center justify-between py-3 px-6">
        <div className="text-xl font-bold text-white flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Davon
        </div>
        <ul className="flex space-x-4 text-sm">
          <li>
            <Link
              href="/"
              className="text-white hover:text-red-400 transition-all py-2 px-3 rounded-md hover:bg-red-900/20"
              title="Go to homepage"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-red-400 transition-all py-2 px-3 rounded-md hover:bg-red-900/20"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#why-choose"
              className="text-white hover:text-red-400 transition-all py-2 px-3 rounded-md hover:bg-red-900/20"
            >
              Why Choose Us
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white hover:text-red-400 transition-all py-2 px-3 rounded-md hover:bg-red-900/20"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#rd"
              className="text-white hover:text-red-400 transition-all py-2 px-3 rounded-md hover:bg-red-900/20"
            >
              R&amp;D
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-red-400 transition-all py-2 px-3 rounded-md hover:bg-red-900/20"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
