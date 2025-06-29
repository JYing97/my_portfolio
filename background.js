
  const container = document.querySelector('.glow-lines-background');
  const colors = [
    { color: 'rgba(255, 0, 119, 0.7)', glow: '0 0 10px rgba(255, 0, 119, 0.9)' },     // red
    { color: 'rgba(0, 110, 255, 0.7)', glow: '0 0 10px rgba(0, 110, 255, 0.9)' },     // blue
    { color: 'rgba(128, 0, 90, 0.7)', glow: '0 0 10px rgba(128, 0, 90, 0.9)' }  // purple
  ];

  function createLine() {
    const line = document.createElement('div');
    line.classList.add('line');

    // Randomize properties
    const top = Math.random() * 100; // %
    const width = Math.floor(Math.random() * 150) + 50; // 50–200px
    const height = Math.floor(Math.random() * 150) + 50; // 50–200px
    // const height = 5;
    const duration = Math.random() * 5 + 3; // 3–8s
    const delay = Math.random() * 2; // 0–2s
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Apply styles
    line.style.top = `${top}%`;
    line.style.width = `${width}px`;
    line.style.height = `${height}px`;
    line.style.backgroundColor = color.color;
    line.style.boxShadow = color.glow;
    line.style.animationDuration = `${duration}s`;
    line.style.animationDelay = `${delay}s`;

    // Add and remove
    container.appendChild(line);
    setTimeout(() => {
      container.removeChild(line);
    }, (duration + delay) * 1000);
  }

  // Generate new line every 300ms
  setInterval(createLine, 300);
