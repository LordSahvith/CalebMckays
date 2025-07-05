function RunCanvas() {
  // const PARTICLE_COLOR = "#d40000";
  const PARTICLE_COLOR = "#000000";
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  let particlesArray;

  // get mouse position
  let mouse = {
    x: null,
    y: null,
    radius: (canvas.width / 80) * (canvas.height / 80),
  };

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    // method to draw individual particle
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = PARTICLE_COLOR;
      ctx.fill();
    }

    handleCavnasCollision() {
      // check if particle is within canvas
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }

      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }
    }

    handleMouseCollision() {
      // check collision detection - mouse position / particle position
      let distanceX = mouse.x - this.x;
      let distanceY = mouse.y - this.y;
      let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < mouse.radius + this.size) {
        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
          this.x += 10;
        }
        if (mouse.x > this.x && this.x > this.size * 10) {
          this.x -= 10;
        }
        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
          this.y += 10;
        }
        if (mouse.y > this.y && this.y > this.size * 10) {
          this.y -= 10;
        }
      }
    }

    moveParticle() {
      this.x += this.directionX;
      this.y += this.directionY;
    }

    // check particle position, check mouse position, move particle, draw particle
    update() {
      this.handleCavnasCollision();
      // this.handleMouseCollision();
      this.moveParticle();
      this.draw();
    }
  }

  function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 9000;

    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1;
      let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
      let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
      let directionX = Math.random() * 5 - 2.5;
      let directionY = Math.random() * 5 - 2.5;
      let color = PARTICLE_COLOR;

      particlesArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
  }

  init();
  animate();
}

export { RunCanvas };
