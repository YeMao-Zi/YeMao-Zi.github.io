import { AnimationDebounce } from "./index";

export function clickParticle() {
  class Circle {
    constructor({ origin, speed, color, angle, context }) {
      this.origin = origin;
      this.position = { ...this.origin };
      this.color = color;
      this.speed = speed;
      this.angle = angle;
      this.context = context;
      this.renderCount = 0;
    }

    draw() {
      this.context.fillStyle = this.color;
      this.context.beginPath();
      this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2);
      this.context.fill();
    }

    move() {
      this.position.x = Math.sin(this.angle) * this.speed + this.position.x;
      this.position.y =
        Math.cos(this.angle) * this.speed + this.position.y + this.renderCount * 0.3;
      this.renderCount++;
    }
  }

  class Boom {
    constructor({ origin, context, circleCount = 10, area }) {
      this.origin = origin;
      this.context = context;
      this.circleCount = circleCount;
      this.area = area;
      this.stop = false;
      this.circles = [];
    }

    randomArray(range) {
      const length = range.length;
      const randomIndex = Math.floor(length * Math.random());
      return range[randomIndex];
    }

    randomColor() {
      // const range = ["8", "9", "A", "B", "C", "D", "E", "F"];
      // return (
      //   "#" +
      //   this.randomArray(range) +
      //   this.randomArray(range) +
      //   this.randomArray(range) +
      //   this.randomArray(range) +
      //   this.randomArray(range) +
      //   this.randomArray(range)
      // );
      const colors = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
      const rangeIndex = Math.floor(Math.random() * (colors.length - 1));
      return colors[rangeIndex];
    }

    randomRange(start, end) {
      return (end - start) * Math.random() + start;
    }

    init() {
      for (let i = 0; i < this.circleCount; i++) {
        const circle = new Circle({
          context: this.context,
          origin: this.origin,
          color: this.randomColor(),
          angle: this.randomRange(Math.PI - 1, Math.PI + 1),
          speed: this.randomRange(1, 6),
        });
        this.circles.push(circle);
      }
    }

    move() {
      this.circles.forEach((circle, index) => {
        if (circle.position.x > this.area.width || circle.position.y > this.area.height) {
          return this.circles.splice(index, 1);
        }
        circle.move();
      });
      if (this.circles.length == 0) {
        this.stop = true;
      }
    }

    draw() {
      this.circles.forEach((circle) => circle.draw());
    }
  }

  class CursorSpecialEffects {
    constructor() {
      this.computerCanvas = document.createElement("canvas");
      this.renderCanvas = document.createElement("canvas");

      this.computerContext = this.computerCanvas.getContext("2d");
      this.renderContext = this.renderCanvas.getContext("2d");

      this.globalWidth = window.innerWidth;
      this.globalHeight = window.innerHeight;

      this.booms = [];
      this.running = false;
    }

    handleMouseDown(e) {
      const boom = new Boom({
        origin: { x: e.clientX, y: e.clientY },
        context: this.computerContext,
        area: {
          width: this.globalWidth,
          height: this.globalHeight,
        },
      });
      boom.init();
      this.booms.push(boom);
      this.running || this.run();
    }

    handlePageHide() {
      this.booms = [];
      this.running = false;
    }

    init() {
      const style = this.renderCanvas.style;
      style.position = "fixed";
      style.top = style.left = 0;
      style.zIndex = "999999999999999999999999999999999999999999";
      style.pointerEvents = "none";

      style.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth;
      style.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight;

      document.body.append(this.renderCanvas);

      window.addEventListener("mousedown", this.handleMouseDown.bind(this));
      window.addEventListener("pagehide", this.handlePageHide.bind(this));
    }

    run() {
      this.running = true;
      if (this.booms.length == 0) {
        return (this.running = false);
      }

      requestAnimationFrame(this.run.bind(this));

      this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight);
      this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight);

      this.booms.forEach((boom, index) => {
        if (boom.stop) {
          return this.booms.splice(index, 1);
        }
        boom.move();
        boom.draw();
      });
      this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight);
    }
  }

  const cursorSpecialEffects = new CursorSpecialEffects();
  cursorSpecialEffects.init();
}

