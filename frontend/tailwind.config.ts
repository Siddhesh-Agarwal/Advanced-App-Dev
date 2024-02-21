import type { Config } from "tailwindcss"

const config = {
  content: ['./src/**/*.tsx'],
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui")
  ],
} satisfies Config

export default config