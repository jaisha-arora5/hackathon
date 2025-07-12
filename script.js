const cover = document.getElementById('cover');
const coverImage = document.getElementById('coverImage');
const home = document.getElementById('home');
const glow = document.getElementById('glow');

let started = false;

cover.addEventListener('click', (e) => {
  if (started) return;
  started = true;

  createSparkles(e.clientX, e.clientY);

  coverImage.classList.add('zoomed');

  setTimeout(() => {
    glow.classList.add('active');
  }, 1000);

  setTimeout(() => {
    cover.style.opacity = 0;
    home.style.display = 'flex';
    home.style.opacity = 1;
  }, 3000);

  setTimeout(() => {
    cover.style.display = 'none';
  }, 4000);
});

// Sparkle particle generator
function createSparkles(x, y) {
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 60 + 20;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.setProperty('--scatter-transform', `translate(${dx}px, ${dy}px)`);

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 800);
  }
}

const menuBtn = document.getElementById('menuBtn');
const menuOptions = document.getElementById('menuOptions');

menuBtn.addEventListener('click', () => {
  const isOpen = menuOptions.style.display === 'flex';

  if (isOpen) {
    menuOptions.style.display = 'none';
    menuBtn.textContent = '≡';
  } else {
    menuOptions.style.display = 'flex';
    menuBtn.textContent = '✕';
  }
});

// === Zoom Controls ===
window.addEventListener('DOMContentLoaded', () => {
  const homePage = document.getElementById('home');

  const zoomContainer = document.createElement('div');
  zoomContainer.classList.add('zoom-controls');

  const zoomInBtn = document.createElement('button');
  zoomInBtn.textContent = '+';
  zoomInBtn.title = 'Zoom In';

  const zoomOutBtn = document.createElement('button');
  zoomOutBtn.textContent = '−';
  zoomOutBtn.title = 'Zoom Out';

  zoomContainer.appendChild(zoomInBtn);
  zoomContainer.appendChild(zoomOutBtn);
  homePage.appendChild(zoomContainer);

  const mapImage = document.querySelector('.map-image');
  let currentScale = 1;

  zoomInBtn.addEventListener('click', () => {
    currentScale += 0.1;
    mapImage.style.transform = `scale(${currentScale})`;
    mapImage.style.transformOrigin = 'top left';
  });

  zoomOutBtn.addEventListener('click', () => {
    currentScale = Math.max(0.2, currentScale - 0.1);
    mapImage.style.transform = `scale(${currentScale})`;
    mapImage.style.transformOrigin = 'top left';
  });
});
