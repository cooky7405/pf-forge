import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_deep: "#6DA5B1",
        blue_light: "#95D2E5",
        blue_text: "#4693A5",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--primary-color": "#3490dc",
          "--secondary-color": "#ffed4a",
        },
      });
    }),
  ],
};

export default config;
