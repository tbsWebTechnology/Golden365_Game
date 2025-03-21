"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  'use strict';

  var extend = function extend() {
    var length = arguments.length;
    var target = arguments[0] || {};
    if (_typeof(target) != "object" && typeof target != "function") {
      target = {};
    }
    if (length == 1) {
      target = this;
      i--;
    }
    for (var i = 1; i < length; i++) {
      var source = arguments[i];
      for (var key in source) {
        // 使用for in会遍历数组所有的可枚举属性，包括原型。
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var isFunction = function isFunction(obj) {
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };
  var _SliderCaptcha = function SliderCaptcha(element, options) {
    this.$element = element;
    this.options = extend({}, _SliderCaptcha.DEFAULTS, options);
    this.$element.style.position = 'fixed';
    this.$element.style.bottom = '250px';
    this.$element.style.width = this.options.width + 'px';
    this.$element.style.margin = '0 auto';
    this.$element.style.zIndex = '2002'; // Ensure it's above overlay
    this.$element.style.background = '#fff'; // Set background color to white
    this.$element.style.width = 'fit-content'; // Adjust width based on content
    this.init();
  };
  _SliderCaptcha.VERSION = '1.0';
  _SliderCaptcha.Author = 'argo@163.com';
  _SliderCaptcha.DEFAULTS = {
    width: 350,
    // canvas宽度
    height: 155,
    // canvas高度
    PI: Math.PI,
    sliderL: 42,
    // 滑块边长
    sliderR: 9,
    // 滑块半径
    offset: 5,
    // 容错偏差
    loadingText: '正在加载中...',
    failedText: '再试一次',
    barText: '向右滑动填充拼图',
    repeatIcon: 'fa fa-repeat',
    maxLoadCount: 3,
    localImages: function localImages() {
      return 'images/Pic' + Math.round(Math.random() * 4) + '.jpg';
    },
    verify: function verify(arr, url) {
      var ret = false;
      $.ajax({
        url: url,
        data: {
          "datas": JSON.stringify(arr)
        },
        dataType: "json",
        type: "post",
        async: false,
        success: function success(result) {
          ret = JSON.stringify(result);
          console.log("返回结果：" + ret);
        }
      });
      return ret;
    },
    remoteUrl: null
  };
  function Plugin(option) {
    var $this = document.getElementById(option.id);
    var options = _typeof(option) === 'object' && option;
    return new _SliderCaptcha($this, options);
  }
  window.sliderCaptcha = Plugin;
  window.sliderCaptcha.Constructor = _SliderCaptcha;
  var _proto = _SliderCaptcha.prototype;
  _proto.init = function () {
    this.initDOM();
    this.initImg();
    this.bindEvents();
  };
  _proto.initDOM = function () {
    var createElement = function createElement(tagName, className) {
      var elment = document.createElement(tagName);
      elment.className = className;
      return elment;
    };
    var createCanvas = function createCanvas(width, height) {
      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      return canvas;
    };
    var canvas = createCanvas(this.options.width - 2, this.options.height); // 画布
    var block = canvas.cloneNode(true); // 滑块
    var sliderContainer = createElement('div', 'sliderContainer');
    var refreshIcon = createElement('i', 'refreshIcon ' + this.options.repeatIcon);
    var sliderMask = createElement('div', 'sliderMask');
    var sliderbg = createElement('div', 'sliderbg');
    var slider = createElement('div', 'slider');
    var sliderIcon = createElement('div', 'sliderIcon');
    sliderIcon.innerHTML = "<svg data-v-869b9ee0=\"\" p-id=\"819\" version=\"1.1\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 16px; height: 16px;\">\n    <path data-v-869b9ee0=\"\" d=\"M500.864 545.728a47.744 47.744 0 0 0 6.72-48.896 24.704 24.704 0 0 0-4.48-8.384L240.256 193.088a34.24 34.24 0 0 0-28.608-17.408 34.24 34.24 0 0 0-25.856 12.864 46.592 46.592 0 0 0 0 59.52l238.08 264.512-238.08 264.512a46.592 46.592 0 0 0-1.088 59.52 32 32 0 0 0 50.56 0l265.6-290.88z\" p-id=\"820\"></path>\n    <path data-v-869b9ee0=\"\" d=\"M523.84 248.064l236.992 264.512-238.08 264.512a46.592 46.592 0 0 0 0 59.52 32 32 0 0 0 50.56 0l265.6-292.608a47.744 47.744 0 0 0 6.72-48.832 24.704 24.704 0 0 0-4.48-8.448L578.304 191.36a34.24 34.24 0 0 0-55.552-2.816 46.592 46.592 0 0 0 1.088 59.52z\" p-id=\"821\"></path>\n</svg>";
    var text = createElement('span', 'sliderText');
    block.className = 'block';
    text.innerHTML = this.options.barText;
    var el = this.$element;
    el.appendChild(canvas);
    el.appendChild(refreshIcon);
    el.appendChild(block);
    slider.appendChild(sliderIcon);
    sliderMask.appendChild(slider);
    sliderContainer.appendChild(sliderbg);
    sliderContainer.appendChild(sliderMask);
    sliderContainer.appendChild(text);
    el.appendChild(sliderContainer);
    var _canvas = {
      canvas: canvas,
      block: block,
      sliderContainer: sliderContainer,
      refreshIcon: refreshIcon,
      slider: slider,
      sliderMask: sliderMask,
      sliderIcon: sliderIcon,
      text: text,
      canvasCtx: canvas.getContext('2d'),
      blockCtx: block.getContext('2d')
    };
    if (isFunction(Object.assign)) {
      Object.assign(this, _canvas);
    } else {
      extend(this, _canvas);
    }
  };
  _proto.initImg = function () {
    var that = this;
    var isIE = window.navigator.userAgent.indexOf('Trident') > -1;
    var L = this.options.sliderL + this.options.sliderR * 2 + 3; // 滑块实际边长
    var drawImg = function drawImg(ctx, operation) {
      var l = that.options.sliderL;
      var r = that.options.sliderR;
      var PI = that.options.PI;
      var x = that.x;
      var y = that.y;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
      ctx.lineTo(x + l, y);
      ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
      ctx.lineTo(x + l, y + l);
      ctx.lineTo(x, y + l);
      ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
      ctx.lineTo(x, y);
      ctx.lineWidth = 2;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.stroke();
      ctx[operation]();
      ctx.globalCompositeOperation = isIE ? 'xor' : 'destination-over';
    };
    var getRandomNumberByRange = function getRandomNumberByRange(start, end) {
      return Math.round(Math.random() * (end - start) + start);
    };
    var img = new Image();
    img.crossOrigin = "Anonymous";
    var loadCount = 0;
    img.onload = function () {
      // 随机创建滑块的位置
      that.x = getRandomNumberByRange(L + 10, that.options.width - (L + 10));
      that.y = getRandomNumberByRange(10 + that.options.sliderR * 2, that.options.height - (L + 10));
      drawImg(that.canvasCtx, 'fill');
      drawImg(that.blockCtx, 'clip');
      that.canvasCtx.drawImage(img, 0, 0, that.options.width - 2, that.options.height);
      that.blockCtx.drawImage(img, 0, 0, that.options.width - 2, that.options.height);
      var y = that.y - that.options.sliderR * 2 - 1;
      var ImageData = that.blockCtx.getImageData(that.x - 3, y, L, L);
      that.block.width = L;
      that.blockCtx.putImageData(ImageData, 0, y + 1);
      that.text.textContent = that.text.getAttribute('data-text');
    };
    img.onerror = function () {
      loadCount++;
      if (window.location.protocol === 'file:') {
        loadCount = that.options.maxLoadCount;
        console.error("can't load pic resource file from File protocal. Please try http or https");
      }
      if (loadCount >= that.options.maxLoadCount) {
        that.text.textContent = '加载失败';
        that.classList.add('text-danger');
        return;
      }
      img.src = that.options.localImages();
    };
    img.setSrc = function () {
      var src = '';
      loadCount = 0;
      that.text.classList.remove('text-danger');
      if (isFunction(that.options.setSrc)) src = that.options.setSrc();
      if (!src || src === '') src = 'https://picsum.photos/' + that.options.width + '/' + that.options.height + '/?image=' + Math.round(Math.random() * 20);
      if (isIE) {
        // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
        var xhr = new XMLHttpRequest();
        xhr.onloadend = function (e) {
          var file = new FileReader(); // FileReader仅支持IE10+
          file.readAsDataURL(e.target.response);
          file.onloadend = function (e) {
            img.src = e.target.result;
          };
        };
        xhr.open('GET', src);
        xhr.responseType = 'blob';
        xhr.send();
      } else img.src = src;
    };
    img.setSrc();
    this.text.setAttribute('data-text', this.options.barText);
    this.text.textContent = this.options.loadingText;
    this.img = img;
  };
  _proto.clean = function () {
    this.canvasCtx.clearRect(0, 0, this.options.width, this.options.height);
    this.blockCtx.clearRect(0, 0, this.options.width, this.options.height);
    this.block.width = this.options.width;
  };
  _proto.bindEvents = function () {
    var that = this;
    this.$element.addEventListener('selectstart', function () {
      return false;
    });
    this.refreshIcon.addEventListener('click', function () {
      that.text.textContent = that.options.barText;
      that.reset();
      if (isFunction(that.options.onRefresh)) that.options.onRefresh.call(that.$element);
    });
    var originX,
      originY,
      trail = [],
      isMouseDown = false;
    var handleDragStart = function handleDragStart(e) {
      if (that.text.classList.contains('text-danger')) return;
      originX = e.clientX || e.touches[0].clientX;
      originY = e.clientY || e.touches[0].clientY;
      isMouseDown = true;
    };
    var handleDragMove = function handleDragMove(e) {
      if (!isMouseDown) return false;
      var eventX = e.clientX || e.touches[0].clientX;
      var eventY = e.clientY || e.touches[0].clientY;
      var moveX = eventX - originX;
      var moveY = eventY - originY;
      if (moveX < 0 || moveX + 40 > that.options.width) return false;
      that.slider.style.left = moveX - 1 + 'px';
      var blockLeft = (that.options.width - 40 - 20) / (that.options.width - 40) * moveX;
      that.block.style.left = blockLeft + 'px';
      that.sliderContainer.classList.add('sliderContainer_active');
      that.sliderMask.style.width = moveX + 4 + 'px';
      trail.push(Math.round(moveY));
    };
    var handleDragEnd = function handleDragEnd(e) {
      if (!isMouseDown) return false;
      isMouseDown = false;
      var eventX = e.clientX || e.changedTouches[0].clientX;
      if (eventX === originX) return false;
      that.sliderContainer.classList.remove('sliderContainer_active');
      that.trail = trail;
      var data = that.verify();
      if (data.spliced && data.verified) {
        that.sliderContainer.classList.add('sliderContainer_success');
        if (isFunction(that.options.onSuccess)) that.options.onSuccess.call(that.$element);
      } else {
        that.sliderContainer.classList.add('sliderContainer_fail');
        if (isFunction(that.options.onFail)) that.options.onFail.call(that.$element);
        setTimeout(function () {
          that.text.innerHTML = that.options.failedText;
          that.reset();
        }, 1000);
      }
    };
    this.slider.addEventListener('mousedown', handleDragStart);
    this.slider.addEventListener('touchstart', handleDragStart);
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('touchmove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('mousedown', function () {
      return false;
    });
    document.addEventListener('touchstart', function () {
      return false;
    });
    document.addEventListener('swipe', function () {
      return false;
    });
  };
  _proto.verify = function () {
    var arr = this.trail; // 拖动时y轴的移动距离
    var left = parseInt(this.block.style.left);
    var verified = false;
    if (this.options.remoteUrl !== null) {
      verified = this.options.verify(arr, this.options.remoteUrl);
    } else {
      var sum = function sum(x, y) {
        return x + y;
      };
      var square = function square(x) {
        return x * x;
      };
      var average = arr.reduce(sum) / arr.length;
      var deviations = arr.map(function (x) {
        return x - average;
      });
      var stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length);
      verified = stddev !== 0;
    }
    return {
      spliced: Math.abs(left - this.x) < this.options.offset,
      verified: verified
    };
  };
  _proto.reset = function () {
    this.sliderContainer.classList.remove('sliderContainer_fail');
    this.sliderContainer.classList.remove('sliderContainer_success');
    this.slider.style.left = 0;
    this.block.style.left = 0;
    this.sliderMask.style.width = 0;
    this.clean();
    this.text.setAttribute('data-text', this.text.textContent);
    this.text.textContent = this.options.loadingText;
    this.img.setSrc();
  };
})();