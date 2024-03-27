import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
    darkmode: [
        'variant', [
            '@media (prefers-color-scheme: dark) { &:not(.light *) }',
            '&:is(.dark *)',
        ]],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        colors:{
            white: {
                DEFAULT: colors.white,
                1:'#f6faeb',
                2: colors.emerald[50],
                3: colors.neutral[50]
            },
            black: {
                DEFAULT: colors.black,
                1: '#1b260d',
                2: colors.emerald[950],
                3: colors.neutral[900],
            },
            primary: {
                light: '#a0c655',
                dark: '#729a2e',
            },
            secondary: {
                light: '#845b24',
                dark: '#82ab37',
            },
            contrast: colors.rose[500],
            emerald: colors.emerald,
            lime: colors.lime,
            green: colors.green,
            neutral: colors.neutral,
            rose: colors.rose,

            limeade: {
                50: '#f6faeb',
                100: '#eaf3d4',
                200: '#d6e8ae',
                300: '#bbd87e',
                400: '#a0c655',
                500: '#82ab37',
                600: '#729a2e',
                700: '#4d6823',
                800: '#3f5321',
                900: '#374720',
                950: '#1b260d',
            },
            'brown-derby': {
                50: '#faf9ec',
                100: '#f3efce',
                200: '#e9df9f',
                300: '#dbc769',
                400: '#d0b03f',
                500: '#c09b32',
                600: '#a57b29',
                700: '#845b24',
                800: '#6f4b24',
                900: '#5f3f24',
                950: '#4d2e18',
            }, 


        },
        
        fontFamily: {
            sans: ['Ubuntu', 'sans-serif'],
            serif: ['Glegoo', 'Times New Roman', 'serif'],
        },

        extend: {
            colors:{
                limeade: {
                    50: '#f6faeb',
                    100: '#eaf3d4',
                    200: '#d6e8ae',
                    300: '#bbd87e',
                    400: '#a0c655',
                    500: '#82ab37',
                    600: '#729a2e',
                    700: '#4d6823',
                    800: '#3f5321',
                    900: '#374720',
                    950: '#1b260d',
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
        require('postcss'),
    ],
};
export default config;
