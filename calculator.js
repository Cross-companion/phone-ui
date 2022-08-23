let personalIcon = document.querySelector('.personal-icon');
let overLay = document.querySelector('.overlay');
let audioUsed = 'unused';
let overLayCover = document.querySelector('.overlay-cover');
let nextWallpaper = document.querySelector('.next-wallpaper');
let prevWallpaper = document.querySelector('.prev-wallpaper');
let operationValueArray = [];
let answerValueArray = [];
const equalToFunction = function () {
  document.querySelector('.operation-value').textContent = '';
  operationValueArray.length = 0;
  answerValueArray.length = 0;
  document.querySelector('.answer-value').style.fontSize = '40px';
  document.querySelector('.answer-value').style.color = '#CAB200';
};
let operateMe = function (classNameOfNumber, virtualValue, actualValue) {
  document
    .querySelector(classNameOfNumber)
    .addEventListener('click', function () {
      operationValueArray.push(virtualValue);
      operationValue = operationValueArray.join('');
      answerValueArray.push(actualValue);
      answerValue = answerValueArray.join('');
      document.querySelector('.operation-value').textContent = operationValue;
      let answer = eval(answerValue);
      document.querySelector('.answer-value').textContent = answer;
      document.querySelector('.answer-value').style.fontSize = '30px';
      document.querySelector('.answer-value').style.color =
        'rgba(225, 225, 225, 1)';
    });
};
//  BACK-SPACE FUNCTIONALITY
document.querySelector('.back-space').addEventListener('click', function () {
  operationValueArray.pop();
  operationValue = operationValueArray.join('');
  document.querySelector('.operation-value').textContent = operationValue;
  answerValueArray.pop();
  console.log(answerValueArray);
  answerValue = answerValueArray.join('');
  console.log(answerValue);
  let answer = eval(answerValue);
  console.log(answer, typeof answer);
  document.querySelector('.answer-value').textContent = answer;
});
// EQUAL-TO OPERATION
document.querySelector('.equal-to').addEventListener('click', equalToFunction);
// ASSIGNMENTS
document
  .querySelector('.zero')
  .addEventListener('click', operateMe('.zero', 0, 0));
document
  .querySelector('.one')
  .addEventListener('click', operateMe('.one', 1, 1));
document
  .querySelector('.two')
  .addEventListener('click', operateMe('.two', 2, 2));
document
  .querySelector('.three')
  .addEventListener('click', operateMe('.three', 3, 3));
document
  .querySelector('.four')
  .addEventListener('click', operateMe('.four', 4, 4));
document
  .querySelector('.five')
  .addEventListener('click', operateMe('.five', 5, 5));
document
  .querySelector('.six')
  .addEventListener('click', operateMe('.six', 6, 6));
document
  .querySelector('.seven')
  .addEventListener('click', operateMe('.seven', 7, 7));
document
  .querySelector('.eight')
  .addEventListener('click', operateMe('.eight', 8, 8));
document
  .querySelector('.nine')
  .addEventListener('click', operateMe('.nine', 9, 9));
document
  .querySelector('.point')
  .addEventListener('click', operateMe('.point', '.', '.'));
document
  .querySelector('.addition')
  .addEventListener('click', operateMe('.addition', '+', '+'));
document
  .querySelector('.subtraction')
  .addEventListener('click', operateMe('.subtraction', '-', '-'));
document
  .querySelector('.division')
  .addEventListener('click', operateMe('.division', '÷', '/'));
document
  .querySelector('.multiplication')
  .addEventListener('click', operateMe('.multiplication', '×', '*'));
document
  .querySelector('.percentage')
  .addEventListener('click', operateMe('.percentage', '%', '/100* '));
// MINI OPERATORS
document
  .querySelector('.right-parenthesis')
  .addEventListener('click', operateMe('.right-parenthesis', '(', '('));
document
  .querySelector('.left-parenthesis')
  .addEventListener('click', operateMe('.left-parenthesis', ')', ')'));
document
  .querySelector('.raise-to-power')
  .addEventListener('click', operateMe('.raise-to-power', '^', '**'));
