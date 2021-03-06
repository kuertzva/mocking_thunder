const {
  rem, remList, unitList, fractionList, pxList,
} = require('./extensions/functions.js')

const black = '#111111'
const white = '#ffffff'

const allColors = {
  black,
  white,
};

const sizing = {
  auto: 'auto',
  ...remList([16, 24, 32, 48, 64, 128, 256, 320, 480, 960]), // Added 960 to max out width
  ...unitList('%', [20, 25, 30, 40, 50, 60, 75, 80, 100]),
  ...unitList('vw', [50, 100]),
  ...unitList('vh', [50, 100]),
  ...fractionList(['1/3', '2/3']),
};

const spacing = {
  auto: 'auto',
  0: '0',
  ...remList([4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96]),
  // responsively sized padding/ect.
  ...unitList('em', [1, 2, 3, 4, 5, 6, 7]),

};

module.exports = {
  theme: {
    allColors,
    screens: {
      ...pxList([400, 480, 640, 800, 960, 1280, 1360]),
    },
    fontFamily: {
      'header-sans': [
        'header-sans',
        'sans-serif',
      ],
      'cap-header': [
        'cap-header',
        'sans-serif',
      ],
      'content-serif': [
        'content-serif',
        'serif',
      ],
      sans: [
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    fontSize: {
      ...remList([14, 16, 18, 20, 24, 30, 36, 42, 48, 60, 72, 84, 96, 108]),
      // responsively sized text
      ...unitList('em', [1, 2, 3, 4, 5, 6, 7]),
      // I'm using the font size to proportion the elements size and
      // spacing. This allows the REM to be 1 vw (the default)
      '1vw': '1vw',
      // font size cap at 960 width
      cap: '9.6px',
    },
    scaledFontSize: [
      '12-16',
      '16-20',
      '20-24',
      '24-36',
    ],
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
    },
    scaledSidesRange: '12-32',
    scaleRange: '400-800',
    fontWeight: {
      ...unitList('', [200, 300, 400, 500, 600, 700]),
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.5',
      loose: '2',
    },
    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em',
    },
    textColor: {
      black,
      white,
      LadyOrange: '#f16928',
      HeadsetBlue: '#00abc7',
      burstGray: '#3d4d5a',
    },
    backgroundColor: {
      black,
      white,
      BackdropGray: '#333d47',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderWidth: {
      default: '1px',
      ...unitList('px', [2, 4, 8]),
      0: '0',
    },
    borderColors: global.Object.assign(
      {
        default: black,
      },
      white,
    ),
    borderRadius: {
      default: '.25rem',
      none: '0',
      sm: '.125rem',
      lg: '.5rem',
      full: '9999px',
    },
    width: { ...sizing, 0: '0' },
    height: {
      ...sizing,
      0: '0',
      featureLine: '83vw',
      body: '132vw',
    },
    minWidth: { ...sizing, 0: '0' },
    minHeight: sizing,
    maxWidth: { ...sizing, none: 'none', 1920: '120rem' },
    maxHeight: sizing,
    padding: { ...spacing },
    margin: {
      ...spacing,
    },
    boxShadow: {
      default: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      none: 'none',
    },
    zIndex: {
      auto: 'auto',
      0: 0,
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
    },
    opacity: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      100: '1',
    },
    stroke: {
      current: 'currentColor',
    },
  },
  variants: {
    appearance: [],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['hover', 'focus', 'group-hover'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: [],
    borderColors: ['hover', 'focus'],
    borderRadius: [],
    borderStyle: [],
    borderWidth: [],
    cursor: [],
    display: ['responsive'],
    height: ['responsive'],
    lineHeight: [],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    fontFamily: [],
    fontWeight: [],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: [],
    objectPosition: [],
    opacity: ['focus', 'hover'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: [],
    position: ['responsive'],
    resize: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['hover', 'group-hover', 'focus'],
    textSizes: [],
    textStyle: ['hover', 'focus'],
    letterSpacing: [],
    userSelect: [],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-hover'],
    fill: [],
    stroke: [],
    fontSize: ['responsive'],
  },
  corePlugins: {
    container: false,
    float: false,
    listStyleType: false,
    listStylePosition: false,
  },
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
  plugins: [
    require('./extensions/plugin.scaled-text.js'),
    require('./extensions/plugin.sides.js'),
    require('tailwindcss-aspect-ratio')(),
  ],
};
