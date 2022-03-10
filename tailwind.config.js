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
        formImage: '175px',
        homePageSearch: '500px',
        homePageContent: '1216px',
      },
      height: {
        listItem: '153px',
        listItemImage: '75px',
        formImage: '175px',
      },
      colors: {
        'typeqast-blue': '#48ACB5',
        'typeqast-blue-form': '#2DA1AD',
        'typeqast-gray': '#BEC7C6',
        'typeqast-gray-form': '#BBC4C3',
        'typeqast-listItem-image-gray': '#EAEDED',
        'typeqast-user-image-blue': '#ABD9DE',
        'typeqast-create-page-second-banner-blue': '#71BBC3',
      },
      flex: {
        'typeqast-flex': '1 1 25%',
      },
      margin: {
        'user-image': '75px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
