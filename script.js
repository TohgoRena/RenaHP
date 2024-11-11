document.addEventListener('DOMContentLoaded', () => {
    const musicToggle = document.getElementById('music-toggle');
    const music = document.getElementById('background-music');

    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            musicToggle.textContent = 'Music OFF';
            musicToggle.classList.remove('music-on');
            musicToggle.classList.add('music-off');
        } else {
            music.play();
            musicToggle.textContent = 'Music ON';
            musicToggle.classList.remove('music-off');
            musicToggle.classList.add('music-on');
        }
        isPlaying = !isPlaying;
    });
});
