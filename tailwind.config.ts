import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0ea5e9", // sky-500
          accent: "#22c55e"   // green-500
        }
      }
    }
  },
  plugins: []
};
export default config;
