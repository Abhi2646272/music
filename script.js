const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const coverImage = document.getElementById('cover-image');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const volumeControl = document.getElementById('volume');

const songs = [
    {
        title: 'Awara Shaam Hai',
        artist: 'Artist 1',
        src: 'song1.mp3',
        cover: 'music.png'
    },
    {
        title: 'Dekha Tenu Pehli',
        artist: 'Artist 2',
        src: 'song2.mp3',
        cover: 'music.png'
    },
    {
        title: 'Ram Siya Ram',
        artist: 'Artist 3',
        src: 'song3.mp3',
        cover: 'music.png'
    },
    {
        title: 'Mehbooba (KGF 2)',
        artist: 'Artist 4',
        src: 'song4.mp3',
        cover: 'music.png'
    },
    {
        title: 'Tu Mera Hai Sanam',
        artist: 'Artist 5',
        src: 'song5.mp3',
        cover: 'music.png'
    }
];

let currentSongIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    coverImage.src = song.cover;
}

function playPauseSong() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseBtn.textContent = '⏸';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseBtn.textContent = '⏸';
}

function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function setVolume() {
    audio.volume = volumeControl.value;
}

playPauseBtn.addEventListener('click', playPauseSong);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
volumeControl.addEventListener('input', setVolume);

// Load the first song on page load
loadSong(songs[currentSongIndex]);
audio.volume = 0.5;
