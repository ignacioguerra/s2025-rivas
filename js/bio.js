// Efecto de aparición por scroll (fade + slide)
    const blocks = document.querySelectorAll('.bio-block');
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.85;
      blocks.forEach(block => {
        const top = block.getBoundingClientRect().top;
        if (top < trigger) {
          block.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);