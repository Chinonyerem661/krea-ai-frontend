import {
  Sun,
  Moon,
  Home,
  Image as ImageIcon,
  Video,
  PenLine,
  WandSparkles,
  DraftingCompass,
  Folder,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-10">
        <div className="flex items-center">
          <Image
            src={isDark ? "/k-logo-dark.png" : "/k-logo.png"}
            alt="K Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />

          <div className="hidden md:flex items-center space-x-2 ml-10 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-200 via-pink-400 to-purple-600 flex items-center justify-center"></div>

            <span
              className={`font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              benevolentalmond
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <nav
          className={`absolute left-1/2 -translate-x-1/2 
              hidden md:flex items-center space-x-2 rounded-2xl h-14 px-4 mt-2
              ${isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
        >
          <div className="p-3 rounded-xl bg-white text-black cursor-pointer">
            <Home className="w-8 h-6" />
          </div>

          <div
            className={`p-2 rounded-xl cursor-pointer transition-colors 
      ${
        isDark
          ? "text-white hover:bg-gray-600 hover:text-black"
          : "text-black hover:bg-white hover:text-black"
      }`}
          >
            <ImageIcon className="w-8 h-6" />
          </div>

          <div
            className={`p-2 rounded-xl cursor-pointer transition-colors 
      ${
        isDark
          ? "text-white hover:bg-gray-600 hover:text-black"
          : "text-black hover:bg-white hover:text-black"
      }`}
          >
            <Video className="w-8 h-6 fill-current" />
          </div>

          <div
            className={`p-2 rounded-xl cursor-pointer transition-colors 
      ${
        isDark
          ? "text-white hover:bg-gray-600 hover:text-black"
          : "text-black hover:bg-white hover:text-black"
      }`}
          >
            <WandSparkles className="w-8 h-6" />
          </div>

          <div
            className={`p-2 rounded-xl cursor-pointer transition-colors 
      ${
        isDark
          ? "text-white hover:bg-gray-600 hover:text-black"
          : "text-black hover:bg-white hover:text-black"
      }`}
          >
            <PenLine className="w-8 h-6" />
          </div>

          <div
            className={`p-2 rounded-xl cursor-pointer transition-colors 
      ${
        isDark
          ? "text-white hover:bg-gray-600 hover:text-black"
          : "text-black hover:bg-white hover:text-black"
      }`}
          >
            <DraftingCompass className="w-8 h-6 fill-current" />
          </div>

          <div
            className={`p-2 rounded-xl cursor-pointer transition-colors 
      ${
        isDark
          ? "text-white hover:bg-gray-600 hover:text-black"
          : "text-black hover:bg-white hover:text-black"
      }`}
          >
            <Folder className="w-8 h-6 fill-current" />
          </div>
        </nav>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-image-icon lucide-image"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span>Gallery</span>
        </button>
        <button className="flex items-center space-x-1 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-headset-icon lucide-headset"
          >
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
            <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
          </svg>
          <span>Support</span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentcolor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bell-icon lucide-bell"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-300 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="w-8 h-8 bg-gradient-to-r from-pink-200 via-pink-400 to-purple-600 rounded-full"></div>
      </div>

      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {menuOpen && (
        <div
          className={`absolute top-16 right-4 w-56 rounded-lg shadow-lg p-4 z-50 ${
            isDark ? "bg-gray-800/90 text-white" : "bg-gray-100/80 text-black"
          } md:hidden`}
        >
          <div className="flex items-center space-x-2 mb-4 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-200 via-pink-400 to-purple-600 flex items-center justify-center"></div>
            <span className="font-medium">benevolentalmond</span>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center space-x-2 cursor-pointer">
              <Home className="w-5 h-5" /> <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <ImageIcon className="w-5 h-5" /> <span>Images</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <Video className="w-5 h-5" /> <span>Videos</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <WandSparkles className="w-5 h-5" /> <span>Magic</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <PenLine className="w-5 h-5" /> <span>Design</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <DraftingCompass className="w-5 h-5" /> <span>Explore</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <Folder className="w-5 h-5" /> <span>Files</span>
            </li>
          </ul>

          <div className="mt-4 space-y-2">
            <button className="w-full flex items-center justify-start space-x-2 text-sm">
              <span>Gallery</span>
            </button>
            <button className="w-full flex items-center justify-start space-x-2 text-sm">
              <span>Support</span>
            </button>
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-start space-x-2 text-sm"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
