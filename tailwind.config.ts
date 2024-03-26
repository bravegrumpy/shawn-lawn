import type { Config } from "tailwindcss";

const config: Config = {
    darkmode: 'selector',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors:{
                'limeade': {
                    '50': '#f6faeb',
                    '100': '#eaf3d4',
                    '200': '#d6e8ae',
                    '300': '#bbd87e',
                    '400': '#a0c655',
                    '500': '#82ab37',
                    '600': '#729a2e',
                    '700': '#4d6823',
                    '800': '#3f5321',
                    '900': '#374720',
                    '950': '#1b260d',
                },
                'brown-derby': {
                    '50': '#faf9ec',
                    '100': '#f3efce',
                    '200': '#e9df9f',
                    '300': '#dbc769',
                    '400': '#d0b03f',
                    '500': '#c09b32',
                    '600': '#a57b29',
                    '700': '#845b24',
                    '800': '#6f4b24',
                    '900': '#5f3f24',
                    '950': '#4d2e18',
                },                
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
export default config;
