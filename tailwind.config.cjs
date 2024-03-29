/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    corePlugins: {
        preflight: false,
    },
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: '#343a40',
                lightGray: '#495057',
                darkGray: '#383d42',
                light: '#e9ecef',
                textDark: '#212529',
                textLight: '#f8f9fa',
                border: '#525866',
                editor: '#dee2e6',
                greenest: '#2d9d78'
            }
        },
    },
    plugins: [],
};
