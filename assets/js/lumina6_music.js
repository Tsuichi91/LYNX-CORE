// JavaScript file: lumina6_music_player.js

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audio-player');
  const playlistSelect = document.getElementById('playlist');
  const playlistTracks = document.getElementById('playlist-tracks');
  const playButton = document.getElementById('play');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const shuffleButton = document.getElementById('shuffle');
  const repeatButton = document.getElementById('repeat');
  const volumeSlider = document.getElementById('volume');
  const coverImage = document.getElementById('cover-image');
  const progressBar = document.getElementById('progress-bar');
  const canvas = document.getElementById('equalizer');
  const ctx = canvas.getContext('2d');

  let currentPlaylist = [];
  let currentTrackIndex = 0;
  let isShuffle = false;
  let isRepeat = false;
  let animationId;

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioCtx.createMediaElementSource(audioPlayer);
  const analyser = audioCtx.createAnalyser();

  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 64;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const playlists = {
    albums: [
      { title: 'Starlight Code', src: '../assets/lumina6/music/Starlight_Code.mp3', cover: '../assets/lumina6/discography/Luminate_Cover.png' },
      // Add all other album tracks here
    ],
    mini: [
      { title: 'Glowline', src: '../assets/lumina6/music/Glowline.mp3', cover: '../assets/lumina6/discography/GLOWLINE.png' },
      // Add other mini-album tracks here
    ],
    singles: [
      { title: 'Light On Me', src: '../assets/lumina6/music/Light_On_Me.mp3', cover: '../assets/lumina6/discography/Light_on_me.png' },
      // Add other singles here
    ]
  };

  function loadPlaylist(type) {
    currentPlaylist = playlists[type];
    playlistTracks.innerHTML = '';
    currentPlaylist.forEach((track, index) => {
      const li = document.createElement('li');
      li.textContent = track.title;
      li.dataset.index = index;
      li.addEventListener('click', () => playTrack(index));
      playlistTracks.appendChild(li);
    });
    currentTrackIndex = 0;
    playTrack(currentTrackIndex);
  }

  function playTrack(index) {
    const track = currentPlaylist[index];
    audioPlayer.src = track.src;
    coverImage.src = track.cover;
    audioPlayer.play();
  }

  function drawVisualizer() {
    animationId = requestAnimationFrame(drawVisualizer);
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i];
      ctx.fillStyle = 'rgb(29, 185, 84)';
      ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
      x += barWidth + 1;
    }
  }

  playButton.addEventListener('click', () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.textContent = '⏸️';
      drawVisualizer();
    } else {
      audioPlayer.pause();
      playButton.textContent = '▶️';
      cancelAnimationFrame(animationId);
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
    shuffleButton.style.color = isShuffle ? '#1DB954' : '#fff';
  });

  repeatButton.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatButton.style.color = isRepeat ? '#1DB954' : '#fff';
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

  audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
  });

  volumeSlider.addEventListener('input', e => {
    audioPlayer.volume = e.target.value;
  });

  playlistSelect.addEventListener('change', e => {
    loadPlaylist(e.target.value);
  });

  loadPlaylist('albums');
});
