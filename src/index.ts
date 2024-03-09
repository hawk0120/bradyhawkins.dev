const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

function createParticle(x: number, y: number, size: number): Particle {
  return {
    x,
    y,
    size,
    speedX: Math.random() * 3 - 1.5,
    speedY: Math.random() * 3 - 1.5,
  };
}

function updateParticle(particle: Particle): void {
  particle.x += particle.speedX;
  particle.y += particle.speedY;

  // Uncomment the following line if you want to decrease particle size over time
  // if (particle.size > 0.2) particle.size -= 0.1;
}

function drawParticle(particle: Particle): void {
  ctx.fillStyle = '#ffffff'; // Adjust particle color
  ctx.strokeStyle = '#ffffff'; // Adjust particle border color
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.closePath();

  ctx.fill();
  ctx.stroke();
}

const particles: Particle[] = [];

function createParticles(): void {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 6;
  particles.push(createParticle(x, y, size));
}

function animateParticles(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    updateParticle(particles[i]);
    drawParticle(particles[i]);

    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener('mousemove', createParticles);

animateParticles();

