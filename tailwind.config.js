/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      /** ========== */
      /** Light Mode */
      /** ========== */

      /**----- TEXT -----*/
      primaryText_Light: '#0D121C',
      secondaryText_Light: '#4B5565',
      brandText_Light: '#2970FF',
      invertText_Light: '#F8FAFC',
      warningText_Light: '#EFCC44',
      errorText_Light: '#F04438',
      successText_Light: '#17B26A',
      primaryPlaceholderText_Light: '#697586',
      neutralText_Light: '#FCFCFD',
      darkText_Light: '#0D121C',

      /**----- SURFACE -----*/
      primarySurface_Light: '##FCFCFD',
      invertSurface_Light: '#252A33',
      brandSurface_Light: '#2970FF',
      warningSurface_Light: '#EFCC44',
      errorSurface_Light: '#F04438',
      successSurface_Light: '#17B26A',
      secondarySurface_Light: '#EEF2F6',
      primaryActiveSurface_Light: '#E3E8EF',
      brandHoverSurface_Light: '#155EEF',
      brandFocusedSurface_Light: '#0040C1',
      errorHoverSurface_Light: '#D92D20',
      errorFocusedSurface_Light: '#912018',
      successHoverSurface_Light: '#079455',
      successFocusedSurface_Light: '#085D3A',
      brandActiveSurface_Light: '#EFF4FF',
      errorActiveSurface_Light: '#FEE4E2',
      successActiveSurface_Light: '#DCFAE6',
      neutralSurface_Light: '#FCFCFD',
      warningLightSurface_Light: '#FEEFC6',

      /**----- BORDER -----*/
      primaryBorder_Light: '#CDD5DF',
      brandBorder_Light: '#2970FF',
      errorBorder_Light: '#F04438',
      primaryLightBorder_Light: '#E3E8EF',
      primaryLighterBorder_Light: '#EEF2F6',

      /**----- BACKGROUND -----*/
      primaryBackground_Light: '#EEF2F6',
      secondaryBackground_Light: '#FCFCFD',

      /** ========= */
      /** Dark Mode */
      /** ========= */

      /**----- TEXT -----*/
      primaryText_Dark: '#EEF2F6',
      secondaryText_Dark: '#CDD5DF',
      brandText_Dark: '#528BFF',
      invertText_Dark: '#121926',
      warningText_Dark: '#EFCC44',
      errorText_Dark: '#F04438',
      successText_Dark: '#17B26A',
      primaryPlaceholderText_Dark: '#9AA3B2',
      neutralText_Dark: '#17B26A',
      darkText_Dark: '#0D121C',

      /**----- SURFACE -----*/
      primarySurface_Dark: '#252A33',
      invertSurface_dark: '#FCFCFD',
      brandSurface_Dark: '#155EEF',
      errorSurface_Dark: '#F04438',
      warningSurface_Dark: '#EFCC44',
      successSurface_Dark: '#17B26A',
      secondarySurface_Dark: '#202939',
      primaryActiveSurface_dark: '#3D4149',
      brandHoverSurface_dark: '#155EEF',
      brandFocusedSurface_Dark: '#0040C1',
      errorHoverSurface_Dark: '#0040C1',
      errorFocusedSurface_Dark: '#912018',
      successHoverSurface_Dark: '#079455',
      successFocusedSurface_Dark: '#085D3A',
      brandActiveSurface_Dark: '#002266',
      errorActive_Dark: '#7A271A',
      successActiveSurface_Dark: '#074D31',
      neutralSurface_Dark: '#FCFCFD',
      warningLightSurface_Dark: '#FEEFC6',

      /**----- BORDER -----*/
      primaryBorder_Dark: '#4A4D55',
      brandBorder_Dark: '#2970FF',
      errorBorder_Dark: '#F04438',
      primaryLightBorder_Dark: '#4B5565',
      primaryLighterBorder_Dark: '#364152',

      /**----- BACKGROUND -----*/
      primaryBackground_Dark: '#0D121C',
      secondaryBackground_Dark: '#252A33',

      /**----- SPECIAL -----*/
      transparent: 'transparent',
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    fontSize: {
      /**----- TEXT -----*/
      'xlText': '20px',
      'lText': '18px',
      'lgText': '16px',
      'mdText': '14px',
      'smText': '12px',
      'xsText': '10px',

      /**----- DISPLAY -----*/
      'xl2Display': '72px',
      'xlDisplay': '60px',
      'lgDisplay': '48px',
      'mdDisplay': '36px',
      'smDisplay': '30px',
      'xsDisplay': '24px',
    },
    lineHeight: {
      'xl': '32px',
      'l': '28px',
      'lg': '24px',
      'md': '20px',
      'sm': '16px',
      'xs': '12px',
    },
    extend: {},
  },
  plugins: [],
}