// CLEAR ALL BUTTON
document.querySelector('.clear-all').addEventListener('click', function () {
  document.querySelector('.answer-value').textContent = '';
  document.querySelector('.operation-value').textContent = '';
  operationValueArray.length = 0;
  answerValueArray.length = 0;
});
//
//  PAGE MANIPULATION
// LEAVING APP
document
  .querySelector('.change-page-button')
  .addEventListener('click', function () {
    document
      .querySelector('.calculatorinterface')
      .classList.remove('change-page-entry');
    document
      .querySelector('.calculatorinterface')
      .classList.add('change-page-exit');
    document
      .querySelector('.music-player')
      .classList.remove('change-page-entry');
    document
      .querySelector('.home-page-interface')
      .classList.remove('change-page-exit');
    document
      .querySelector('.home-page-interface')
      .classList.add('change-page-entry');
    document.querySelector('.calculatorextra').style.backgroundColor =
      'transparent';
    document.querySelector('.infodiv').style.backgroundColor = 'transparent';
    overLay.style.display = 'none';
  });
// overlay
// OPENING INFORMATION MODAL
personalIcon.addEventListener('click', function () {
  overLay.style.display = 'flex';
});
// CLOSING INFORMATION MODAL
overLayCover.addEventListener('click', function () {
  overLay.style.display = 'none';
});
//
// WALLPAPER SETTINGS CONTROL
let wallpaperNumber = 1;
nextWallpaper.addEventListener('click', function () {
  wallpaperNumber++;
  if (wallpaperNumber > 5) {
    wallpaperNumber = 1;
  }
  document.querySelector(
    '.home-page-interface'
  ).style.backgroundImage = `url(mobilebackground${wallpaperNumber}.jpg)`;
});
prevWallpaper.addEventListener('click', function () {
  wallpaperNumber--;
  if (wallpaperNumber < 1) {
    wallpaperNumber = 5;
  }
  document.querySelector(
    '.home-page-interface'
  ).style.backgroundImage = `url(mobilebackground${wallpaperNumber}.jpg)`;
});
// BACK TO CALCULATOR
document
  .querySelector('.calculator-icon')
  .addEventListener('click', function () {
    document
      .querySelector('.calculatorinterface')
      .classList.remove('change-page-exit');
    document
      .querySelector('.calculatorinterface')
      .classList.add('change-page-entry');
    document
      .querySelector('.home-page-interface')
      .classList.remove('change-page-entry');
    document
      .querySelector('.home-page-interface')
      .classList.add('change-page-exit');
    document.querySelector('.calculatorextra').style.backgroundColor =
      '#faffff';
    document.querySelector('.infodiv').style.backgroundColor = '#faffff';
  });
// OPENING MUSIC PLAYER APP
document
  .querySelector('.music-player-icon')
  .addEventListener('click', function () {
    document
      .querySelector('.music-player')
      .classList.remove('change-page-exit');
    document.querySelector('.music-player').classList.add('change-page-entry');
    document
      .querySelector('.home-page-interface')
      .classList.remove('change-page-entry');
    document
      .querySelector('.home-page-interface')
      .classList.add('change-page-exit');
    if (audioUsed === 'unused') {
      audio.src = songAddress.songSRC[currentSongArrayNumber];
    }
    musicPlayerApp.style.backgroundImage = `url(${songAddress.nowPlayingAlbumPicture[currentSongArrayNumber]})`;
    nowPlayingIcon.src =
      songAddress.nowPlayingAlbumPicture[currentSongArrayNumber];
    songName.textContent = songDetails.songNames[currentSongArrayNumber];
    artistName.textContent = songDetails.artistNames[currentSongArrayNumber];
    audioUsed = 'used';
  });
