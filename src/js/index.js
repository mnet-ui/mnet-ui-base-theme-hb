import { rgba } from 'polished';
import { css } from 'styled-components';
import { HbAdminComponents, NeoComponents } from 'mnet-icons';

import { deepFreeze } from 'mnet-ui-base/utils/object';
import { normalizeColor } from 'mnet-ui-base/utils/colors';
import { parseMetricToNum } from 'mnet-ui-base/utils/mixins';

const {
  UpArrow, DownArrow, Tick, Info, Success, Block, Close,
} = HbAdminComponents;
const {
  TickCircle, Error, AlertTriangle,
} = NeoComponents;

Tick.notSvg = true;

const brandColor = '#3367D6';
const accentColors = ['#38C18B', '#8F94A6', '#739FFC', '#439ADC'];
const neutralColors = ['#519bff', '#99742E', '#00739D', '#A2423D'];
const statusColors = {
  critical: '#DB4545',
  error: '#DB4545',
  warning: '#E3A21D',
  ok: '#16B037',
  info: '#3367D6',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
  'warning-background': '#FFFCF4',
  'info-background': '#F5F9FF',
  'ok-background': '#E8FFED',
  'error-background': '#FFF6F6',
  'warning-border': '#FDEDC5',
  'info-border': '#E0EDFF',
  'ok-border': '#BEF5CA',
  'error-border': '#FFE9E9',
};

const darkColors = [
  '#333333',
  '#9DA2AD',
  '#8A90A6',
  '#9DA2AD',
  '#9DA2AD',
  '#9DA2AD',
];
const lightColors = [
  '#F2F5FC',
  '#F1F3F5',
  '#E0E0E0',
  '#E0E0E0',
  '#E0E0E0',
  '#E0E0E0',
];
const focusColor = '#B1C2FE';

const colors = {
  active: rgba(221, 221, 221, 0.5),
  'background-back': {
    dark: '#33333308',
    light: '#EDEDED',
  },
  'background-front': {
    dark: '#444444',
    light: '#FFFFFF',
  },
  'background-contrast': {
    dark: '#33333308',
    light: '#FFFFFF08',
  },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: 'light-3',
  },
  brand: brandColor,
  control: {
    dark: 'brand',
    light: 'brand',
  },
  focus: focusColor,
  'graph-0': 'accent-1',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'neutral-4',
  placeholder: '#9DA2AD',
  selected: '#F2F5FC',
  text: {
    dark: '#f8f8f8',
    light: 'dark-1',
  },
  'text-strong': {
    dark: '#FFFFFF',
    light: '#000000',
  },
  'text-weak': {
    dark: '#CCCCCC',
    light: '#555555',
  },
  'text-xweak': {
    dark: '#BBBBBB',
    light: '#666666',
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  'selected-background': 'brand',
  'selected-text': 'text-strong',
  white: '#FFFFFF',
};

const colorArray = (array, prefix) => array.forEach((color, index) => {
  colors[`${prefix}-${index + 1}`] = color;
});

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(color => {
  colors[`status-${color}`] = statusColors[color];
});

