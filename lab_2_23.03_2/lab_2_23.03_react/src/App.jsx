import { useEffect, useState } from "react";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

function App() {
  const [theme, setTheme] = useState("light");

  // автоматична тема
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) setTheme("light");
    else setTheme("dark");
  }, []);

  // ручне перемикання
  function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div
      className={
        theme === "dark"
          ? "bg-black text-white min-h-screen py-10 px-4"
          : "bg-slate-100 text-black min-h-screen py-10 px-4"
      }
    >
      <div className="max-w-3xl mx-auto">

        {/* 🔥 КНОПКА */}
        <button
          onClick={toggleTheme}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Змінити тему
        </button>
<ContactForm />
        <Header />
        <Profile />
        <Education />
        <Skills />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}

export default App;