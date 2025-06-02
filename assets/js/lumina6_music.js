const audioPlayer = document.getElementById('audio-player');
const playlistSelect = document.getElementById('playlist');
const playlistTracks = document.getElementById('playlist-tracks');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const shuffleButton = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat');
const volumeSlider = document.getElementById('volume');

let currentPlaylist = [];
let currentTrackIndex = 0;
let isShuffle = false;
let isRepeat = false;

// Define playlists (arrays of song objects with title and src)
const playlists = {
  albums: [
    {title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3'},
    // ... more album tracks
  ],
  mini: [
    {title: 'Glowline', src: '../assets/lumina6/music/Glowline.mp3'},
    // ... more mini-album tracks
  ],
  singles: [
    {title: 'Light On Me', src: '../assets/lumina6/music/Light_On_Me.mp3'},
    // ... more single tracks
  ]
};

function loadPlaylist(type) {
  currentPlaylist = playlists[type];
  playlistTracks.innerHTML = '';
  currentPlaylist.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.title;
    li.dataset.index = index;
    li.addEventListener('click', () => {
      playTrack(index);
    });
    playlistTracks.appendChild(li);
  });
  currentTrackIndex = 0;
  playTrack(currentTrackIndex);
}

function playTrack(index) {
  const track = currentPlaylist[index];
  audioPlayer.src = track.src;
  audioPlayer.play();
}

playlistSelect.addEventListener('change', (e) => {
  loadPlaylist(e.target.value);
});

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = '⏸️';
  } else {
    audioPlayer.pause();
    playButton.textContent = '▶️';
  }
});

nextButton.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
  playTrack(currentTrackIndex);
});

prevButton.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  playTrack(currentTrackIndex);
});

shuffleButton.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleButton.style.color = isShuffle ? '#ffccff' : '#fff';
});

repeatButton.addEventListener('click', () => {
  isRepeat = !isRepeat;
  repeatButton.style.color = isRepeat ? '#ffccff' : '#fff';
});

audioPlayer.addEventListener('ended', () => {
  if (isRepeat) {
    playTrack(currentTrackIndex);
  } else if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * currentPlaylist.length);
    playTrack(currentTrackIndex);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
    playTrack(currentTrackIndex);
  }
});

volumeSlider.addEventListener('input', (e) => {
  audioPlayer.volume = e.target.value;
});

// Initialize default playlist
loadPlaylist('albums');

const canvas = document.getElementById('equalizer');
const ctx = canvas.getContext('2d');
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const audioSource = audioCtx.createMediaElementSource(audioPlayer);
const analyser = audioCtx.createAnalyser();

// Connect nodes
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = 64;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// Resize canvas
canvas.width = 600;
canvas.height = 100;

function drawVisualizer() {
  requestAnimationFrame(drawVisualizer);
  analyser.getByteFrequencyData(dataArray);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const barWidth = (canvas.width / bufferLength) * 2.5;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const barHeight = dataArray[i];
    const r = 250;
    const g = 50;
    const b = 150;
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
    x += barWidth + 1;
  }
}

drawVisualizer();

// Resume AudioContext on user gesture
playButton.addEventListener('click', () => {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
});
