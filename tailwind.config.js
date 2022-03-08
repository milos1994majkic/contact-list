module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        listItem: '271px',
        itemCol15: '20%',
        itemCol60: '60%',
        itemCol25: '20%',
        listItemImage: '75px',
      },
      height: {
        listItem: '153px',
        listItemImage: '75px',
      },
      colors: {
        'typeqast-blue': '#48ACB5',
        'typeqast-gray': '#BEC7C6',
        'typeqast-listItem-image-gray': '#EAEDED',
      },
      flex: {
        'typeqast-flex': '1 1 25%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
