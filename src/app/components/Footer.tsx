import Link from "next/link";
import { Shield, Hospital, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Davon</h3>
          <p>
            Davon aims to enhance patient safety, improve efficiency, and
            achieve operational excellence.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-red-400 transition-all"
                title="Go to homepage"
              >
                Home Page
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-red-400 transition-all">
                About Davon
              </a>
            </li>
            {/* Add more */}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Features</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#features"
                className="hover:text-red-400 transition-all"
              >
                Davon CMMS
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>
            İzmir Teknoloji Geliştirme Bölgesi A3 Binası No:16/A İYTE Kampüsü
            Gülbahçe, Urla/İzmir
          </p>
          <p>+90 (232) 765 90 30</p>
          <p>info@davon.com.tr</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com/company/davon"
              className="text-white hover:text-red-400 transition-all"
              title="Follow Davon on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Shield className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/davon"
              className="text-white hover:text-red-400 transition-all"
              title="Follow Davon on Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Hospital className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@davon.com.tr"
              className="text-white hover:text-red-400 transition-all"
              title="Contact Davon via email"
            >
              <Wrench className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">
        © Copyright Davon. All Rights Reserved
      </div>
    </footer>
  );
}
