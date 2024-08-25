import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'new-tiny': '360px',
      
      'also-tiny': '400px',

      'tiny': '450px',
      
      'sm': '640px',
      
      'md': '768px',
      
      "navbar-md": '880px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        white: 'var(--white)',
        blue: 'var(--blue)',
        'secondary-14-opacity': 'rgba(89, 0, 58, 0.14)',
        'secondary-24-opacity': 'rgba(89, 0, 58, 0.24)',
        'blue-31-opacity': 'rgba(137, 223, 255, 0.31)',
        'other-blue': '#D9E1ED',
        'black-opacity-10': 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
