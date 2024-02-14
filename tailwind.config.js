import animationDelay from 'tailwindcss-animation-delay'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-mid': 'spin 3s linear infinite',
        "flick": "blink 0.2s infinite", 
        "must": "blink 0.2s 3 ", 
        "top": "blink 0.2s 3 ",
        "letters": "blink 0.2s 3 ",
        "switch": "off 4s 1 " 
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
        3000: "3000ms",
      },
    },
    variants: {
      animationDelay: ["responsive", "hover"],
    },
      keyframes:{
        blink:{
          "0%" :{ 
            opacity: 1
          },
          "50%" :{ 
            opacity: 0
          },
          "100%" :{ 
            opacity: 1
          } 
        },
        off:{
          "0%":{
            opacity: 0
          },
          "100%" :{ 
            opacity: 1
          } 
        }
    },
  },
  plugins: [
    animationDelay,
  ],
}