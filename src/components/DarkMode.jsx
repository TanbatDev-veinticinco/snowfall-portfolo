import "./DarkMode.css";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load saved theme or fallback
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkMode;





// import React from "react";
// import "./DarkMode.css";

// const DarkMode = () => {
//   const setDarkMode = () => {
//     document.querySelector("body").setAttribute("data-theme", "dark");
//     localStorage.setItem("selectedTheme", "dark")
//   };

//   const setLightMode = () => {
//     document.querySelector("body").setAttribute("data-theme", "light");
//     localStorage.setItem("selectedTheme", "dark")
//   };

//   const selectedTheme = localStorage.getItem("selectedTheme");

//   if (selectedTheme === "dark") {
//     setDarkMode(); 
//   }

//   const toggleTheme = (e) => {
//     if (e.target.checked) setDarkMode();
//     else setLightMode();
//   };

//   return (
//     <section>
//       <div>
//         <input
//           className="dark_mode_input"
//           type="checkbox"
//           id="darkmode-toggle"
//           onChange={toggleTheme}
//           defaultChecked={selectedTheme === "dark"}
//         />
//         <label className="dark_mode_label" htmlFor="darkmode-toggle">
//           <i class="fa-solid fa-moon"></i>
//           <i class="fa-solid fa-sun"></i>
//         </label>
//       </div>
//     </section>
//   );
// };

// export default DarkMode;
