const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const progressBar = document.querySelector('.progress');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const songName = document.getElementById('song-name');
const albumInfo = document.getElementById('album-info');
const coverImage = document.getElementById('cover-image');
const volume = document.getElementById('volume');

// Playlist Data
const playlists = {
  albums: [
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
  ], // Hier deine Songs ergänzen
  mini: [
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    
  ],
  singles: [
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
  ]
};

let currentPlaylist = 'albums';
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

function loadPlaylist(type) {
  currentPlaylist = type;
  currentSongIndex = 0;
  loadSong();
}

function loadSong() {
  const song = playlists[currentPlaylist][currentSongIndex];
  audio.src = song.src;
  songName.textContent = song.title;
  albumInfo.textContent = `from ${currentPlaylist} playing`;
  coverImage.src = song.cover;
  updateTime();
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerHTML = '<svg>…pause icon…</svg>';
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.innerHTML = '<svg>…play icon…</svg>';
}

playBtn.addEventListener('click', () => {
  isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
shuffleBtn.addEventListener('click', () => isShuffle = !isShuffle);
repeatBtn.addEventListener('click', () => isRepeat = !isRepeat);

audio.addEventListener('ended', () => {
  if (isRepeat) {
    loadSong();
    playSong();
  } else if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * playlists[currentPlaylist].length);
    loadSong();
    playSong();
  } else {
    nextSong();
  }
});

audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  currentTime.textContent = formatTime(audio.currentTime);
  duration.textContent = formatTime(audio.duration);
});

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlists[currentPlaylist].length;
  loadSong();
  playSong();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + playlists[currentPlaylist].length) % playlists[currentPlaylist].length;
  loadSong();
  playSong();
}

function updateTime() {
  currentTime.textContent = formatTime(0);
  duration.textContent = formatTime(audio.duration);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

volume.addEventListener('input', e => {
  audio.volume = e.target.value;
});

document.getElementById('playlist').addEventListener('change', e => {
  loadPlaylist(e.target.value);
});

// Initial Load
loadPlaylist(currentPlaylist);
