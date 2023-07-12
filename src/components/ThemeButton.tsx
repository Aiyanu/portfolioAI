"use client"
import React from "react";
export default function ThemeButton() {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

  // update state on toggle
    //@ts-ignore
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage?.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    if (localTheme) {
      // add custom data-theme attribute to html tag required to update theme using DaisyUI
      document.querySelector("html")?.setAttribute("data-theme", localTheme);
    }
  }, [theme]);
    return (
      <div>
        <div className="flex-none">
        Toggle button here
        <button className="btn btn-square btn-ghost">
                <label className="swap swap-rotate w-12 h-12">
                  <input
                    type="checkbox"
                    onChange={handleToggle}
                    // show toggle image based on localstorage theme
                    checked={theme === "light" ? false : true}
                  />
        {/* light theme sun image */}
        <p className="w-8 h-8 swap-on">☀️</p>
        {/* dark theme moon image */}
        <p className="w-8 h-8 swap-off">🌙</p>
                </label>
              </button>
            </div>
      </div>
    );
}
