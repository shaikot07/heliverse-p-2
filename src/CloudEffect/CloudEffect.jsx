import { useRef, } from "react";
import { useEffect } from "react";
import HeroSection from "../Home/HeroSection/HeroSection";


const CloudEffect = () => {
    const canvasRef = useRef(null);
    const balls = useRef([]);
    const mouse = useRef({ x: undefined, y: undefined });
    const rgb = [
      "rgb(26, 188, 156)",
      "rgb(46, 204, 113)",
      "rgb(52, 152, 219)",
      "rgb(155, 89, 182)",
      "rgb(241, 196, 15)",
      "rgb(230, 126, 34)",
      "rgb(231, 76, 60)"
    ];

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let w, h;

      const init = () => {
        resizeReset();
        animationLoop();
      };

      const resizeReset = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      };

      const animationLoop = () => {
        ctx.clearRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'lighter';
        drawBalls();

        balls.current = balls.current.filter(ball => ball.time <= ball.ttl);

        requestAnimationFrame(animationLoop);
      };

      const drawBalls = () => {
        balls.current.forEach(ball => {
          ball.update();
          ball.draw();
        });
      };

      const mousemove = (e) => {
        mouse.current.x = e.x;
        mouse.current.y = e.y;

        for (let i = 0; i < 3; i++) {
          balls.current.push(new Ball());
        }
      };

      const mouseout = () => {
        mouse.current.x = undefined;
        mouse.current.y = undefined;
      };

      const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;

      const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

      class Ball {
        constructor() {
          this.start = {
            x: mouse.current.x + getRandomInt(-20, 20),
            y: mouse.current.y + getRandomInt(-20, 20),
            size: getRandomInt(30, 40)
          };
          this.end = {
            x: this.start.x + getRandomInt(-300, 300),
            y: this.start.y + getRandomInt(-300, 300)
          };

          this.x = this.start.x;
          this.y = this.start.y;
          this.size = this.start.size;

          this.style = rgb[getRandomInt(0, rgb.length - 1)];

          this.time = 0;
          this.ttl = 120;
        }

        draw() {
          ctx.fillStyle = this.style;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }

        update() {
          if (this.time <= this.ttl) {
            const progress = 1 - (this.ttl - this.time) / this.ttl;
            this.size = this.start.size * (1 - easeOutQuart(progress));
            this.x = this.x + (this.end.x - this.x) * 0.01;
            this.y = this.y + (this.end.y - this.y) * 0.01;
          }
          this.time++;
        }
      }

      window.addEventListener('resize', resizeReset);
      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseout', mouseout);
      init();

      return () => {
        window.removeEventListener('resize', resizeReset);
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseout', mouseout);
      };
    }, []);
   
    return (
        <div className="pt-10">
            <canvas id="canvas" ref={canvasRef}></canvas>
            <h1 className="text-3xl text-white">amar sonar </h1>
            <h1 className="text-3xl text-white">amar sonar bangla </h1>
            <h1 className="text-3xl text-white">ami tomay valo basi </h1>
           <HeroSection/>
        </div>
    );
};

export default CloudEffect;