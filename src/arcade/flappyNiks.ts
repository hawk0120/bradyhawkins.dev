const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const birdImage = new Image();
birdImage.src = '../public/assets/niks_bg.png';

const pipeImage = new Image();
pipeImage.src = '../public/assets/pipe.png';

const backgroundImage = new Image();
backgroundImage.src = '../public/assets/background.png';

setCanvasSize();
window.addEventListener('resize', setCanvasSize);

interface Bird {
  x: number;
  y: number;
  velocityY: number;
  gravity: number;
  jump: number;
}

const bird: Bird = {
  x: 100,
  y: canvas.height / 2,
  velocityY: 0,
  gravity: 0.2,
  jump: -4,
};

interface Pipe {
  x: number;
  width: number;
  topHeight: number;
  bottomY: number;
}

const pipes: Pipe[] = [];
let gameOver = false;
let score = 0;

const menu = document.getElementById('menu') as HTMLElement;

function drawBird() {
  ctx.drawImage(birdImage, bird.x - 20, bird.y - 20, 100, 100);
}

function drawPipe(pipe: Pipe) {
  ctx.drawImage(pipeImage, pipe.x, 0, pipe.width, pipe.topHeight);

  const bottomPipeHeight = canvas.height - (pipe.topHeight + 120);
  ctx.drawImage(pipeImage, pipe.x, canvas.height - bottomPipeHeight, pipe.width, bottomPipeHeight);
}

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  if (!gameOver) {
    bird.velocityY += bird.gravity;
    bird.y += bird.velocityY;

    if (bird.y + 20 > canvas.height || bird.y - 20 < 0) {
      gameOver = true;
      showMenu();
    }

    if (pipes.length === 0 || pipes[pipes.length - 1].x <= canvas.width - 300) {
      createPipe();
    }

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].x -= 2;

      if (
        bird.x + 5 > pipes[i].x &&
        bird.x - 5 < pipes[i].x + pipes[i].width &&
        (bird.y - 5 < pipes[i].topHeight || bird.y + 5 > pipes[i].bottomY)
      ) {
        gameOver = true;
        showMenu();
      }

      if (pipes[i].x + pipes[i].width < 0) {
        pipes.splice(i, 1);
        score++;
        document.getElementById('score')!.innerText = 'Score: ' + score;
      }
    }
  }
  pipes.forEach(drawPipe);
  drawBird();

  if (!gameOver) {
    requestAnimationFrame(draw);
  }
}

function createPipe() {
  const pipe: Pipe = {
    x: canvas.width,
    width: 50,
    topHeight: Math.random() * (canvas.height - 200) + 50,
    bottomY: 0,
  };

  pipe.bottomY = pipe.topHeight + 150;
  pipes.push(pipe);
}

document.addEventListener('keydown', function (e: KeyboardEvent) {
  if (e.code === 'Space') {
    if (!gameOver) {
      bird.velocityY = bird.jump;
    } else {
      restartGame();
    }
  }
});

canvas.addEventListener('touchstart', function (event: TouchEvent) {
  if (!gameOver) {
    bird.velocityY = bird.jump;
  } else {
    restartGame();
  }
});

function showMenu() {
  menu.style.display = 'block';
}

function restartGame() {
  bird.y = canvas.height / 2;
  bird.velocityY = 0;
  pipes.length = 0;
  gameOver = false;
  score = 0;
  document.getElementById('score')!.innerText = 'Score: 0';
  menu.style.display = 'none';
  draw();
}

function goHome() {
  window.location.href = 'https://www.bradyhawkins.dev';
}

draw();

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
document.head.appendChild(link);

