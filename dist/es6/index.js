var _templateObject, _templateObject2;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { rgba } from 'polished';
import { css } from 'styled-components';
import { UpArrow } from "mnet-icons/dist/es6/icons/hb/UpArrow";
import { DownArrow } from "mnet-icons/dist/es6/icons/hb/DownArrow";
import { Info } from "mnet-icons/dist/es6/icons/hb/Info";
import { Success } from "mnet-icons/dist/es6/icons/hb/Success";
import { Block } from "mnet-icons/dist/es6/icons/hb/Block";
import { Close } from "mnet-icons/dist/es6/icons/hb/Close";
import { RightArrow } from "mnet-icons/dist/es6/icons/hb/RightArrow";
import { LeftArrow } from "mnet-icons/dist/es6/icons/hb/LeftArrow";
import { TickCircle } from "mnet-icons/dist/es6/icons/neo/TickCircle";
import { Error } from "mnet-icons/dist/es6/icons/neo/Error";
import { AlertTriangle } from "mnet-icons/dist/es6/icons/neo/AlertTriangle";
import { Help } from "mnet-icons/dist/es6/icons/neo/Help";
import { Plus } from "mnet-icons/dist/es6/icons/neo/Plus";
import { AscSort } from "mnet-icons/dist/es6/icons/neo/AscSort";
import { DesSort } from "mnet-icons/dist/es6/icons/neo/DesSort";
import { DefaultSort } from "mnet-icons/dist/es6/icons/neo/DefaultSort";
import { deepFreeze } from 'grommet/utils/object';
import { normalizeColor } from 'grommet/utils/colors';
import { parseMetricToNum } from 'grommet/utils/mixins';
import { FormNext } from "grommet-icons/es6/icons/FormNext";
import { FormPrevious } from "grommet-icons/es6/icons/FormPrevious";
var brandColor = '#3367D6';
var accentColors = ['#38C18B', '#8F94A6', '#739FFC', '#439ADC', '#EC7C7C', '#FFFDE3', '#FAFAFA'];
var neutralColors = ['#519bff', '#99742E', '#00739D', '#A2423D'];
var statusColors = {
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
  'error-border': '#FFE9E9'
};
var darkColors = ['#333333', '#9DA2AD', '#8A90A6', '#9DA2AD', '#9DA2AD', '#9DA2AD'];
var lightColors = ['#F2F5FC', '#F1F3F5', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#C9CBCE', '#F3F4F4', '#B7B7B7'];
var focusColor = '#B1C2FE';
var colors = {
  active: rgba(221, 221, 221, 0.5),
  'background-back': {
    dark: '#33333308',
    light: '#EDEDED'
  },
  'background-front': {
    dark: '#444444',
    light: '#FFFFFF'
  },
  'background-contrast': {
    dark: '#33333308',
    light: '#FFFFFF08'
  },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: 'light-3'
  },
  brand: brandColor,
  control: {
    dark: 'brand',
    light: 'brand'
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
    light: 'dark-1'
  },
  'text-strong': {
    dark: '#FFFFFF',
    light: '#000000'
  },
  'text-weak': {
    dark: '#CCCCCC',
    light: '#555555'
  },
  'text-xweak': {
    dark: '#BBBBBB',
    light: '#666666'
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  'selected-background': 'brand',
  'selected-text': 'text-strong',
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});
export var generate = function generate(baseSpacing, scale) {
  var _fontSizing, _fontSizing2, _fontSizing3, _fontSizing4, _fontSizing5, _fontSizing6;

  if (baseSpacing === void 0) {
    baseSpacing = 16;
  }

  if (scale === void 0) {
    scale = 6;
  }

  // 24
  var baseFontSize = baseSpacing * 0.75; // 12

  var fontScale = baseSpacing / scale; // 16

  var fontSizing = function fontSizing(factor) {
    return {
      size: baseFontSize + factor * fontScale + "px",
      height: baseSpacing + factor * fontScale + "px",
      // maxWidth chosen to be ~50 characters wide
      // see: https://ux.stackexchange.com/a/34125
      maxWidth: baseSpacing * (baseFontSize + factor * fontScale) + "px"
    };
  };

  var borderWidth = 2;
  var controlBorderWidth = 1;
  var result = {
    global: {
      active: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s'
        }
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: baseSpacing / 6 + "px",
        // 4
        large: baseSpacing / 2 + "px",
        // 12
        xlarge: baseSpacing + "px" // 24

      },
      breakpoints: {
        small: {
          value: baseSpacing * 32,
          // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: baseSpacing / 6 + "px",
            // 4
            large: baseSpacing / 4 + "px",
            // 6
            xlarge: baseSpacing / 2 + "px" // 12

          },
          edgeSize: {
            none: '0px',
            hair: '1px',
            // for Chart
            xxsmall: '2px',
            xsmall: baseSpacing / 8 + "px",
            // 3
            small: baseSpacing / 4 + "px",
            // 6
            medium: baseSpacing / 2 + "px",
            // 12
            large: baseSpacing + "px",
            // 24
            xlarge: baseSpacing * 2 + "px" // 48

          },
          size: {
            xxsmall: baseSpacing + "px",
            // 24
            xsmall: baseSpacing * 2 + "px",
            // 48
            small: baseSpacing * 4 + "px",
            // 96
            medium: baseSpacing * 8 + "px",
            // 192
            large: baseSpacing * 16 + "px",
            // 384
            xlarge: baseSpacing * 32 + "px",
            // 768
            full: '100%'
          }
        },
        medium: {
          value: baseSpacing * 64 // 1536

        },
        large: {}
      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large'
      },
      colors: colors,
      control: {
        border: {
          width: controlBorderWidth + "px",
          radius: '4px',
          color: 'border'
        },
        disabled: {
          opacity: 0.5
        }
      },
      // The time to wait after the user stopped typing, measured in ms.
      debounceDelay: 300,
      drop: {
        background: '#ffffff',
        border: {
          radius: '0px'
        },
        shadowSize: 'small',
        zIndex: '1031',
        marginTop: '4px'
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        // for Chart
        xxsmall: baseSpacing / 16 + "px",
        // 3
        xsmall: baseSpacing / 8 + "px",
        // 6
        small: baseSpacing / 4 + "px",
        // 12
        medium: baseSpacing / 2 + "px",
        // 24
        large: baseSpacing + "px",
        // 48
        xlarge: baseSpacing * 2 + "px",
        // 96
        responsiveBreakpoint: 'small'
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
          small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)'
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)'
        }
      },
      focus: {
        // shadow or outline are required for accessibility
        border: {
          // remove to only have shadow
          color: 'transparent'
        },
        // outline: { color: undefined, size: undefined },
        shadow: {
          color: 'focus',
          size: '2px'
        }
      },
      font: _extends({}, fontSizing(0), {
        family: "'Inter', sans-serif"
      }),
      hover: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'light-2',
          light: 'light-2'
        }
      },
      input: {
        padding: {
          horizontal: parseMetricToNum(baseSpacing + "px") - parseMetricToNum(controlBorderWidth + "px") + "px",
          vertical: parseMetricToNum(baseSpacing / 2 + "px") - parseMetricToNum(controlBorderWidth + "px") + "px"
        },
        font: {
          // size: undefined,
          // height: undefined,
          weight: 400
        } // deprecate in v3
        // weight: undefined,

      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1
      },
      selected: {
        background: 'selected',
        color: 'brand'
      },
      spacing: baseSpacing + "px",
      size: {
        xxsmall: baseSpacing * 2 + "px",
        // 48
        xsmall: baseSpacing * 4 + "px",
        // 96
        small: baseSpacing * 8 + "px",
        // 192
        medium: baseSpacing * 16 + "px",
        // 384
        large: baseSpacing * 32 + "px",
        // 768
        xlarge: baseSpacing * 48 + "px",
        // 1152
        xxlarge: baseSpacing * 64 + "px",
        // 1536
        full: '100%'
      }
    },
    accordion: {
      panel: {},
      border: {
        side: 'bottom',
        color: 'border'
      },
      heading: {
        level: '4' // level ranges from 1-6

      },
      hover: {
        color: {
          dark: 'light-4',
          light: 'dark-3'
        },
        // deprecated
        heading: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          }
        }
      }
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'brand',
        light: 'brand'
      },
      hover: {
        textDecoration: 'underline'
      },
      icons: {}
    },
    avatar: {
      size: {
        xsmall: baseSpacing * 0.75 + "px",
        small: baseSpacing + "px",
        medium: baseSpacing * 2 + "px",
        // default 48
        large: baseSpacing * 3 + "px",
        xlarge: baseSpacing * 4 + "px"
      },
      text: {}
    },
    box: {
      responsiveBreakpoint: 'small' // when we switch rows to columns

    },
    button: {
      size: {
        small: {
          border: {
            radius: baseSpacing * 0.1875 + "px" // 3px

          },
          pad: {
            vertical: baseSpacing / (1.78 * 2) - borderWidth + "px",
            // 4px
            horizontal: baseSpacing - borderWidth * 2 + "px" // 20px,

          }
        },
        medium: {
          border: {
            radius: baseSpacing * 0.1875 + "px" // 3px

          },
          pad: {
            vertical: baseSpacing / 1.78 - borderWidth + "px",
            horizontal: baseSpacing - borderWidth * 1.4 + "px"
          }
        },
        large: {
          border: {
            radius: baseSpacing * 0.1875 + "px" // 3px

          },
          pad: {
            vertical: baseSpacing / (1.618 / 2) + borderWidth + "px",
            // 8px
            horizontal: baseSpacing * 2.8 - borderWidth + "px" // 32px,

          }
        }
      },
      hover: {
        primary: {
          color: 'white'
        },
        extend: {}
      },
      border: {
        // color: { dark: undefined, light: undefined }
        width: borderWidth + "px",
        radius: baseSpacing * 0.12 + "px"
      },
      color: {
        dark: undefined,
        light: undefined
      },
      "default": {},
      extend: function extend(props) {
        return "\n        " + (props.disabled && "color: " + darkColors[1]) + "\n      ";
      },
      primary: {
        background: 'brand',
        border: {
          color: {
            dark: 'brand',
            light: 'brand'
          }
        },
        color: 'white',
        padding: {
          vertical: undefined,
          horizontal: undefined
        }
      },
      secondary: {
        background: 'light-1',
        border: {
          color: {
            dark: 'light-1',
            light: 'light-1'
          }
        },
        color: 'dark-1'
      },
      tertiary: {
        background: 'transparent',
        border: {
          color: {
            dark: 'transparent',
            light: 'transparent'
          }
        },
        color: 'brand'
      },
      active: {
        background: undefined,
        border: {
          color: {
            dark: 'brand',
            light: 'brand'
          },
          width: borderWidth + "px",
          radius: baseSpacing * 0.12 + "px"
        }
      },
      disabled: {
        background: 'brand',
        border: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          }
        },
        color: 'dark-2',
        opacity: 0.8,
        primary: {
          background: 'brand',
          border: {
            color: {
              dark: 'brand',
              light: 'brand'
            }
          },
          opacity: 0.4,
          color: 'white'
        },
        "default": {
          background: 'light-8',
          border: {
            color: {
              dark: 'light-8',
              light: 'light-8'
            }
          },
          opacity: 1,
          color: 'dark-2'
        }
      },
      padding: {// vertical: `${baseSpacing / 1.618 - borderWidth}px`,
        // horizontal: `${baseSpacing - borderWidth * 1.4}px`,
      },
      transition: {
        timing: 'ease-in-out',
        duration: 0.1,
        properties: ['color', 'background-color', 'border-color', 'box-shadow']
      }
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: baseFontSize - fontScale + "px",
        lineHeight: 1.375,
        daySize: baseSpacing * 8 / 7 + "px",
        slideDuration: '0.2s'
      },
      medium: {
        fontSize: baseFontSize + "px",
        lineHeight: 1.45,
        daySize: baseSpacing * 16 / 7 + "px",
        slideDuration: '0.5s'
      },
      large: {
        fontSize: baseFontSize + 3 * fontScale + "px",
        lineHeight: 1.11,
        daySize: baseSpacing * 32 / 7 + "px",
        slideDuration: '0.8s'
      },
      icons: {},
      heading: {
        level: '4'
      } // level ranges from 1-6

    },
    carousel: {
      icons: {},
      animation: {
        duration: 1000
      }
    },
    chart: {
      color: 'graph-0'
    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(224, 224, 224, 1)'
        },
        width: '2px',
        radius: '3px'
      },
      check: {
        thickness: '3px',
        extend: function extend(_ref) {
          var checked = _ref.checked;
          return "\n          " + (checked && "background-color: " + colors.brand + ";") + "\n          border: unset;\n          box-shadow: unset;\n          border-radius: 3px;\n          color: white;\n        ";
        }
      },
      color: {
        light: 'white',
        dark: 'neutral-3'
      },
      // extend: () => `
      //   margin-bottom: 0;
      //   color: ${colors.white};
      // `,
      extend: "\n        color: " + darkColors[0] + ";\n        margin-bottom: 0;\n        font-weight: 400;",
      gap: 'medium',
      hover: {
        border: {
          color: undefined
        }
      },
      icon: {
        size: '18px',
        extend: 'stroke: white;',
        color: colors.white
      },
      icons: {// checked: Tick,
      },
      size: baseSpacing + "px",
      toggle: {
        color: {
          dark: 'white',
          light: 'white'
        },
        knob: {
          extend: function extend(_ref2) {
            var checked = _ref2.checked;
            return "" + (checked ? "border: 2px solid " + brandColor + ";" : 'background: #d9d9d9');
          }
        },
        radius: baseSpacing + "px",
        size: baseSpacing * 2 + "px",
        extend: function extend(_ref3) {
          var checked = _ref3.checked;
          return "\n        " + (checked && "background-color: " + colors.brand + ";") + "\n        border-radius: 16px;\n        color: " + colors.brand + ";\n        " + (checked && "border-color: " + colors.brand + ";") + "\n      ";
        }
      },
      label: {
        color: 'dark-1',
        size: 'medium',
        weight: 400
      }
    },
    CheckBoxGroup: {
      label: {
        color: 'dark-1',
        size: 'medium',
        weight: 400
      }
    },
    clock: {
      analog: {
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3'
          },
          width: baseSpacing / 3 + "px",
          size: baseSpacing + "px",
          shape: 'round'
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          },
          width: baseSpacing / 6 + "px",
          size: Math.round(baseSpacing / 2) + "px",
          shape: 'round'
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          },
          width: baseSpacing / 8 + "px",
          size: Math.round(baseSpacing / 2.666) + "px",
          shape: 'round'
        },
        size: {
          small: baseSpacing * 3 + "px",
          medium: baseSpacing * 4 + "px",
          large: baseSpacing * 6 + "px",
          xlarge: baseSpacing * 9 + "px",
          huge: baseSpacing * 12 + "px"
        }
      },
      digital: {
        text: {
          xsmall: {
            size: baseFontSize - 2 * fontScale + "px",
            height: 1.5
          },
          small: {
            size: baseFontSize - fontScale + "px",
            height: 1.43
          },
          medium: {
            size: baseFontSize + "px",
            height: 1.375
          },
          large: {
            size: baseFontSize + fontScale + "px",
            height: 1.167
          },
          xlarge: {
            size: baseFontSize + 2 * fontScale + "px",
            height: 1.1875
          },
          xxlarge: {
            size: baseFontSize + 4 * fontScale + "px",
            height: 1.125
          }
        }
      }
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500
    },
    dataTable: {
      groupHeader: {
        background: {
          dark: 'dark-2',
          light: 'light-2'
        },
        border: {
          side: 'bottom',
          size: 'xsmall'
        },
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        }
      },
      groupEnd: {
        border: {
          side: 'bottom',
          size: 'xsmall'
        }
      },
      header: {},
      icons: {},
      primary: {
        weight: 'bold'
      },
      resize: {
        border: {
          color: 'border',
          side: 'end'
        }
      }
    },
    diagram: {
      line: {
        color: 'graph-0'
      }
    },
    formField: {
      border: {
        color: 'white',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical'
          }
        },
        position: 'inner',
        side: 'all',
        size: 'xsmall'
      },
      content: {
        pad: 'small'
      },
      field: {
        "default": {
          border: 'none'
        } // focus: 'border-color: white;',

      },
      disabled: {
        background: {
          color: 'status-disabled',
          opacity: 'medium'
        }
      },
      error: {
        color: 'status-critical',
        margin: {
          vertical: 'medium',
          horizontal: 'none'
        }
      },
      help: {
        color: 'dark-3',
        margin: {
          start: 'small'
        }
      },
      info: {
        color: 'text-xweak',
        margin: {
          vertical: 'xsmall',
          left: 'medium'
        }
      },
      label: {
        weight: 400,
        margin: {
          bottom: 'medium',
          left: 'none'
        }
      },
      margin: {
        bottom: 'small'
      },
      postfix: {
        color: 'white',
        background: 'transparent',
        justify: 'center',
        pad: {
          horizontal: 'large',
          vertical: 'medium'
        }
      },
      prefix: {
        color: 'white',
        background: 'transparent',
        justify: 'center',
        pad: {
          horizontal: 'large',
          vertical: 'medium'
        }
      },
      overlappedLabel: {
        formField: {
          extend: {
            position: 'relative',
            label: {
              position: 'absolute',
              left: baseSpacing * 0.5625 + "px",
              top: "-" + baseSpacing * 0.75 + "px",
              padding: '2px',
              background: 'white',
              fontSize: baseSpacing * 0.625 + "px",
              zIndex: '1',
              span: {
                fontSize: baseSpacing * 0.625 + "px"
              }
            }
          }
        }
      },
      extend: {
        button: {// flex: 1,
        },
        input: {
          boxShadow: 'none',
          outline: 'none'
        },
        icon: Info,
        iconProps: {
          margin: {
            horizontal: 'small'
          },
          size: 'large'
        }
      },
      round: 'small'
    },
    heading: {
      font: {
        family: 'Inter'
      },
      level: {
        1: {
          font: {},
          small: _extends({}, fontSizing(4)),
          medium: _extends({}, fontSizing(8)),
          large: _extends({}, fontSizing(16)),
          xlarge: _extends({}, fontSizing(24))
        },
        2: {
          font: {},
          small: _extends({}, fontSizing(2)),
          medium: _extends({}, fontSizing(4)),
          large: _extends({}, fontSizing(8)),
          xlarge: _extends({}, fontSizing(12))
        },
        3: {
          font: {},
          small: _extends({}, fontSizing(1)),
          medium: _extends({}, fontSizing(2)),
          large: _extends({}, fontSizing(4)),
          xlarge: _extends({}, fontSizing(6))
        },
        4: {
          font: {},
          small: _extends({}, fontSizing(0)),
          medium: _extends({}, fontSizing(0)),
          large: _extends({}, fontSizing(0)),
          xlarge: _extends({}, fontSizing(0))
        },
        5: {
          font: {},
          small: _extends({}, fontSizing(-0.5)),
          medium: _extends({}, fontSizing(-0.5)),
          large: _extends({}, fontSizing(-0.5)),
          xlarge: _extends({}, fontSizing(-0.5))
        },
        6: {
          font: {},
          small: _extends({}, fontSizing(-1)),
          medium: _extends({}, fontSizing(-1)),
          large: _extends({}, fontSizing(-1)),
          xlarge: _extends({}, fontSizing(-1))
        }
      },
      responsiveBreakpoint: 'small',
      // when we scale the font size down
      weight: 600
    },
    icon: {
      size: {
        xsmall: (_fontSizing = fontSizing(-1.5)) == null ? void 0 : _fontSizing.size,
        small: (_fontSizing2 = fontSizing(-1)) == null ? void 0 : _fontSizing2.size,
        medium: (_fontSizing3 = fontSizing(0)) == null ? void 0 : _fontSizing3.size,
        // 18px
        large: (_fontSizing4 = fontSizing(1)) == null ? void 0 : _fontSizing4.size,
        // 22px
        xlarge: (_fontSizing5 = fontSizing(2)) == null ? void 0 : _fontSizing5.size,
        xxlarge: (_fontSizing6 = fontSizing(4)) == null ? void 0 : _fontSizing6.size
      }
    },
    layer: {
      background: 'white',
      border: {
        radius: '4px'
      },
      container: {
        zIndex: '15'
      },
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
      },
      responsiveBreakpoint: 'small',
      // when Layer takes over the full screen
      zIndex: '1031'
    },
    list: {
      item: {
        border: 'horizontal',
        pad: {
          horizontal: 'medium',
          vertical: 'small'
        }
      }
    },
    menu: {
      extend: undefined,
      icons: {}
    },
    meter: {
      color: 'graph-0'
    },
    modalpopup: {
      container: {
        width: 'large'
      },
      title: {
        wrapper: {
          pad: {
            horizontal: 'large',
            vertical: 'medium'
          },
          direction: 'row',
          justify: 'between',
          align: 'center',
          border: {
            side: 'bottom',
            color: 'light-2'
          }
        },
        text: {
          margin: 'none',
          level: 3,
          size: 'small',
          color: 'dark-1'
        },
        close: {
          icon: Close,
          size: 'xxlarge',
          color: 'dark-2'
        }
      },
      message: {
        wrapper: {
          pad: 'large'
        },
        text: {
          size: 'medium',
          color: 'dark-1'
        }
      },
      buttons: {
        wrapper: {
          pad: {
            horizontal: 'large',
            bottom: 'large'
          },
          direction: 'row'
        },
        button: {
          margin: {
            right: 'medium'
          }
        }
      }
    },
    multiselect: {
      container: {
        border: {
          color: 'light-3'
        },
        round: 'small'
      },
      includeBtn: {
        color: 'status-ok',
        showIcon: true,
        style: {
          letterSpacing: baseSpacing / 11 + "px"
        }
      },
      excludeBtn: {
        color: 'status-error',
        showIcon: true,
        style: {
          letterSpacing: baseSpacing / 11 + "px"
        }
      },
      option: {
        width: 'full',
        direction: 'row',
        justify: 'between',
        align: 'center',
        pad: {
          horizontal: 'medium'
        }
      },
      checkbox: {
        box: {
          margin: {
            right: 'medium'
          }
        },
        checkmark: {
          size: baseSpacing * 1.2 + "px",
          color: 'white'
        },
        check: {
          height: baseSpacing * 1.2 + "px",
          width: baseSpacing * 1.2 + "px",
          margin: 'auto',
          round: 'small',
          align: 'center',
          justify: 'center',
          background: 'white',
          border: {
            color: 'light-6'
          }
        },
        label: {
          margin: {
            bottom: 'none'
          }
        }
      },
      chips: {
        wrapper: {
          pad: {
            vertical: 'medium',
            left: 'medium',
            right: 'small'
          },
          direction: 'row',
          extend: function extend(props) {
            return {
              'border-bottom': props.twoColumnLayout ? 'none' : '1px solid #D9DBE5'
            };
          }
        },
        option: {
          background: 'light-3',
          round: 'small',
          pad: {
            vertical: 'medium',
            horizontal: 'medium'
          },
          margin: 'small',
          direction: 'row',
          align: 'center',
          extend: function extend(props) {
            return {
              width: props.twoColumnLayout ? '100%' : 'auto',
              margin: props.twoColumnLayout ? 0 : baseSpacing / (1.618 * 2) + "px",
              background: props.twoColumnLayout ? 'white' : lightColors[2],
              'justify-content': props.twoColumnLayout ? 'space-between' : 'flex-start'
            };
          }
        },
        label: {
          color: 'dark-1',
          size: 'medium',
          weight: 400,
          margin: {
            right: 'small'
          }
        },
        icon: {
          size: 'small',
          color: 'dark-3'
        },
        clear: {
          margin: 'medium',
          border: {
            side: 'top',
            color: 'light-3'
          },
          color: 'dark-1',
          size: 'medium',
          alignSelf: 'end',
          weight: 600,
          height: baseSpacing * 1.88 + "px",
          style: {
            letterSpacing: baseSpacing / 11 + "px"
          }
        }
      },
      controls: {
        wrapper: {
          pad: 'medium',
          direction: 'row',
          height: {
            min: 'auto'
          }
        },
        button: {
          margin: 'small'
        }
      },
      labelWrap: {
        pad: {
          left: 'none'
        }
      },
      searchbox: {
        textWrapper: {
          flex: 'grow'
        },
        iconWrapper: {
          gap: 'medium',
          width: 'xxsmall',
          direction: 'row',
          justify: 'center'
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
            color: 'light-3'
          },
          style: {
            minHeight: baseSpacing * 2.5 + "px",
            position: 'relative'
          }
        },
        placeholder: {
          color: 'dark-4',
          size: 'medium' // margin: { left: 'large' },

        },
        icon: {
          size: 'small',
          color: 'dark-3'
        }
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
              color: 'light-3'
            },
            style: {
              zIndex: 0
            }
          },
          text: {
            color: 'dark-1',
            size: 'medium',
            weight: 400
          },
          count: {
            margin: {
              left: 'small'
            },
            background: statusColors.info,
            round: 'medium',
            pad: {
              horizontal: 'medium'
            },
            justify: 'center'
          }
        },
        container: {
          extend: function extend(_ref4) {
            var isEmpty = _ref4.isEmpty;
            return {
              padding: (isEmpty ? "" + baseSpacing / 1.6 : '0') + "px " + (isEmpty ? "" + baseSpacing : '0') + "px"
            };
          }
        }
      },
      custom: {
        wrapper: {
          direction: 'row',
          border: {
            color: 'light-3'
          },
          round: 'small'
        },
        textAreaWrap: {
          border: {
            side: 'right',
            color: 'transparent'
          },
          pad: 'medium',
          height: '100%'
        },
        formField: {
          contentProps: {
            height: 'full',
            border: false
          },
          height: 'full'
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
              color: 'light-3'
            },
            height: {
              min: baseSpacing * 1.88 + "px"
            }
          }
        }
      },
      icons: {
        include: {
          icon: Success,
          extend: {
            color: 'status-ok',
            size: 'large'
          }
        },
        exclude: {
          icon: Block,
          extend: {
            color: 'status-error',
            size: 'large'
          }
        }
      }
    },
    paragraph: {
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      large: _extends({}, fontSizing(1)),
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    radioButton: {
      font: {
        weight: 400
      },
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '1px'
      },
      check: {
        radius: '100%',
        color: {
          dark: 'brand',
          light: 'brand'
        }
      },
      checked: {
        extend: {
          check: {
            radius: '20%'
          }
        }
      },
      hover: {
        border: {
          color: {
            dark: 'brand',
            light: 'brand'
          }
        }
      },
      icon: {},
      icons: {},
      gap: 'medium',
      size: baseSpacing + 1 + "px"
    },
    rangeInput: {
      track: {
        height: '4px',
        color: css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n          ", ";\n        "])), function (props) {
          return rgba(normalizeColor('border', props.theme), 0.2);
        })
      },
      thumb: {}
    },
    rangeSelector: {
      background: {
        invert: {
          color: 'light-4'
        }
      }
    },
    reporting: {
      filters: {
        menu: {
          icons: {
            color: 'brand',
            size: 'xlarge',
            icon: Plus
          },
          item: {
            disabled: {
              extend: {
                cursor: 'not-allowed'
              }
            },
            hover: {
              extend: function extend(_ref5) {
                var theme = _ref5.theme;
                return {
                  color: normalizeColor('dark-1', theme)
                };
              }
            },
            extend: {
              minWidth: baseSpacing * 10 + "px",
              padding: baseSpacing / 4 + "px " + baseSpacing / 1.5 + "px",
              fontSize: baseSpacing * 0.875 + "px"
            }
          },
          list: {
            extend: {
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }
          },
          drop: {
            maxHeight: baseSpacing * 12.5 + "px",
            '& ::-webkit-scrollbar': {
              width: '14px'
            },
            '& ::-webkit-scrollbar-thumb': {
              border: '4px solid transparent',
              borderRadius: '7px',
              boxShadow: 'inset 0 0 0 10px',
              color: darkColors[3]
            },
            '& ::-webkit-scrollbar-button': {
              width: 0,
              height: 0,
              display: 'none'
            },
            '& ::-webkit-scrollbar-corner': {
              backgroundColor: 'transparent'
            }
          }
        },
        tag: {
          label: {
            size: 'large',
            margin: {
              vertical: 'small'
            }
          },
          state: {
            disabled: {
              cursor: 'not-allowed',
              opacity: 0.4
            }
          },
          selected: {
            background: 'light-8',
            pad: {
              horizontal: 'large',
              vertical: '0'
            },
            border: {
              color: 'border'
            },
            round: 'small' // width: {
            //   min: `${baseSpacing * 11.25}px`,
            // },

          },
          subOpt: {
            weight: 500,
            size: 'large'
          },
          subOptNumber: {
            margin: {
              horizontal: 'medium'
            },
            pad: {
              horizontal: 'small'
            },
            round: 'small',
            background: 'brand',
            extend: {
              color: 'white',
              fontWeight: 600
            }
          },
          icons: {
            "delete": Close,
            disable: Block,
            size: 'medium',
            color: 'dark-3'
          },
          iconButtons: {
            margin: {
              left: baseSpacing / 2 + "px"
            },
            extend: {
              paddingLeft: baseSpacing / 2 + "px"
            }
          },
          options: {
            time: {
              wrapper: {
                border: {
                  side: 'vertical',
                  color: 'border'
                },
                pad: {
                  horizontal: 'medium'
                },
                background: 'white'
              },
              item: {
                "switch": {
                  container: {
                    pad: '0',
                    gap: 'medium'
                  },
                  option: {
                    pad: {
                      horizontal: 'small'
                    },
                    round: 'small'
                  },
                  text: {
                    weight: 500,
                    size: 'large',
                    active: 'white',
                    inactive: 'dark-3'
                  }
                }
              }
            }
          },
          dropdown: {
            width: 'medium'
          }
        },
        drop: {
          selection: {
            search: {
              margin: '0',
              extend: {
                borderRadius: 0,
                fontSize: baseSpacing * 0.875 + "px",
                paddingLeft: baseSpacing * 2.25 + "px"
              }
            },
            list: {
              wrapper: {
                border: {
                  side: 'horizontal',
                  size: 'xsmall'
                },
                height: {
                  max: baseSpacing * 12.5 + "px"
                },
                extend: function extend(_ref6) {
                  var theme = _ref6.theme;
                  return {
                    '::-webkit-scrollbar': {
                      width: '14px'
                    },
                    '::-webkit-scrollbar-thumb': {
                      border: '4px solid transparent',
                      borderRadius: '7px',
                      boxShadow: 'inset 0 0 0 10px',
                      color: normalizeColor('dark-4', theme)
                    },
                    '::-webkit-scrollbar-button': {
                      width: 0,
                      height: 0,
                      display: 'none'
                    },
                    '::-webkit-scrollbar-corner': {
                      backgroundColor: 'transparent'
                    }
                  };
                }
              },
              item: {
                direction: 'row',
                gap: baseSpacing / 2 + "px",
                align: 'center',
                margin: '0',
                pad: {
                  horizontal: 'medium',
                  vertical: baseSpacing / 2 + "px"
                },
                extend: function extend(_ref7) {
                  var theme = _ref7.theme;
                  return {
                    fontSize: baseSpacing * 0.875 + "px",
                    '> label': {
                      width: '100%'
                    },
                    '&:hover': {
                      cursor: 'pointer',
                      background: normalizeColor('active', theme)
                    }
                  };
                }
              },
              icons: {
                info: Info,
                size: 'large',
                color: 'accent-12'
              }
            },
            incExc: {
              wrapper: {
                border: {
                  size: 'xsmall',
                  side: 'bottom',
                  color: 'border'
                },
                margin: '0',
                round: 'none',
                overflow: 'hidden'
              },
              item: {
                align: 'center',
                pad: 'medium',
                extend: function extend(_ref8) {
                  var isActive = _ref8.isActive,
                      theme = _ref8.theme;
                  return {
                    fontSize: baseSpacing * 0.875 + "px",
                    fontWeight: '600',
                    color: normalizeColor(isActive ? 'brand' : 'dark-1', theme),
                    borderBottom: "3px solid " + normalizeColor(isActive ? 'brand' : 'transparent', theme)
                  };
                }
              }
            },
            radioContainer: {
              pad: 'medium',
              item: {
                gap: 'medium'
              }
            }
          },
          datepicker: {
            container: {
              border: {
                side: 'bottom',
                size: 'xsmall'
              }
            },
            presets: {
              wrapper: {
                width: baseSpacing * 12.5 + "px",
                border: {
                  side: 'right',
                  size: 'xsmall'
                }
              },
              date: {
                item: {
                  "switch": {
                    option: {
                      width: '100%',
                      pad: 'large',
                      extend: function extend(_ref9) {
                        var checked = _ref9.checked,
                            theme = _ref9.theme;
                        return {
                          borderLeft: checked ? "3px solid " + normalizeColor('brand', theme) : '0',
                          '&:hover': {
                            background: normalizeColor('active', theme)
                          }
                        };
                      }
                    },
                    container: {
                      gap: 'none'
                    },
                    text: {
                      weight: 600,
                      size: 'large',
                      active: 'brand',
                      inactive: 'dark-1'
                    },
                    radioButton: {
                      hover: {
                        border: {
                          color: {
                            dark: 'brand',
                            light: 'brand'
                          }
                        }
                      }
                    }
                  }
                },
                wrapper: {
                  extend: function extend(_ref10) {
                    var theme = _ref10.theme;
                    return {
                      'label, label>div': {
                        width: '100%',
                        margin: '0'
                      },
                      label: {
                        borderBottom: "1px solid " + normalizeColor('border', theme)
                      },
                      input: {
                        display: 'none'
                      }
                    };
                  }
                }
              }
            },
            calendar: {
              wrapper: {
                pad: {
                  horizontal: baseSpacing * 2 + "px",
                  vertical: 'small'
                }
              },
              selection: {
                container: {
                  align: 'center',
                  pad: 'large',
                  border: {
                    side: 'bottom',
                    size: 'xsmall'
                  }
                },
                label: {
                  color: 'dark-1',
                  size: 'large'
                }
              },
              header: {
                container: {
                  width: baseSpacing * 10 + "px",
                  pad: {
                    vertical: 'large'
                  }
                },
                text: {
                  size: 'large',
                  color: 'dark-1',
                  weight: 600
                },
                icons: {
                  prev: LeftArrow,
                  next: RightArrow,
                  color: 'dark-8',
                  hover: function hover(_ref11) {
                    var theme = _ref11.theme;
                    return {
                      background: normalizeColor('active', theme)
                    };
                  }
                }
              }
            }
          },
          buttonPanel: {
            container: {
              pad: 'medium',
              justify: 'start',
              gap: 'xsmall'
            },
            button: {
              secondary: false
            }
          }
        }
      },
      dataTable: {
        icons: {
          size: 'large',
          sort: {
            "default": DefaultSort,
            asc: AscSort,
            desc: DesSort
          },
          tooltip: Help
        }
      }
    },
    select: {
      background: 'transparent',
      activeColor: 'light-1',
      container: {
        extend: null
      },
      control: {
        open: undefined,
        extend: function extend(_ref12) {
          var theme = _ref12.theme,
              disabled = _ref12.disabled,
              plain = _ref12.callerPlain;
          return {
            border: !plain && "1px solid " + normalizeColor('light-3', theme),
            input: {
              // color: normalizeColor('dark-4', theme),
              fontWeight: 400,
              padding: "0px " + theme.global.edgeSize.xsmall,
              opacity: disabled ? 0.5 : 1
            },
            padding: baseSpacing * 0.5 + 2 + "px " + baseSpacing * 0.5 + "px",
            background: 'transparent',
            borderBottomWidth: !plain && theme.global.borderSize.small
          };
        }
      },
      options: {
        container: {
          align: 'start',
          pad: 'small',
          round: 'true'
        },
        text: {
          size: 'medium',
          margin: 'small'
        }
      },
      icons: {
        color: 'dark-2',
        margin: {
          horizontal: 'small'
        },
        background: 'background-contrast',
        size: 'xlarge',
        up: UpArrow,
        down: DownArrow
      },
      step: 20
    },
    "switch": {
      radioButton: {
        hover: {
          border: 'none'
        }
      },
      option: {
        pad: 'medium',
        extend: function extend(_ref13) {
          var theme = _ref13.theme;
          return {
            borderRight: "1px solid " + normalizeColor('light-3', theme),
            '&:hover': {
              borderColor: normalizeColor('light-3', theme)
            }
          };
        }
      },
      background: {
        active: 'light-1',
        inactive: 'white',
        disabled: {// active: 'dark-2',
          // inactive: undefined,
        }
      },
      text: {
        weight: 400,
        active: 'status-info',
        inactive: 'black',
        disabled: {// active: 'dark-3',
          // inactive: undefined,
        }
      },
      container: {
        direction: 'row',
        gap: 'none',
        round: 'small',
        overflow: 'hidden',
        height: 'xxsmall',
        border: 'light-3',
        weight: 400
      },
      disabled: undefined
    },
    tab: {
      active: {
        color: 'text'
      },
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'brand',
          light: 'brand'
        },
        active: {
          color: {
            dark: 'white',
            light: 'black'
          }
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      color: 'control',
      hover: {
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small'
      },
      pad: {
        bottom: 'xsmall'
      }
    },
    tabs: {
      header: {},
      panel: {}
    },
    table: {
      header: {
        align: 'start',
        border: false,
        fill: 'horizontal',
        pad: {
          horizontal: 'large',
          vertical: 'large'
        },
        verticalAlign: 'bottom',
        background: {
          color: lightColors[0]
        },
        extend: function extend(props) {
          var _props$children, _props$children$props, _props$children2, _props$children2$prop, _props$children3, _props$children3$prop;

          return (props == null ? void 0 : (_props$children = props.children) == null ? void 0 : (_props$children$props = _props$children.props) == null ? void 0 : _props$children$props.top) && {
            position: 'sticky',
            top: (props == null ? void 0 : (_props$children2 = props.children) == null ? void 0 : (_props$children2$prop = _props$children2.props) == null ? void 0 : _props$children2$prop.top) + ((props == null ? void 0 : (_props$children3 = props.children) == null ? void 0 : (_props$children3$prop = _props$children3.props) == null ? void 0 : _props$children3$prop.offsetTop) || 0) + "px",
            zIndex: 1,
            boxShadow: 'inset 0 -1px 0px 0 #e0e0e0'
          };
        }
      },
      body: {
        align: 'start',
        pad: {
          horizontal: 'large',
          vertical: 'small'
        },
        border: 'horizontal'
      },
      row: {
        hover: {
          background: undefined,
          color: undefined
        }
      },
      footer: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'top'
      }
    },
    text: {
      xsmall: _extends({}, fontSizing(-1.5)),
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      // 18px
      large: _extends({}, fontSizing(1)),
      // 22px
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    textArea: {
      extend: undefined // disabled: { opacity: undefined },

    },
    textInput: {
      container: {
        extend: function extend() {
          return "\n          height: 100%;\n        ";
        }
      },
      placeholder: {
        extend: function extend() {
          return {
            paddingLeft: '20px'
          };
        }
      },
      extend: function extend(_ref14) {
        var plain = _ref14.plain,
            reverse = _ref14.reverse,
            icon = _ref14.icon,
            theme = _ref14.theme,
            readOnly = _ref14.readOnly;
        return {
          paddingTop: '11px',
          paddingBottom: '11px',
          height: '100%',
          fontSize: 'inherit',
          paddingLeft: !reverse && icon ? theme.global.edgeSize.xlarge : theme.global.edgeSize.large,
          border: !plain ? {
            border: theme.global.borderSize.xsmall + " solid " + ("" + normalizeColor('light-3', theme))
          } : 'inherit',
          borderBottomWidth: theme.global.borderSize.small,
          '&:focus': {
            boxShadow: 'none',
            borderColor: 'white',
            borderBottom: theme.global.borderSize.small + " solid " + (!readOnly && normalizeColor('accent-3', theme)),
            background: "" + (!readOnly && normalizeColor('light-1', theme)),
            borderBottomRightRadius: '0px',
            borderBottomLeftRadius: '0px'
          }
        };
      },
      border: "1px solid " + lightColors[2] + ";" // disabled: { opacity: undefined },
      // placeholder: {},

    },
    tip: {
      wrapper: {
        showArrow: false,
        caret: {
          extend: {
            filter: 'drop-shadow(0px 4px 5px rgb(0 0 0 / 0.2))'
          }
        },
        contentWrap: {
          align: 'center',
          justify: 'center',
          elevation: 'xxlarge'
        },
        content: {
          background: 'white',
          direction: 'row',
          pad: {
            horizontal: 'large',
            vertical: 'medium'
          },
          round: 'small',
          margin: 'xsmall',
          extend: {
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.21)',
            maxWidth: '450px'
          }
        }
      },
      drop: {// shadow: 'none',
      }
    },
    pagination: {
      pad: {
        horizontal: 'large',
        vertical: 'small'
      },
      round: 'small',
      control: {
        extend: function extend(props) {
          return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n            border: 1px solid ", ";\n            border-right: none;\n            button {\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            }\n            &:first-child {\n              border-radius: 4px 0 0 4px;\n                        \n            }\n            &:last-child {\n              border-radius: 0 4px 4px 0;\n              border-right: 1px solid ", ";\n            }\n\n        "])), normalizeColor('light-4', props.theme), normalizeColor('light-4', props.theme));
        }
      },
      button: {
        padding: 'none',
        active: {
          background: colors.brand,
          color: 'white',
          border: {
            width: '1px',
            color: colors.brand,
            radius: '0px'
          }
        },
        disabled: {
          padding: 'none'
        },
        color: 'text-strong',
        hover: {
          background: {
            color: undefined
          },
          color: undefined
        },
        size: {
          small: {
            border: {
              radius: baseSpacing / 8 + "px",
              width: '2px'
            },
            pad: {
              vertical: '8px',
              horizontal: '8px'
            },
            font: _extends({}, fontSizing(-1)),
            height: baseSpacing * 1.25 + "px",
            width: baseSpacing * 1.25 + "px"
          },
          medium: {
            border: {
              width: '2px',
              color: 'light-3',
              side: 'right'
            },
            pad: {
              vertical: '8px',
              horizontal: '8px'
            },
            font: _extends({}, fontSizing(0)),
            height: baseSpacing * 2 + "px",
            width: baseSpacing * 2 + "px"
          },
          large: {
            border: {
              radius: baseSpacing / 4 + "px",
              width: '2px'
            },
            pad: {
              vertical: '4px',
              horizontal: '4px'
            },
            font: _extends({}, fontSizing(1)),
            height: baseSpacing * 2 + "px",
            width: baseSpacing * 2 + "px"
          }
        }
      },
      controls: {
        align: 'center',
        justify: 'center',
        direction: 'row',
        margin: 'none',
        pad: 'none',
        gap: 'none'
      },
      icons: {
        color: 'text-xweak',
        previous: FormPrevious,
        next: FormNext
      }
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
          "default": TickCircle,
          ok: TickCircle,
          error: Error,
          warning: AlertTriangle,
          container: {
            margin: {
              right: 'medium'
            }
          }
        },
        text: {
          "default": {
            weight: 600
          },
          ok: {
            color: 'status-ok',
            weight: 600,
            margin: {
              horizontal: 'small'
            }
          },
          error: {
            color: 'status-error',
            weight: 600,
            margin: {
              horizontal: 'small'
            }
          },
          warning: {
            color: 'status-warning',
            weight: 600,
            margin: {
              horizontal: 'small'
            }
          }
        },
        "default": {
          background: 'dark-1',
          size: 'medium',
          align: 'center',
          direction: 'row',
          gap: 'small',
          justify: 'between',
          round: 'xsmall',
          elevation: 'medium',
          pad: {
            vertical: 'medium',
            horizontal: 'medium'
          },
          margin: {
            vertical: 'small',
            horizontal: 'large'
          }
        },
        ok: {
          background: 'status-ok-background',
          pad: 'large',
          border: {
            side: 'all',
            color: 'status-ok-border'
          } // text: {},

        },
        critical: {
          background: 'status-error-background',
          pad: 'large',
          border: {
            side: 'all',
            color: 'status-error-border'
          } // text: {},

        },
        error: {
          background: 'status-error-background',
          pad: 'large',
          border: {
            side: 'all',
            color: 'status-error-border'
          } // text: {},

        },
        warning: {
          background: 'status-warning-background',
          pad: 'large',
          border: {
            side: 'all',
            color: 'status-warning-border'
          } // text: {},

        }
      }
    },
    changelog: {
      colors: {
        primary: 'accent-3'
      },
      icons: {
        up: UpArrow,
        down: DownArrow,
        changeArrow: DownArrow,
        close: Close
      }
    },
    upload: {
      form: {
        container: {
          pad: 'large',
          border: {
            style: 'dashed',
            color: 'dark-2'
          },
          height: 'medium',
          align: 'center',
          justify: 'center',
          background: 'red'
        },
        header: {
          color: 'dark-1',
          size: 'large',
          weight: 600,
          margin: 'small'
        },
        text: {},
        sampleText: {
          color: 'neutral-1',
          weight: 'bold'
        }
      },
      table: {
        container: {
          overflow: {
            vertical: 'auto'
          },
          height: 'medium'
        }
      }
    }
  };
  return deepFreeze(result);
};
export var hb = generate(16);