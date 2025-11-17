// ubicacion: js/funciones.js

// PARA AGREGAR IMG EN SLIDER MODIFICAR (1-1):
// Arreglo de slides y audios
const slides = [
    { audioId: 'audio1', selector: '.s1' },
    { audioId: 'audio2', selector: '.s2' },
    { audioId: 'audio3', selector: '.s3' },
    { audioId: 'audio4', selector: '.s4' },
    { audioId: 'audio5', selector: '.s5' }
];

// Función para inicializar controles
slides.forEach(slide => {
    const audio = document.getElementById(slide.audioId);
    const playBtn = document.querySelector(`${slide.selector} .play`);
    const pauseBtn = document.querySelector(`${slide.selector} .pause`);
    const stopBtn = document.querySelector(`${slide.selector} .stop`);
    const volumeBtn = document.querySelector(`${slide.selector} .volume`);

    // Botón play
    playBtn.addEventListener('click', () => {
        audio.play();
    });

    // Botón pause
    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });

    // Botón stop
    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Botón volumen (mute/unmute)
    volumeBtn.addEventListener('click', () => {
        audio.muted = !audio.muted;
        // Cambiar color del botón según esté silenciado
        if (audio.muted) {
            volumeBtn.style.background = '#ff6b6b';
        } else {
            volumeBtn.style.background = 'rgba(255,255,255,0.1)';
        }
    });
});

// Seleccionamos todos los radios y todos los audios
const slideRadios = document.querySelectorAll('input[name="slides"]');
const allAudios = slides.map(slide => document.getElementById(slide.audioId));

// Cuando cambia cualquier radio, pausamos todos los audios
slideRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    allAudios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0; // opcional, si querés reiniciar
    });
  });
});
