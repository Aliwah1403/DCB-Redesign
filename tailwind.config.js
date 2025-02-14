/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./app/**/*.{js,jsx}",
  "./src/**/*.{js,jsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      "fade-up": {
        from: { opacity: "0", transform: "translateY(20px)" },
        to: { opacity: "1", transform: "none" },
      },
      "loop-scroll": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-50%)",
        },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "loop-scroll": "loop-scroll 20s linear infinite",
      "fade-up": "fade-up 1000ms var(--animation-delay, 0ms) ease forwards",
    },
    backgroundColor: {
      "nav-trigger": "transparent",
      "nav-trigger-hover": "rgba(255, 255, 255, 0.1)",
      "nav-trigger-hover-scrolled": "rgba(0, 0, 0, 0.05)",
    },
  },
};
import tailwindcssAnimate from "tailwindcss-animate";

export const plugins = [
  tailwindcssAnimate,
  function ({ addUtilities }) {
    const newUtilities = {
      ".nav-trigger": {
        backgroundColor: "transparent !important",
      },
      ".nav-trigger:hover, .nav-trigger:focus": {
        backgroundColor: "rgba(255, 255, 255, 0.1) !important",
      },
      ".scrolled .nav-trigger:hover, .scrolled .nav-trigger:focus": {
        backgroundColor: "rgba(0, 0, 0, 0.05) !important",
      },
    };
    addUtilities(newUtilities, ["responsive", "hover", "focus"]);
  },
];
