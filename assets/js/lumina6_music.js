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
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/01.Resonance.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/02.Thread__Unseen.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/03.Lucid Bloom.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/04.Starlight Code.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/05.No Sleep in Neon .mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/06.Electric Bloom.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/07.Faultline.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/08.Echo_Shadow.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/09.Make Me Real.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/10.Tide Loop.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/11.City Ghosts.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/12.Backlight.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack1/13.We Burn Quite.mp3', cover: '../assets/lumina6/discography/Luminate_Resonace_Cover.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/01.Ghost Bloom.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/02.Slip__Reply.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/03.Echoheart.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/04.PRISM__HEART (Intro).mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/05.SUGARSTORM.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/06.Heartline Jump.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/07.Midnight Verse.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/08.Lovertype_∞.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/09.If You Say So.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/10.W A V E R (Interlude).mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/11.Melt__Touch.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/12.Signal Skin.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack2/13.Half Light.mp3', cover: '../assets/lumina6/discography/Prism_Heart_Reflect_Resonate.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/01.Gravity Lies.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/02.RE__ENTRY.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.pngg' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/03.MOTION__SICK.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/04.AFTERIMAGE__YOU.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/05.Digital Eden.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/06.Soft Exit.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/07.Frozen Signal.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/08.Heldroom.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/09.STATIC__SKIN.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/10.Glitch Darling.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/11.Ghost Mode.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/12.IN__VISIBLE.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/repack3/13.Signal Constellation.mp3', cover: '../assets/lumina6/discography/Infinite_Room_RE_ENTRY.png' },
  ], // Hier deine Songs ergänzen
  mini: [
    { title: 'Starlight Code', src: '../assets/lumina6/music/ep1/01.Glowline.mp3', cover: '../assets/lumina6/discography/GLOWLINE.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/ep1/02.Talk to Me (In Color).mp3', cover: '../assets/lumina6/discography/GLOWLINE.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/ep1/03.Pulse Between Us.mp3', cover: '../assets/lumina6/discography/GLOWLINE.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/ep1/04.RE_Start.mp3', cover: '../assets/lumina6/discography/GLOWLINE.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/ep2/01.6AM Voices.mp3', cover: '../assets/lumina6/discography/Vox-6.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/ep2/02.Paper Sky.mp3', cover: '../assets/lumina6/discography/Vox-6.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/ep2/03.In My Language.mp3', cover: '../assets/lumina6/discography/Vox-6.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/ep2/04.Still You.mp3', cover: '../assets/lumina6/discography/Vox-6.png' },
    
  ],
  singles: [
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single1/01.Light On Me.mp3', cover: '../assets/lumina6/discography/Light_on_me.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single2/01.Zero Motion.mp3', cover: '../assets/lumina6/discography/Zero_Motion.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single3/01.Hush Signal.mp3', cover: '../assets/lumina6/discography/Hush_Signal.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single4/01.Velvet Crown.mp3', cover: '../assets/lumina6/discography/Velvet_Crown.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single5/01.MIRRORS.mp3', cover: '../assets/lumina6/discography/MIRRORS.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single6/01.PLAYDEAD.mp3', cover: '../assets/lumina6/discography/PLAYDEAD.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single7/01.Moon Like Us.mp3', cover: '../assets/lumina6/discography/Moon_like_us.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single8/01.Butterfly Tension.mp3', cover: '../assets/lumina6/discography/Butterfly_Tension.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single9/01.LOUDER THAN LIGHT.mp3', cover: '../assets/lumina6/discography/Louder_than_light.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single10/01.Serotonin Fever.mp3', cover: '../assets/lumina6/discography/Serotonin_Fever.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single11/01.ONE VOICE (ESC Version).mp3', cover: '../assets/lumina6/discography/ONE_VOICE.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single11/02.ONE VOICE (Ballad Version).mp3', cover: '../assets/lumina6/discography/ONE_VOICE.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single11/03.ONE VOICE (Acapella Version).mp3', cover: '../assets/lumina6/discography/ONE_VOICE.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single11/04.ONE VOICE (Orchestra Version).mp3', cover: '../assets/lumina6/discography/ONE_VOICE.png' },
    { title: 'Starlight Code', src: '../assets/lumina6/music/singles/single12/01.RISE UP.mp3', cover: '../assets/lumina6/discography/Rise_Up.png' },
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
