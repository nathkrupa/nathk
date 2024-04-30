import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      animation: {
        // slide: "slide 20s linear infinite",
        "loop-scroll": "loop-scroll 150s linear infinite",
      },
      keyframes: {
        // slide: {
        //   "0%": { transform: "translateX(0)" },
        //   "100%": { transform: "translateX(-30%)" },
        // },
        "loop-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
