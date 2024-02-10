// Slide show functionality for skills bubbles
const skillBubbles = document.querySelectorAll('.skills .bubble');

skillBubbles.forEach(bubble => {
  bubble.addEventListener('mouseenter', () => {
    skillBubbles.forEach(b => {
      if (b !== bubble) {
        b.style.opacity = '0.6';
      }
    });
  });

  bubble.addEventListener('mouseleave', () => {
    skillBubbles.forEach(b => {
      b.style.opacity = '1';
    });
  });
});

// Slide show functionality for training rectangles
const trainingRectangles = document.querySelectorAll('.trainings .rectangle');

trainingRectangles.forEach(rectangle => {
  rectangle.addEventListener('mouseenter', () => {
    trainingRectangles.forEach(r => {
      if (r !== rectangle) {
        r.style.opacity = '0.6';
      }
    });
  });

  rectangle.addEventListener('mouseleave', () => {
    trainingRectangles.forEach(r => {
      r.style.opacity = '1';
    });
  });
});
