"use strict";

exports.__esModule = true;
exports.hb = exports.generate = void 0;

var _polished = require("polished");

var _styledComponents = require("styled-components");

var _mnetIcons = require("mnet-icons");

var _object = require("mnet-ui-base/utils/object");

var _colors = require("mnet-ui-base/utils/colors");

var _mixins = require("mnet-ui-base/utils/mixins");

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n          ", ";\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n        :focus {\n          outline: none;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var UpArrow = _mnetIcons.HbAdminComponents.UpArrow,
    DownArrow = _mnetIcons.HbAdminComponents.DownArrow,
    Tick = _mnetIcons.HbAdminComponents.Tick,
    Info = _mnetIcons.HbAdminComponents.Info,
    Success = _mnetIcons.HbAdminComponents.Success,
    Block = _mnetIcons.HbAdminComponents.Block,
    Close = _mnetIcons.HbAdminComponents.Close;
var TickCircle = _mnetIcons.NeoComponents.TickCircle,
    Error = _mnetIcons.NeoComponents.Error,
    AlertTriangle = _mnetIcons.NeoComponents.AlertTriangle;
Tick.notSvg = true;
var brandColor = '#3367D6';
var accentColors = ['#38C18B', '#8F94A6', '#739FFC', '#439ADC'];
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
var lightColors = ['#F2F5FC', '#F1F3F5', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#C9CBCE', '#F3F4F4'];
var focusColor = '#B1C2FE';
var colors = {
  active: (0, _polished.rgba)(221, 221, 221, 0.5),
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
    dark: (0, _polished.rgba)(255, 255, 255, 0.33),
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

var generate = function generate(baseSpacing, scale) {
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
          opacity: 0.3
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
          color: 'focus'
        },
        // outline: { color: undefined, size: undefined },
        shadow: {
          color: 'focus',
          size: '2px'
        }
      },
      font: {
        family: "'Inter', sans-serif"
      },
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
          horizontal: (0, _mixins.parseMetricToNum)(baseSpacing + "px") - (0, _mixins.parseMetricToNum)(controlBorderWidth + "px") + "px",
          vertical: (0, _mixins.parseMetricToNum)(baseSpacing / 2 + "px") - (0, _mixins.parseMetricToNum)(controlBorderWidth + "px") + "px"
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
          opacity: 1
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
        extend: function extend(_ref) {
          var checked = _ref.checked;
          return "\n          " + (checked && "background-color: " + colors.brand + ";") + "\n          border: unset;\n          box-shadow: unset;\n          border-radius: 3px;\n          color: white;\n        ";
        },
        radius: '4px',
        thickness: '4px'
      },
      color: {
        light: 'neutral-3',
        dark: 'neutral-3'
      },
      extend: function extend() {
        return "\n        margin-bottom: 0;\n        color: " + colors.white + ";\n      ";
      },
      // extend: `color: ${darkColors[0]};
      //   font-weight: 400;`,
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
      icons: {
        checked: Tick
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
        color: 'border',
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
      labelWrap: {
        margin: 'none',
        width: 'xxsmall',
        direction: 'row'
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
        background: 'dark-3',
        justify: 'center',
        pad: {
          horizontal: 'medium',
          vertical: 'medium'
        }
      },
      prefix: {
        color: 'white',
        background: 'dark-3',
        justify: 'center',
        pad: {
          horizontal: 'medium',
          vertical: 'medium'
        }
      },
      extend: {
        button: {
          flex: 1
        },
        icon: Info,
        iconProps: {
          margin: {
            horizontal: 'small'
          },
          size: 'large'
        }
      },
      tooltip: {
        extend: {
          position: 'right-end',
          background: '#FFFFFF'
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
    mnet: {
      global: (0, _styledComponents.css)(_templateObject())
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
        color: 'status-ok'
      },
      excludeBtn: {
        color: 'status-error'
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
          weight: '600',
          height: '30px'
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
            minHeight: '40px',
            position: 'relative'
          }
        },
        placeholder: {
          color: 'dark-4',
          size: 'medium'
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
            }
          },
          text: {
            color: 'dark-1',
            size: 'medium',
            weight: '400'
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
          height: '100%',
          extend: {
            '*': {
              border: 'none',
              height: '100%'
            }
          }
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
              min: '30px'
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
        color: (0, _styledComponents.css)(_templateObject2(), function (props) {
          return (0, _polished.rgba)((0, _colors.normalizeColor)('border', props.theme), 0.2);
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
    select: {
      background: colors.white,
      activeColor: 'light-1',
      container: {
        extend: null
      },
      control: {
        open: undefined,
        extend: {
          'border-bottom': "2px solid " + lightColors[2] + ";",
          'text-align': 'left',
          padding: '4px 10px 4px 0px'
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
        margin: 'none',
        pad: {
          top: 'xsmall',
          bottom: 'xsmall',
          horizontal: 'small'
        },
        background: 'background-contrast',
        size: 'xlarge',
        up: UpArrow,
        down: DownArrow
      },
      step: 20
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
      extend: function extend(_ref4) {
        var plain = _ref4.plain,
            focus = _ref4.focus,
            reverse = _ref4.reverse,
            icon = _ref4.icon;
        return "\n        padding-top: 9px;\n        padding-bottom: 9px;\n        box-shadow: none;\n        height: 100%;\n        " + (!reverse && icon && 'padding-left: 32px;') + "\n        " + (!plain && "border: 1px solid " + lightColors[2] + ";") + "\n        border-bottom-width: 2px;\n        " + (focus && "border-color: transparent;\n        border-bottom: 2px solid " + statusColors.info + ";\n        background: " + lightColors[0] + ";\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 0px;");
      },
      error: {
        icon: Info,
        text: {
          color: 'brand',
          margin: {
            vertical: 'small'
          }
        },
        extend: "\n        border-bottom: 2px solid red;\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 0px;"
      },
      focus: "\n        border-color: transparent;\n        border-bottom: 2px solid " + statusColors.info + ";\n        background: " + lightColors[0] + ";\n        border-bottom-right-radius: 0px;\n        border-bottom-left-radius: 0px;\n      ",
      border: "1px solid " + lightColors[2] + ";" // disabled: { opacity: undefined },
      // placeholder: {},

    },
    tooptip: {
      background: 'white',
      color: 'dark-1',
      tipSize: '5px',
      round: 'small',
      maxWidth: '20%',
      dropProps: {
        left: 'right',
        top: 'bottom'
      },
      boxShadow: '0 1px 5px 0 rgba(0,0,0,0.21)',
      pad: {
        horizontal: 'large',
        vertical: 'medium'
      },
      titleProps: {
        weight: 'bold',
        margin: {
          vertical: 'medium'
        }
      }
    },
    pagination: {
      background: 'white',
      round: 'small',
      border: {
        color: 'light-3'
      },
      pad: 'xsmall',
      active: {
        background: colors.brand,
        color: 'white'
      },
      list: {
        border: {
          color: 'light-3',
          side: 'right'
        },
        color: 'dark-1'
      },
      icon: {
        bgColor: 'white',
        pad: 'xsmall'
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
  return (0, _object.deepFreeze)(result);
};

exports.generate = generate;
var hb = generate(16);
exports.hb = hb;