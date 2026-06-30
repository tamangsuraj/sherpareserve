import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep forest / charcoal green — dominant dark surface
        forest: {
          DEFAULT: "#0F1F1A",
          deep: "#0A1410",
          soft: "#16271F",
          raised: "#1B302651",
          line: "#243A2E",
        },
        // Warm gold / brass accent
        gold: {
          DEFAULT: "#C9A86A",
          sheen: "#E8D6AC",
          soft: "#DCC58E",
          deep: "#9A7B43",
        },
        // Warm cream / bone — secondary light surface
        bone: {
          DEFAULT: "#F2EBDD",
          deep: "#E6DAC4",
          soft: "#FAF6EE",
          line: "#D9CCB2",
        },
        // Desaturated sage — topographic contour ink, used sparingly
        patina: "#5E7A6B",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        wordmark: "0.46em",
        seal: "0.34em",
        wide: "0.2em",
        data: "0.16em",
      },
      maxWidth: {
        editorial: "66rem",
      },
      transitionTimingFunction: {
        lux: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: "0" },
        },
        sheen: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        sheen: "sheen 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
