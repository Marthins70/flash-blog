module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: 'Roboto, sans-serif'
        },
        bg: {
          heroGradient: 'linear-gradient(to right, rgba(255,0,0,0) 0%,rgba(255,0,0,0.65) 100%)'
        }
      },
    },
    plugins: [],
  }