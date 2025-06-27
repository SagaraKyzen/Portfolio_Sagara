import $ from 'jquery';

$.easing.jswing = $.easing.swing;

$.extend($.easing, {
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    return $.easing[$.easing.def](x, t, b, c, d);
  },
  easeInQuad: (x, t, b, c, d) => c * (t /= d) * t + b,
  easeOutQuad: (x, t, b, c, d) => -c * (t /= d) * (t - 2) + b,
  easeInOutQuad: (x, t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  },
  easeInCubic: (x, t, b, c, d) => c * (t /= d) * t * t + b,
  easeOutCubic: (x, t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b,
  easeInOutCubic: (x, t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: (x, t, b, c, d) => c * (t /= d) * t * t * t + b,
  easeOutQuart: (x, t, b, c, d) => -c * ((t = t / d - 1) * t * t * t - 1) + b,
  easeInOutQuart: (x, t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: (x, t, b, c, d) => c * (t /= d) * t * t * t * t + b,
  easeOutQuint: (x, t, b, c, d) => c * ((t = t / d - 1) * t * t * t * t + 1) + b,
  easeInOutQuint: (x, t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: (x, t, b, c, d) => -c * Math.cos(t / d * (Math.PI / 2)) + c + b,
  easeOutSine: (x, t, b, c, d) => c * Math.sin(t / d * (Math.PI / 2)) + b,
  easeInOutSine: (x, t, b, c, d) => -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b,
  easeInExpo: (x, t, b, c, d) => t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b,
  easeOutExpo: (x, t, b, c, d) => t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b,
  easeInOutExpo: (x, t, b, c, d) => {
    if (t === 0) return b;
    if (t === d) return b + c;
    t /= d / 2;
    if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: (x, t, b, c, d) => -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b,
  easeOutCirc: (x, t, b, c, d) => c * Math.sqrt(1 - (t = t / d - 1) * t) + b,
  easeInOutCirc: (x, t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
});
