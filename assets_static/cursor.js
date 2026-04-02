const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  // Standard movement
  dot.style.left = `${posX}px`;
  dot.style.top = `${posY}px`;

  // Animate the outline with a slight delay for a "fluid" feel
  outline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });
});

// Interactive expansion on links
document.querySelectorAll('a, button').forEach(link => {
  link.addEventListener('mouseenter', () => outline.style.transform = 'translate(-50%, -50%) scale(2)');
  link.addEventListener('mouseleave', () => outline.style.transform = 'translate(-50%, -50%) scale(1)');
});