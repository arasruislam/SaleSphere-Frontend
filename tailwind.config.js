import { keepTheme } from "keep-react/keepTheme";

const config = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   daisyui: {
      themes: ["light", "dark", "dim"],
   },
   plugins: [require("daisyui")],
};

export default keepTheme(config);