//
// MUSIC APP CONTROLS
const musicPlayerApp = document.querySelector('.music-player');
const nowPlayingIcon = document.querySelector('.now-playing-icon');
let songName = document.querySelector('.song-name');
let artistName = document.querySelector('.artist-name');
let audio = document.querySelector('.audio');
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let playClassList = play.classList;
let pauseClassList = pause.classList;
let currentSongArrayNumber = 0;
//- ASSIGNING ARRAYS AND OBJECTS -//
const songDetails = {
  songNames: [
    'The train',
    'Transfiguration',
    'Lovesong',
    'Tapestry',
    'Broken vessels',
  ],
  artistNames: [
    'Jaymikee ft Lawrence oyor ',
    'Hillsong Worship ',
    'Nathaniel Bassey ',
    'Hillsong Worship ',
    'Hillsong worship ',
  ],
};
const songIDFunction = function (artistName, songName) {
  let songInfo = artistName + songName;
  let songAbout = songInfo.replace(/\s/g, '-');
  return songAbout;
};
const songID = [];
const songAddress = {
  songSRC: [],
  nowPlayingAlbumPicture: [],
  // age: [1, 3, 5, 6],
};
// - AUTOMATING ANY UPDATE - //
const automatateUpdate = function () {
  for (let i = 0; i < songDetails.songNames.length; i++) {
    songID.push(
      songIDFunction(songDetails.artistNames[i], songDetails.songNames[i])
    );
    songAddress.songSRC.push(songID[i] + '.mp3');
    songAddress.nowPlayingAlbumPicture.push(songID[i] + '.jpeg');
  }
};
automatateUpdate();
//
//- THIS FUNCTION WAS USED BOTH TO AUTOMATICALLY PLAY NEXT SONG AND ON CLICK  THE NEXT BUTTON -//
const PlayNextTrack = function () {
  currentSongArrayNumber < songID.length - 1
    ? currentSongArrayNumber++
    : (currentSongArrayNumber = 0);
  if (playClassList.contains('show-display')) {
    playClassList.remove('show-display');
    playClassList.add('remove-display');
    pauseClassList.remove('remove-display');
    pauseClassList.add('show-diplay');
  }
  audio.src = songAddress.songSRC[currentSongArrayNumber];
  audio.play();
  songName.textContent = songDetails.songNames[currentSongArrayNumber];
  musicPlayerApp.style.backgroundImage = `url(${songAddress.nowPlayingAlbumPicture[currentSongArrayNumber]})`;
  nowPlayingIcon.src =
    songAddress.nowPlayingAlbumPicture[currentSongArrayNumber];
  artistName.textContent = songDetails.artistNames[currentSongArrayNumber];
};
//
// - NEXT BUTTON - //
document
  .querySelector('.next-control')
  .addEventListener('click', PlayNextTrack);
//
// - PREVIOUS BUTTON - //
document
  .querySelector('.previous-control')
  .addEventListener('click', function () {
    currentSongArrayNumber === 0
      ? (currentSongArrayNumber = songID.length - 1)
      : currentSongArrayNumber--;
    if (playClassList.contains('show-display')) {
      playClassList.remove('show-display');
      playClassList.add('remove-display');
      pauseClassList.remove('remove-display');
      pauseClassList.add('show-diplay');
    }
    audio.src = songAddress.songSRC[currentSongArrayNumber];
    audio.play();
    musicPlayerApp.style.backgroundImage = `url(${songAddress.nowPlayingAlbumPicture[currentSongArrayNumber]})`;
    nowPlayingIcon.src =
      songAddress.nowPlayingAlbumPicture[currentSongArrayNumber];
    songName.textContent = songDetails.songNames[currentSongArrayNumber];
    artistName.textContent = songDetails.artistNames[currentSongArrayNumber];
  });
//
// - PLAYING AND PAUSING - //
play.addEventListener('click', function () {
  playClassList.remove('show-display');
  playClassList.add('remove-display');
  pauseClassList.remove('remove-display');
  pauseClassList.add('show-display');
  audio.play();
});
pause.addEventListener('click', function () {
  pauseClassList.remove('show-display');
  pauseClassList.add('remove-display');
  playClassList.remove('remove-display');
  playClassList.add('show-display');
  audio.pause();
});
//
////////////////////////////
// SETTING DATE AND TIME
const monthsOfAYear = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// - ASSIGNING - //
setInterval(function () {
  if (audio.ended) {
    PlayNextTrack();
  }
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let day = weekDays[fullDate.getDay()];
  let month = monthsOfAYear[fullDate.getMonth()];
  let date = fullDate.getDate();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  document.querySelector('.current-hours').textContent = hours;
  document.querySelector('.current-minutes').textContent = ':' + minutes;
  document.querySelector('.day').textContent = day + ',';
  document.querySelector('.month').textContent = month;
  document.querySelector('.date').textContent = date;
}, 1000);
