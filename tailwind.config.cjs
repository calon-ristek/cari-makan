/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    'light': '#7485DE',
                    DEFAULT: '#684EDB',
                    'dark': '#5038BC'
                },
                'secondary': {
                    DEFAULT: '#54ABFC'
                }
            }
        },
    },
    plugins: [],
};