export const generate = (baseSpacing = 16, scale = 6) => {
  // 24
  const baseFontSize = baseSpacing * 0.75; // 12
  const fontScale = baseSpacing / scale; // 16

  const fontSizing = factor => ({
    size: `${baseFontSize + factor * fontScale}px`,
    height: `${baseSpacing + factor * fontScale}px`,
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    maxWidth: `${baseSpacing * (baseFontSize + factor * fontScale)}px`,
  });

  const borderWidth = 2;
  const controlBorderWidth = 1;

  const result = {
    global: {
      active: {
        background: {
          color: 'active',
          opacity: 'medium',
        },
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s',
        },
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: `${baseSpacing / 6}px`, // 4
        large: `${baseSpacing / 2}px`, // 12
        xlarge: `${baseSpacing}px`, // 24
      },
      breakpoints: {
        small: {
          value: baseSpacing * 32, // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: `${baseSpacing / 6}px`, // 4
            large: `${baseSpacing / 4}px`, // 6
            xlarge: `${baseSpacing / 2}px`, // 12
          },
          edgeSize: {
            none: '0px',
            hair: '1px', // for Chart
            xxsmall: '2px',
            xsmall: `${baseSpacing / 8}px`, // 3
            small: `${baseSpacing / 4}px`, // 6
            medium: `${baseSpacing / 2}px`, // 12
            large: `${baseSpacing}px`, // 24
            xlarge: `${baseSpacing * 2}px`, // 48
          },
          size: {
            xxsmall: `${baseSpacing}px`, // 24
            xsmall: `${baseSpacing * 2}px`, // 48
            small: `${baseSpacing * 4}px`, // 96
            medium: `${baseSpacing * 8}px`, // 192
            large: `${baseSpacing * 16}px`, // 384
            xlarge: `${baseSpacing * 32}px`, // 768
            full: '100%',
          },
        },
        medium: {
          value: baseSpacing * 64, // 1536
        },
        large: {}, // anything above 'medium'
      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large',
      },
      colors,
      control: {
        border: {
          width: `${controlBorderWidth}px`,
          radius: '4px',
          color: 'border',
        },
        disabled: {
          opacity: 0.3,
        },
      },
      // The time to wait after the user stopped typing, measured in ms.
      debounceDelay: 300,
      drop: {
        background: '#ffffff',
        border: {
          radius: '0px',
        },
        shadowSize: 'small',
        zIndex: '20',
        marginTop: '4px',
      },
      edgeSize: {
        none: '0px',
        hair: '1px', // for Chart
        xxsmall: `${baseSpacing / 16}px`, // 3
        xsmall: `${baseSpacing / 8}px`, // 6
        small: `${baseSpacing / 4}px`, // 12
        medium: `${baseSpacing / 2}px`, // 24
        large: `${baseSpacing}px`, // 48
        xlarge: `${baseSpacing * 2}px`, // 96
        responsiveBreakpoint: 'small',
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
          small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
        },
      },
      focus: {
        // shadow or outline are required for accessibility
        border: {
          // remove to only have shadow
          color: 'focus',
        },
        // outline: { color: undefined, size: undefined },
        shadow: {
          color: 'focus',
          size: '2px',
        },
      },
      font: {
        family: "'Inter', sans-serif",
      },
      hover: {
        background: {
          color: 'active',
          opacity: 'medium',
        },
        color: {
          dark: 'light-2',
          light: 'light-2',
        },
      },
      input: {
        padding: {
          horizontal: `${
            parseMetricToNum(`${baseSpacing}px`)
            - parseMetricToNum(`${controlBorderWidth}px`)
          }px`,
          vertical: `${
            parseMetricToNum(`${baseSpacing / 2}px`)
            - parseMetricToNum(`${controlBorderWidth}px`)
          }px`,
        },
        font: {
          // size: undefined,
          // height: undefined,
          weight: 400,
        },
        // deprecate in v3
        // weight: undefined,
      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1,
      },
      selected: {
        background: 'selected',
        color: 'brand',
      },
      spacing: `${baseSpacing}px`,
      size: {
        xxsmall: `${baseSpacing * 2}px`, // 48
        xsmall: `${baseSpacing * 4}px`, // 96
        small: `${baseSpacing * 8}px`, // 192
        medium: `${baseSpacing * 16}px`, // 384
        large: `${baseSpacing * 32}px`, // 768
        xlarge: `${baseSpacing * 48}px`, // 1152
        xxlarge: `${baseSpacing * 64}px`, // 1536
        full: '100%',
      },
    },
    accordion: {
      panel: {
        // border: {
        //   side: 'bottom',
        //   color: 'border',
        // },
      },
      border: {
        side: 'bottom',
        color: 'border',
      },
      heading: {
        level: '4', // level ranges from 1-6
        // margin: undefined
      },
      hover: {
        color: { dark: 'light-4', light: 'dark-3' }, // deprecated
        heading: {
          color: { dark: 'light-4', light: 'dark-3' },
        },
      },
      icons: {
        // color: { dark: undefined, light: undefined },
      },
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'brand',
        light: 'brand',
      },
      hover: {
        textDecoration: 'underline',
        // fontWeight: undefined,
        // extend: undefined,
      },
      // extend: undefined,
    },
    avatar: {
      // extend: undefined,
      size: {
        xsmall: `${baseSpacing * 0.75}px`,
        small: `${baseSpacing}px`,
        medium: `${baseSpacing * 2}px`, // default 48
        large: `${baseSpacing * 3}px`,
        xlarge: `${baseSpacing * 4}px`,
      },
      text: {
        // fontWeight: undefined,
        // extend: undefined
      },
    },
    box: {
      responsiveBreakpoint: 'small', // when we switch rows to columns
      // extend: undefined,
    },
    button: {
      size: {
        small: {
          border: {
            radius: `${baseSpacing * 0.12}px`, // 3px
          },
          pad: {
            vertical: `${baseSpacing / (1.78 * 2) - borderWidth}px`, // 4px
            horizontal: `${baseSpacing - borderWidth * 2}px`, // 20px,
          },
        },
        medium: {
          border: {
            radius: `${baseSpacing * 0.12}px`, // 3px
          },
          pad: {
            vertical: `${baseSpacing / 1.78 - borderWidth}px`,
            horizontal: `${baseSpacing - borderWidth * 1.4}px`,
          },
        },
        large: {
          border: {
            radius: `${baseSpacing * 0.12}px`, // 3px
          },
          pad: {
            vertical: `${baseSpacing / (1.618 / 2) + borderWidth}px`, // 8px
            horizontal: `${baseSpacing * 2.8 - borderWidth}px`, // 32px,
          },
        },
      },
      hover: {
        extend: {
          // 'box-shadow': '0 4px 9px 0 rgba(247, 186, 186, 0.4)',
          // bottom: `${1.5 * baseSpacing}px`,
        },
      },
      border: {
        // color: { dark: undefined, light: undefined }
        width: `${borderWidth}px`,
        radius: `${baseSpacing * 0.12}px`,
      },
      color: { dark: undefined, light: undefined },
      default: {},
      primary: {
        background: 'brand',
        border: {
          color: { dark: 'brand', light: 'brand' },
        },
        color: 'white',
        padding: {
          vertical: undefined,
          horizontal: undefined,
        },
        // extend: undefined,
      },
      secondary: {
        background: 'light-1',
        border: {
          color: { dark: 'light-1', light: 'light-1' },
        },
        color: 'dark-1',
        // padding: {
        //   vertical: undefined,
        //   horizontal: undefined,
        // },
        // extend: undefined,
      },
      tertiary: {
        background: 'transparent',
        border: {
          color: { dark: 'brand', light: 'brand' },
        },
        color: 'brand',
        // padding: {
        //   vertical: undefined,
        //   horizontal: undefined,
        // },
        extend: {
          border: '1px solid',
        },
      },
      active: {
        background: undefined,
        border: {
          color: { dark: 'brand', light: 'brand' },
          width: `${borderWidth}px`,
          radius: `${baseSpacing * 0.12}px`,
        },
        color: undefined,
        //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},
      },
      disabled: {
        background: 'brand',
        border: {
          color: { dark: 'accent-1', light: 'accent-1' },
        },
        color: 'dark-2',
        opacity: 0.8,
        //   default: {},
        //   primary: {},
        //   secondary: {},
      },
      // hover: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined},
      //   extend: undefined,
      //   default: {},
      //   primary: {},
      //   secondary: {},
      // },
      padding: {
        // vertical: `${baseSpacing / 1.618 - borderWidth}px`,
        // horizontal: `${baseSpacing - borderWidth * 1.4}px`,
      },
      transition: {
        timing: 'ease-in-out',
        duration: 0.1,
        properties: ['color', 'background-color', 'border-color', 'box-shadow'],
      },
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: `${baseFontSize - fontScale}px`,
        lineHeight: 1.375,
        daySize: `${(baseSpacing * 8) / 7}px`,
        slideDuration: '0.2s',
      },
      medium: {
        fontSize: `${baseFontSize}px`,
        lineHeight: 1.45,
        daySize: `${(baseSpacing * 16) / 7}px`,
        slideDuration: '0.5s',
      },
      large: {
        fontSize: `${baseFontSize + 3 * fontScale}px`,
        lineHeight: 1.11,
        daySize: `${(baseSpacing * 32) / 7}px`,
        slideDuration: '0.8s',
      },
      icons: {},
      heading: { level: '4' }, // level ranges from 1-6
    },
    carousel: {
      icons: {
        // color: { dark: undefined, light: undefined },
      },
      animation: {
        duration: 1000,
      },
      disabled: {
        icons: {
          // color: { dark: undefined, light: undefined },
        },
      },
    },
    chart: {
      color: 'graph-0',
      // extend: undefined,
    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(224, 224, 224, 1)',
        },
        width: '2px',
        radius: '3px',
      },
      check: {
        // extend: undefined,
        extend: ({ checked }) => ` 
          ${checked && `background-color: ${colors.brand};`}
          border: unset;
          box-shadow: unset;
          border-radius: 3px;
          color: white;
        `,
        radius: '4px',
        thickness: '4px',
      },
      // color: { dark: undefined, light: undefined },
      color: {
        light: 'neutral-3',
        dark: 'neutral-3',
      },
      // extend: undefined,
      extend: `color: ${darkColors[0]};
        font-weight: 400;`,
      // gap: undefined
      gap: 'medium',
      hover: {
        border: {
          color: undefined,
        },
      },
      icon: {
        size: '18px',
        extend: 'stroke: white;',
      },
      icons: {
        checked: Tick,
        // indeterminate: undefined,
      },
      size: `${baseSpacing}px`,
      toggle: {
        // background: undefined
        color: {
          dark: '#d9d9d9',
          light: '#d9d9d9',
        },
        knob: {
          // extend: undefined,
        },
        radius: `${baseSpacing}px`,
        size: `${baseSpacing * 2}px`,
        // extend: undefined,
      },
      label: {
        color: 'dark-1',
        size: 'medium',
        weight: 400,
      },
    },
    CheckBoxGroup: {
      label: {
        color: 'dark-1',
        size: 'medium',
        weight: 400,
      },
    },
    clock: {
      analog: {
        // extend: undefined,
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3',
          },
          width: `${baseSpacing / 3}px`,
          size: `${baseSpacing}px`,
          shape: 'round',
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3',
          },
          width: `${baseSpacing / 6}px`,
          size: `${Math.round(baseSpacing / 2)}px`,
          shape: 'round',
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1',
          },
          width: `${baseSpacing / 8}px`,
          size: `${Math.round(baseSpacing / 2.666)}px`,
          shape: 'round',
        },
        size: {
          small: `${baseSpacing * 3}px`,
          medium: `${baseSpacing * 4}px`,
          large: `${baseSpacing * 6}px`,
          xlarge: `${baseSpacing * 9}px`,
          huge: `${baseSpacing * 12}px`,
        },
      },
      digital: {
        text: {
          xsmall: { size: `${baseFontSize - 2 * fontScale}px`, height: 1.5 },
          small: { size: `${baseFontSize - fontScale}px`, height: 1.43 },
          medium: { size: `${baseFontSize}px`, height: 1.375 },
          large: { size: `${baseFontSize + fontScale}px`, height: 1.167 },
          xlarge: { size: `${baseFontSize + 2 * fontScale}px`, height: 1.1875 },
          xxlarge: { size: `${baseFontSize + 4 * fontScale}px`, height: 1.125 },
        },
      },
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500,
    },
    dataTable: {
      groupHeader: {
        background: {
          dark: 'dark-2',
          light: 'light-2',
        },
        border: { side: 'bottom', size: 'xsmall' },
        pad: { horizontal: 'small', vertical: 'xsmall' },
      },
      groupEnd: {
        border: { side: 'bottom', size: 'xsmall' },
      },
      header: {},
      icons: {},
      primary: {
        weight: 'bold',
      },
      resize: {
        border: {
          color: 'border',
          side: 'end',
        },
      },
    },
    diagram: {
      // extend: undefined,
      line: {
        color: 'graph-0',
      },
    },
    // drop: {
    //   extend: undefined,
    //   maxHeight: undefined,
    // },
    formField: {
      border: {
        color: 'border',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical',
          },
        },
        position: 'inner',
        side: 'all',
        size: 'xsmall',
      },
      content: {
        pad: 'small',
      },
      field: {
        default: {
          border: 'none',
        },
        // focus: 'border-color: white;',
      },
      disabled: {
        background: {
          color: 'status-disabled',
          opacity: 'medium',
        },
        // border: {
        //   color: undefined,
        // },
        // label: {
        //   color: undefined,
        // },
      },
      // focus: {
      //   background: {
      //     color: undefined,
      //   },
      //   border: {
      //     color: undefined,
      //   },
      // },
      error: {
        color: 'status-critical',
        margin: { vertical: 'medium', horizontal: 'none' },
        // background: undefined,
      },
      // extend: undefined,
      help: {
        color: 'dark-3',
        margin: {
          start: 'small',
        },
      },
      info: {
        color: 'text-xweak',
        margin: { vertical: 'xsmall', left: 'medium' },
      },
      labelWrap: {
        width: 'xxsmall',
        direction: 'row',
      },
      label: {
        weight: 400,
        margin: 'none',
      },
      margin: { bottom: 'small' },
      postfix: {
        color: 'white',
        background: 'dark-3',
        justify: 'center',
        pad: { horizontal: 'medium', vertical: 'medium' },
      },
      prefix: {
        color: 'white',
        background: 'dark-3',
        justify: 'center',
        pad: { horizontal: 'medium', vertical: 'medium' },
      },
      extend: {
        button: {
          flex: 1,
        },
      },
      tooltip: {
        extend: {
          position: 'right-end',
          background: '#FFFFFF',
        },
        icon: Info,
        iconProps: {
          margin: { horizontal: 'small' },
          size: 'large',
        },
      },
      round: 'small',
    },
    mnet: {
      // extend: undefined
      global: css`
        :focus {
          outline: none;
        }
      `,
    },
    heading: {
      font: {
        family: 'Inter',
      },
      level: {
        1: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(4) },
          medium: { ...fontSizing(8) },
          large: { ...fontSizing(16) },
          xlarge: { ...fontSizing(24) },
        },
        2: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(2) },
          medium: { ...fontSizing(4) },
          large: { ...fontSizing(8) },
          xlarge: { ...fontSizing(12) },
        },
        3: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(1) },
          medium: { ...fontSizing(2) },
          large: { ...fontSizing(4) },
          xlarge: { ...fontSizing(6) },
        },
        4: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(0) },
          medium: { ...fontSizing(0) },
          large: { ...fontSizing(0) },
          xlarge: { ...fontSizing(0) },
        },
        5: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(-0.5) },
          medium: { ...fontSizing(-0.5) },
          large: { ...fontSizing(-0.5) },
          xlarge: { ...fontSizing(-0.5) },
        },
        6: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(-1) },
          medium: { ...fontSizing(-1) },
          large: { ...fontSizing(-1) },
          xlarge: { ...fontSizing(-1) },
        },
      },
      responsiveBreakpoint: 'small', // when we scale the font size down
      weight: 600,
    },
    layer: {
      background: 'white',
      border: {
        radius: '4px',
      },
      container: {
        zIndex: '15',
      },
      // extend: undefined,
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)',
      },
      responsiveBreakpoint: 'small', // when Layer takes over the full screen
      zIndex: '10',
    },
    list: {
      item: {
        // background: undefined,
        border: 'horizontal',
        pad: { horizontal: 'medium', vertical: 'small' },
        // extend: undefined,
      },
      // extend: undefined,
    },
    maskedInput: {
      // extend: undefined,
      // disabled: { opacity: undefined },
    },
    menu: {
      // background: undefined,
      extend: undefined,
      icons: {
        // color: { dark: undefined, light: undefined },
      },
    },
    meter: {
      color: 'graph-0',
      // colors: [] || colors: ['graph-0', 'graph-1', 'graph-2', 'graph-3'],
      // extend: undefined,
    },
    modalpopup: {
      container: {
        width: 'large',
      },
      title: {
        wrapper: {
          pad: {
            horizontal: 'large',
            vertical: 'medium',
          },
          direction: 'row',
          justify: 'between',
          align: 'center',
          border: {
            side: 'bottom',
            color: 'light-2',
          },
        },
        text: {
          margin: 'none',
          level: 3,
          size: 'small',
          color: 'dark-1',
        },
        close: {
          icon: Close,
          size: 'xxlarge',
          color: 'dark-2',
        },
      },
      message: {
        wrapper: {
          pad: 'large',
        },
        text: {
          size: 'large',
          color: 'dark-1',
        },
      },
      buttons: {
        wrapper: {
          pad: {
            horizontal: 'large',
            bottom: 'large',
          },
          direction: 'row',
        },
        button: {
          size: 'medium',
          margin: {
            right: 'medium',
          },
        },
      },
    },
    multiselect: {
      container: {
        border: {
          color: 'light-3',
        },
        round: 'small',
      },
      includeBtn: {
        color: 'status-ok',
      },
      excludeBtn: {
        color: 'status-error',
      },
      option: {
        width: 'full',
        direction: 'row',
        justify: 'between',
        align: 'center',
        pad: { horizontal: 'medium' },
      },
      checkbox: {
        box: {
          margin: {
            right: 'medium',
            // extend: undefined,
          },
        },
        checkmark: {
          size: `${baseSpacing * 1.2}px`,
          color: 'white',
        },
        check: {
          height: `${baseSpacing * 1.2}px`,
          width: `${baseSpacing * 1.2}px`,
          margin: 'auto',
          round: 'small',
          align: 'center',
          justify: 'center',
          background: 'white',
          border: { color: 'light-6' },
        },
      },
      chips: {
        wrapper: {
          pad: { vertical: 'medium', left: 'medium', right: 'small' },
          direction: 'row',
          extend: props => ({
            'border-bottom': props.twoColumnLayout
              ? 'none'
              : '1px solid #D9DBE5',
          }),
        },
        option: {
          background: 'light-3',
          round: 'small',
          pad: {
            vertical: 'medium',
            horizontal: 'medium',
          },
          margin: 'small',
          direction: 'row',
          align: 'center',
          extend: props => ({
            width: props.twoColumnLayout ? '100%' : 'auto',
            margin: props.twoColumnLayout
              ? 0
              : `${baseSpacing / (1.618 * 2)}px`,
            background: props.twoColumnLayout ? 'white' : lightColors[2],
            'justify-content': props.twoColumnLayout
              ? 'space-between'
              : 'flex-start',
          }),
        },
        label: {
          color: 'dark-1',
          size: 'medium',
          weight: 400,
          margin: {
            right: 'small',
          },
        },
        icon: {
          size: 'small',
          color: 'dark-3',
        },
        clear: {
          margin: 'medium',
          border: {
            side: 'top',
            color: 'light-3',
          },
          color: 'dark-1',
          size: 'medium',
          alignSelf: 'end',
          weight: '600',
          height: '30px',
        },
      },
      controls: {
        wrapper: {
          pad: 'medium',
          direction: 'row',
          height: {
            min: 'auto',
          },
          // extend: undefined,
        },
        button: {
          margin: 'small',
        },
      },
      searchbox: {
        textWrapper: {
          flex: 'grow',
        },
        iconWrapper: {
          gap: 'medium',
          width: 'xxsmall',
          direction: 'row',
          justify: 'center',
        },
        container: {
          height: '40px',
          direction: 'row',
          align: 'center',
          background: 'transparent',
          // pad: { horizontal: 'medium', vertical: 'medium' },
          pad: 'none',
          border: {
            side: 'bottom',
            color: 'light-3',
          },
          style: {
            minHeight: '40px',
            position: 'relative',
          },
        },
        placeholder: {
          color: 'dark-4',
          size: 'medium',
        },
        icon: {
          size: 'small',
          color: 'dark-3',
        },
      },
      rightPanel: {
        border: 'light-3',
        incExcHeader: {
          box: {
            direction: 'row',
            justify: 'between',
            align: 'center',
            pad: 'large',
            background: 'white',
            border: {
              side: 'bottom',
              color: 'light-3',
            },
          },
          text: {
            color: 'dark-1',
            size: 'medium',
            weight: '400',
          },
          count: {
            margin: { left: 'small' },
            background: statusColors.info,
            round: 'medium',
            pad: { horizontal: 'medium' },
            justify: 'center',
          },
        },
      },
      custom: {
        wrapper: {
          direction: 'row',
          border: {
            color: 'light-3',
          },
          round: 'small',
        },
        textAreaWrap: {
          border: {
            side: 'right',
            color: 'transparent',
          },
          pad: 'medium',
          height: '100%',
          extend: {
            '*': {
              border: 'none',
              height: '100%',
            },
          },
        },
        actions: {
          wrapper: {
            direction: 'row',
            gap: '0',
            margin: '0',
            justify: 'evenly',
            align: 'center',
            border: {
              side: 'top',
              color: 'light-3',
            },
            height: {
              min: '30px',
            },
          },
        },
      },
      icons: {
        include: {
          icon: Success,
          extend: {
            color: 'status-ok',
            size: 'large',
          },
        },
        exclude: {
          icon: Block,
          extend: {
            color: 'status-error',
            size: 'large',
          },
        },
      },
    },
    paragraph: {
      small: { ...fontSizing(-1) },
      medium: { ...fontSizing(0) },
      large: { ...fontSizing(1) },
      xlarge: { ...fontSizing(2) },
      xxlarge: { ...fontSizing(4) },
    },
    radioButton: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)',
        },
        width: '1px',
      },
      check: {
        radius: '100%',
        color: { dark: 'brand', light: 'brand' },
        // extend: undefined,
      },
      checked: {
        extend: {
          check: {
            radius: '20%',
          },
        },
      },
      hover: {
        border: {
          color: {
            dark: 'brand',
            light: 'brand',
          },
        },
      },
      icon: {
        // size: undefined,
        // extend: undefined,
      },
      icons: {
        // circle: undefined,
      },
      gap: 'medium',
      size: `${baseSpacing + 1}px`,
    },
    rangeInput: {
      track: {
        height: '4px',
        color: css`
          ${props => rgba(normalizeColor('border', props.theme), 0.2)};
        `,
      },
      thumb: {
        // color: { dark: undefined, light: undefined },
      },
    },
    rangeSelector: {
      background: {
        invert: {
          color: 'light-4',
        },
      },
      // edge: {
      //   type: undefined,
      // },
    },
    select: {
      background: colors.white,
      activeColor: 'light-1',
      container: {
        extend: null,
      },
      control: {
        open: undefined,
        extend: {
          'border-bottom': `2px solid ${lightColors[2]};`,
          'text-align': 'left',
          padding: '4px 10px 4px 0px',
        },
      },
      options: {
        container: {
          align: 'start',
          pad: 'small',
          round: 'true',
        },
        text: {
          size: 'medium',
          margin: 'small',
        },
      },
      icons: {
        color: 'dark-2',
        margin: 'none',
        pad: {
          top: 'xsmall',
          bottom: 'xsmall',
          horizontal: 'small',
        },
        background: 'background-contrast',
        size: 'xlarge',
        up: UpArrow,
        down: DownArrow,
        // extend: {},
      },
      // searchInput: undefined,
      step: 20,
    },
    tab: {
      active: {
        color: 'text',
        // background: undefined,
      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'brand',
          light: 'brand',
        },
        active: {
          color: {
            dark: 'white',
            light: 'black',
          },
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black',
          },
          // extend: undefined,
        },
      },
      color: 'control',
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small',
      },
      pad: {
        bottom: 'xsmall',
      },
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      // gap: undefined,
      header: {
        // background: undefined,
        // extend: undefined,
      },
      panel: {
        // extend: undefined,
      },
    },
    table: {
      header: {
        align: 'start',
        border: 'light-2',
        fill: 'horizontal',
        pad: { horizontal: 'large', vertical: 'medium' },
        verticalAlign: 'bottom',
        background: {
          color: '#F5F6F8',
        },
        // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,
      },
      body: {
        align: 'start',
        pad: { horizontal: 'large', vertical: 'medium' },
        border: 'light-1',
        // background: undefined,
        // border: undefined,
        // extend: undefined,
      },
      row: {
        hover: {
          background: undefined,
          color: undefined,
        },
      },
      footer: {
        align: 'start',
        pad: { horizontal: 'small', vertical: 'xsmall' },
        border: 'top',
        // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,
      },
    },
    text: {
      xsmall: { ...fontSizing(-1.5) },
      small: { ...fontSizing(-1) },
      medium: { ...fontSizing(0) }, // 18px
      large: { ...fontSizing(1) }, // 22px
      xlarge: { ...fontSizing(2) },
      xxlarge: { ...fontSizing(4) },
    },
    textArea: {
      extend: undefined,
      // disabled: { opacity: undefined },
    },
    textInput: {
      container: {
        extend: () => `
          height: 100%;
        `,
      },
      extend: ({
        plain, focus, reverse, icon,
      }) => `
        padding-top: 9px;
        padding-bottom: 9px;
        box-shadow: none;
        height: 100%;
        ${(!reverse && icon) && 'padding-left: 32px;'}
        ${!plain && `border: 1px solid ${lightColors[2]};`}
        border-bottom-width: 2px;
        ${focus && `border-color: transparent;
        border-bottom: 2px solid ${statusColors.info};
        background: ${lightColors[0]};
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;`}`,
      error: {
        icon: Info,
        text: {
          color: 'brand',
          margin: { vertical: 'small' },
        },
        extend: `
        border-bottom: 2px solid red;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;`,
      },
      focus: `
        border-color: transparent;
        border-bottom: 2px solid ${statusColors.info};
        background: ${lightColors[0]};
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
      `,
      border: `1px solid ${lightColors[2]};`,
      // disabled: { opacity: undefined },
      // placeholder: {},
    },
    tooptip: {
      background: 'white',
      color: 'dark-1',
      tipSize: '5px',
      round: 'small',
      maxWidth: '20%',
      dropProps: { left: 'right', top: 'bottom' },
      boxShadow: '0 1px 5px 0 rgba(0,0,0,0.21)',
      pad: {
        horizontal: 'large',
        vertical: 'medium',
      },
      titleProps: {
        weight: 'bold',
        margin: {
          vertical: 'medium',
        },
      },
    },
    pagination: {
      background: 'white',
      round: 'small',
      border: {
        color: 'light-2',
      },
      pad: 'xsmall',
      active: {
        background: '#3367D6',
        color: 'white',
      },
      list: {
        border: {
          color: 'light-2',
          side: 'right',
        },
        color: 'dark-1',
      },
      icon: {
        bgColor: 'white',
        pad: 'xsmall',
      },
    },
    notification: {
      toast: {
        closeIcon: Close,
        position: 'top-right',
        zIndex: 9999,
        width: '60%',
        timeout: 3000,
        icon: {
          size: 'xlarge',
          default: TickCircle,
          ok: TickCircle,
          error: Error,
          warning: AlertTriangle,
          container: {
            margin: { right: 'medium' },
          },
        },
        text: {
          default: {
            weight: 600,
          },
          ok: {
            color: 'status-ok',
            weight: 600,
            margin: { horizontal: 'small' },
          },
          error: {
            color: 'status-error',
            weight: 600,
            margin: { horizontal: 'small' },
          },
          warning: {
            color: 'status-warning',
            weight: 600,
            margin: { horizontal: 'small' },
          },
        },
        default: {
          background: 'dark-1',
          // border: {},
          size: 'medium',
          align: 'center',
          direction: 'row',
          gap: 'small',
          justify: 'between',
          round: 'xsmall',
          elevation: 'medium',
          pad: { vertical: 'medium', horizontal: 'medium' },
          margin: { vertical: 'small', horizontal: 'large' },
        },
        ok: {
          background: 'status-ok-background',
          pad: 'large',
          border: {
            side: 'all',
            color: 'status-ok-border',
          },
          // text: {},
        },
        critical: {
          background: 'status-error-background',
          pad: 'large',
          border: {
            side: 'all',
            color: 'status-error-border',
          },
          // text: {},
        },
        error: {
          background: 'status-error-background',
          pad: 'large',
          border: {
            side: 'all',
            color: 'status-error-border',
          },
          // text: {},
        },
        warning: {
          background: 'status-warning-background',
          pad: 'large',
          border: {
            side: 'all',
            color: 'status-warning-border',
          },
          // text: {},
        },
      },
    },
    changelog: {
      colors: {
        primary: 'accent-3',
      },
      icons: {
        up: UpArrow,
        down: DownArrow,
        changeArrow: DownArrow,
        close: Close,
      },
    },
    upload: {
      form: {
        container: {
          pad: 'large',
          border: { style: 'dashed', color: 'dark-2' },
          height: 'medium',
          align: 'center',
          justify: 'center',
        },
        header: {
          color: 'dark-1',
          size: 'large',
          weight: 600,
          margin: 'small',
        },
        text: {},
        sampleText: {
          color: 'neutral-1',
          weight: 'bold',
        },
      },
      table: {
        container: {
          overflow: { vertical: 'auto' },
          height: 'medium',
        },
      },
    },
  };

  return deepFreeze(result);
};

export const hb = generate(16);