export function ballBoom() {
  let balls = [];
  let longPressed = false;
  let longPress;
  let multiplier = 0;
  let width, height;
  let origin;
  let normal;
  let ctx;
  const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.setAttribute(
    "style",
    "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;"
  );
  const pointer = document.createElement("span");
  pointer.classList.add("pointer");
  document.body.appendChild(pointer);

  if (canvas.getContext && window.addEventListener) {
    ctx = canvas.getContext("2d");
    updateSize();
    const resizeFun = new AnimationDebounce();
    window.addEventListener("resize", resizeFun.run(updateSize), false);
    loop();

    const mousedownFun = new AnimationDebounce();
    window.addEventListener(
      "mousedown",
      function (e) {
        mousedownFun.run(() => {
          pushBalls(randBetween(5, 10), e.clientX, e.clientY);
          document.body.classList.add("is-pressed");
          longPress = setTimeout(function () {
            document.body.classList.add("is-longpress");
            longPressed = true;
          }, 500);
        });
      },
      false
    );

    const mouseupFun = new AnimationDebounce();
    window.addEventListener(
      "mouseup",
      function (e) {
        mouseupFun.run(() => {
          clearInterval(longPress);
          if (longPressed == true) {
            document.body.classList.remove("is-longpress");
            pushBalls(
              randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)),
              e.clientX,
              e.clientY
            );
            longPressed = false;
          }
          document.body.classList.remove("is-pressed");
        });
      },
      false
    );

    // const mousemoveFun = new AnimationDebounce();
    // window.addEventListener(
    //   "mousemove",
    //   function (e) {
    //     mousemoveFun.run(() => {
    //       let x = e.clientX;
    //       let y = e.clientY;
    //       pointer.style.top = y + "px";
    //       pointer.style.left = x + "px";
    //     });
    //   },
    //   false
    // );
  } else {
    console.log("canvas or addEventListener is unsupported!");
  }

  function updateSize() {
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.scale(2, 2);
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    origin = {
      x: width / 2,
      y: height / 2,
    };
    normal = {
      x: width / 2,
      y: height / 2,
    };
  }
  class Ball {
    constructor(x = origin.x, y = origin.y) {
      this.x = x;
      this.y = y;
      this.angle = Math.PI * 2 * Math.random();
      if (longPressed == true) {
        this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
      } else {
        this.multiplier = randBetween(6, 12);
      }
      this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
      this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
      this.r = randBetween(8, 12) + 3 * Math.random();
      this.color = colours[Math.floor(Math.random() * colours.length)];
    }
    update() {
      this.x += this.vx - normal.x;
      this.y += this.vy - normal.y;
      normal.x = (-2 / window.innerWidth) * Math.sin(this.angle);
      normal.y = (-2 / window.innerHeight) * Math.cos(this.angle);
      this.r -= 0.3;
      this.vx *= 0.9;
      this.vy *= 0.9;
    }
  }

  function pushBalls(count = 1, x = origin.x, y = origin.y) {
    for (let i = 0; i < count; i++) {
      balls.push(new Ball(x, y));
    }
  }

  function randBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  function loop() {
    ctx.fillStyle = "rgba(255, 255, 255, 0)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      if (b.r < 0) continue;
      ctx.fillStyle = b.color;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
      ctx.fill();
      b.update();
    }
    if (longPressed == true) {
      multiplier += 0.2;
    } else if (!longPressed && multiplier >= 0) {
      multiplier -= 0.4;
    }
    removeBall();
    requestAnimationFrame(loop);
  }

  function removeBall() {
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
        balls.splice(i, 1);
      }
    }
  }
}
