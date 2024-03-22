// tailwind.config.js

export const purge = {
  enabled: true,
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'], // Files where Tailwind CSS classes are used
};
export const theme = {
  extend: {
    fontFamily: {
      custom: ['MyCustomFont', 'sans'], // Add a custom font family
    },
  },
};
export const variants = {
  extend: {
    backgroundColor: ['active'], // Enable 'active' variant for background color
  },
};
export const plugins = [
  // Add plugins here if needed
];
  