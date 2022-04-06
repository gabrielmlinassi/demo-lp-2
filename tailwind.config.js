const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1rem'] /* font-size: 12px; line-height: 16px */,
      sm: ['0.875rem', '1.25rem'] /* font-size: 14px; line-height: 20px */,
      base: ['1rem', '1.5rem'] /* font-size: 16px; line-height: 24px */,
      lg: ['1.125rem', '1.75rem'] /* font-size: 18px; line-height: 28px */,
      xl: ['1.25rem', '1.75rem'] /* font-size: 20px; line-height: 28px */,
      '2xl': ['1.5rem', '2rem'] /* font-size: 24px; line-height: 32px */,
      '3xl': ['2rem', '2.25rem'] /* font-size: 32px; line-height: 36px */,
      '4xl': ['2.5rem', '2.75rem'] /* font-size: 40px; line-height: 44px */,
      '5xl': ['3rem', '3.5rem'] /* font-size: 48px; line-height: 56px */,
      '6xl': ['3.5rem', '1'] /* font-size: 56px; line-height: 1 */,
      '7xl': ['4.5rem', '1'] /* font-size: 72px; line-height: 1 */,
    },
    extend: {
      fontFamily: {
        AvenirNext: ['AvenirNext', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
