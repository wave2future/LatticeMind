import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f6f9fe",
        paper: "#ffffff",
        ink: "#102033",
        muted: "#64748b",
        line: "#dbe7f7",
        brand: {
          DEFAULT: "#155eef",
          2: "#4f8cff",
        },
        indigo2: "#6257d9",
        teal2: "#0f9f96",
        green2: "#3fa66b",
        orange2: "#f58a2a",
        purple2: "#7b61d1",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Segoe UI",
          "PingFang SC",
          "Microsoft YaHei",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 18px 45px rgba(29, 78, 216, .12)",
        soft: "0 10px 28px rgba(15, 35, 65, .08)",
        bar: "0 6px 22px rgba(35, 55, 90, .07)",
      },
      borderRadius: {
        xl2: "16px",
        xl3: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
