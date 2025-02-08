<template>
  <div class="Sakura">
    <canvas id="canvas_sakura" ref="canvas_sakura" :style="{ zIndex: zIndex }"></canvas>
  </div>
</template>

<script>
class Sakura {
  constructor(x, y, s, r, fn, that, img) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
    this.that = that;
    this.img = img;
  }
  draw(cxt) {
    cxt.save();
    // eslint-disable-next-line no-unused-vars
    var xc = (40 * this.s) / 4;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(this.img, 0, 0, 40 * this.s, 40 * this.s);
    cxt.restore();
  }
  update() {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
      this.r = this.that.getRandom("fnr");
      if (Math.random() > 0.4) {
        this.x = this.that.getRandom("x");
        this.y = 0;
        this.s = this.that.getRandom("s");
        this.r = this.that.getRandom("r");
      } else {
        this.x = window.innerWidth;
        this.y = this.that.getRandom("y");
        this.s = this.that.getRandom("s");
        this.r = this.that.getRandom("r");
      }
    }
  }
}
class SakuraList {
  constructor() {
    this.list = [];
  }
  push(sakura) {
    this.list.push(sakura);
  }
  update() {
    for (var i = 0, len = this.list.length; i < len; i++) {
      this.list[i].update();
    }
  }
  draw(cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
      this.list[i].draw(cxt);
    }
  }
  get(i) {
    return this.list[i];
  }
  size() {
    return this.list.length;
  }
}
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sakura",
  data() {
    return {
      staticx: false,
      stop: null,
      num: 20,
      show: true,
      zIndex: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.show) {
        this.startSakura();
      }
    });
  },
  methods: {
    getRandom(option) {
      var ret, random;
      switch (option) {
        case "x":
          ret = Math.random() * window.innerWidth;
          break;
        case "y":
          ret = Math.random() * window.innerHeight;
          break;
        case "s":
          ret = Math.random();
          break;
        case "r":
          ret = Math.random() * 6;
          break;
        case "fnx":
          random = -0.5 + Math.random() * 1;
          // eslint-disable-next-line no-unused-vars
          ret = function (x, y) {
            return x + 0.15 * random - 1.7 * 0.3;
          };
          break;
        case "fny":
          random = 1.5 + Math.random() * 0.7;
          ret = function (x, y) {
            return y + 0.3 * random;
          };
          break;
        case "fnr":
          random = Math.random() * 0.03;
          ret = function (r) {
            return r + random;
          };
          break;
      }
      return ret;
    },
    startSakura() {
      let that = this;
      // eslint-disable-next-line no-global-assign
      requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame;
      var canvas = document.getElementById("canvas_sakura");
      this.staticx = true;
      this.$refs.canvas_sakura.width = window.innerWidth;
      this.$refs.canvas_sakura.height = window.innerHeight;
      var cxt = this.$refs.canvas_sakura.getContext("2d");
      var sakuraList = new SakuraList();
      const img = new Image();

      img.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAADUCAYAAAAssufOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYzNjgyOTVFMTgzNjExRUI5NDY1QTA1MUYwQ0FCQUFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYzNjgyOTVGMTgzNjExRUI5NDY1QTA1MUYwQ0FCQUFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjM2ODI5NUMxODM2MTFFQjk0NjVBMDUxRjBDQUJBQUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjM2ODI5NUQxODM2MTFFQjk0NjVBMDUxRjBDQUJBQUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6utptkAAAn/ElEQVR42uxd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";

      for (var i = 0; i < that.num; i++) {
        let sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny, randomFnR;
        randomX = this.getRandom("x");
        randomY = this.getRandom("y");
        randomR = this.getRandom("r");
        randomS = this.getRandom("s");
        randomFnx = this.getRandom("fnx");
        randomFny = this.getRandom("fny");
        randomFnR = this.getRandom("fnr");
        sakura = new Sakura(
          randomX,
          randomY,
          randomS,
          randomR,
          {
            x: randomFnx,
            y: randomFny,
            r: randomFnR,
          },
          this,
          img
        );
        sakura.draw(cxt);
        sakuraList.push(sakura);
      }
      this.stop = requestAnimationFrame(function fn() {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        that.stop = requestAnimationFrame(fn);
      });
    },
    stopp() {
      if (this.staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(this.stop);
        this.staticx = false;
      } else {
        this.startSakura();
      }
    },
  },
};
</script>

<style scoped>
#canvas_sakura {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
