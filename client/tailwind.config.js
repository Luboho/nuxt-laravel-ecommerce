module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
      screens: {
        'xs': '420px',
        // => @media (min-width: 420px) { ... }
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        xs: ['10px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      borderWidth: {
        '0.5': '0.5px',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '12': '12px'
      },
      minWidth: {
        'xxs': '330px'
      },
      maxWidth: {
        '1024': '1024px',
        '7xl': '1800px'
      },
      maxHeight: {
        '250px': '250px',
        '400px': '400px'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      extend: {
        backgroundColor: ['label-checked'], // you need add new variant to a property you want to extend
        animation: {
          'spin-slow': 'spin 3s linear infinite'
         },
        spacing: {
          '0.5': '0.125rem',
          '1': '0.25rem',
          '1.5': '0.375rem',
          '2': '0.5rem',
          '2.5': '0.675rem',
          '3': '0.75rem',
          '3.5': '0.875rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '7': '1.75rem',
          '8': '2rem',
          '9': '2.25rem',
          '9.5': '2.375rem',
          '10': '2.5rem',
          '10.5': '2.625rem',
          '11': '2.75rem',
          '12': '3rem',
          '14': '3.5rem',
          '16': '4rem',
          '17': '4.5rem', // approx.
          '20': '5rem',
          '24': '6rem',
          '26': '6.5rem',
          '28': '7rem',
          '32': '8rem',
          '36': '9rem',
          '40': '10rem',
          '44': '11rem',
          '48': '12rem',
          '52': '13rem',
          '56': '14rem',
          '60': '15rem',
          '64': '16rem',
          '68': '17rem',
          '72': '18rem',
          '80': '20rem',
          '96': '24rem',
          '100': '25rem',
          '101': '25.25rem',
          '101.5': '25.35rem',
          '102': '25.50rem',
          '102.5': '25.65rem',
          '140': '35rem', // approx.
          '150': '38rem', // aprox.
          '205': '51.3rem'
        },
        colors: {
          lime: {
            '50': '#f7fee7',
            '100': '#ecfccb',
            '200': '#d9f99d',
            '300': '#bef264',
            '400': '#a3e635',
            '500': '#84cc16',
            '600': '#65a30d',
            '700': '#4d7c0f',
            '800': '#3f6212',
            '900': '#365314'
          },
          slate: {
            '50': '#FCFCFC',
          }
        },
      },

    },
    variants: {
      backgroundColor: ['even', 'odd', 'active', 'hover', 'focus', 'responsive'],
      textColor: ['responsive', 'focus', 'active','hover'],
      scale: ['responsive', 'focus', 'active', 'hover'],
      translate: ['responsive', 'focus', 'active', 'hover'],
      transform: ['responsive', 'focus', 'active', 'hover'],
      ringWidth: ['responsive', 'focus', 'active','hover'],
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
