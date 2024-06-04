/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#fffefe",
          "200": "#fffdfd",
          "300": "#10100f",
          "400": "#0c0b0b",
          "500": "rgba(0, 0, 0, 0.6)",
          "600": "rgba(0, 0, 0, 0.5)",
          "700": "rgba(255, 255, 255, 0.5)",
          "800": "rgba(255, 255, 255, 0)",
        },
        mediumslateblue: {
          "100": "#3d69ff",
          "200": "#1642de",
        },
        snow: "#fffbfb",
        darkslategray: "#424242",
        orangered: "#cc0606",
        dimgray: "#545556",
        lightgray: {
          "100": "#cfcece",
          "200": "#cbcccf",
        },
        mediumblue: {
          "100": "#4a3dff",
          "200": "#1809d9",
        },
        darkorange: "#f78705",
        limegreen: "#0fcd0b",
        gold: {
          "100": "#f7e544",
          "200": "#debc0b",
        },
        red: "#ff0000",
        greenyellow: "#a5f02c",
        silver: {
          "100": "#c8c6c6",
          "200": "rgba(189, 192, 194, 0.8)",
        },
        darkslateblue: "#1f3b9f",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inherit: "inherit",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      xl: "1.25rem",
      base: "1rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "7xl": "1.625rem",
      "45xl": "4rem",
      "32xl": "3.188rem",
      "2xl": "1.313rem",
      "11xl": "1.875rem",
      lg: "1.125rem",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [require("@tailwindcss/typography") ,require("daisyui")],
  daisyui: {
    themes: ["light", "dark",
    {
      mytheme: {
      
"primary": "#db00ff",
      
"secondary": "#ff6900",
      
"accent": "#00fea8",
      
"neutral": "#fff",
      
"base-100": "#262626",
      
"info": "#38A1FF",
      
"success": "#00f56e",
      
"warning": "#ff8b00",
      
"error": "#ff3064",
      },
    },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  }
};
