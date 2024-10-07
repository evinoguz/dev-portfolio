import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;
  return (
    <header className="flex items-center justify-between text-white px-5 py-4 h-16 bg-transparent max-w-5xl mx-auto mt-12">
      <span></span>

      {mounted && (
        <button
          onClick={() => setTheme(themeMode === "dark" ? "light" : "dark")}
          className="px-6 py-2 bg-gray-900 text-3xl text-primary-light dark:bg-primary-light dark:text-gray-900 rounded-md font-semibold uppercase"
        >
          {themeMode === "dark" ? <CiLight /> : <CiDark />}
        </button>
      )}
    </header>
  );
};

export default Header;
