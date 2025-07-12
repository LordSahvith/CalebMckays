import { useRef, useEffect } from "react";
import "./Particles.css";

function ParticleCanvas({ windowSize, setWindowSize }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    const particles = [];
    const particleCount =
      canvas.width < 768 ? 75 : canvas.width < 1440 ? 100 : 125;

    // Particle class
    class Particle {
      constructor(x, y, size, color, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Bounce off edges
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.velocityX *= -1;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.velocityY *= -1;
        }

        this.x += this.velocityX;
        this.y += this.velocityY;
      }
    }

    // Initialize particles
    function init() {
      for (let i = 0; i < particleCount; i++) {
        const size = (Math.random() + 1.5) * 2;
        const x =
          Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
        const y =
          Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2;
        const color = `rgba(75, 0, 0, ${Math.random()})`;
        const velocityX = Math.random() - 0.5;
        const velocityY = Math.random() - 0.5;

        particles.push(new Particle(x, y, size, color, velocityX, velocityY));
      }
    }

    function clearParticles() {
      for (let i = 0; particles.length; i++) {
        particles.pop();
      }
    }

    // connect particles with a line
    function connect() {
      let opacityValue = 1;
      for (const particleA of particles) {
        for (const particleB of particles) {
          let distance =
            Math.pow(particleA.x - particleB.x, 2) +
            Math.pow(particleA.y - particleB.y, 2);

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(75, 0, 0, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connect();
      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      clearParticles();
      init();
      animate();
    };

    window.addEventListener("resize", handleResize);
    init();
    animate();

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animate);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return <canvas className="particles-canvas" ref={canvasRef} />;
}

export default ParticleCanvas;
