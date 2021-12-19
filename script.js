console.log("Welcome to music Player Made by Ajay Patidar");
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById('progress');
let audioElement = new Audio('sea.mp3');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {
        songName: "sea", filepath: "sea.mp3", coverPath: "back.jpg"
    },
    {
        songName: "one", filepath: "One.mp3", coverPath: "sitar.jpg"
    },
    {
        songName: "mintdance", filepath: "mintdance.mp3", coverPath: "mintdance.jpg"
    },
    {
        songName: "the", filepath: "the.mp3", coverPath: "back.jpg"
    },
    {
        songName: "mid night", filepath: "mid night.mp3", coverPath: "sitar.jpg"
    },
    {
        songName: "youfind", filepath: "youfind.mp3", coverPath: "mintdance.jpg"
    },
    {
        songName: "alone", filepath: "alone.mp3", coverPath: "sitar.jpg"
    },
    {
        songName: "let me love you", filepath: "stay.mp3", coverPath: "back.jpg"
    },
]




songItem.forEach((element, i) => {
   
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();


    masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
          
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }

    })


// event listner 
audioElement.addEventListener('timeupdate', () => {

    let progress = ((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;


})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = (audioElement.duration * progressBar.value) / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        src = songs[songIndex].songName;
        audioElement.src = `${src}.mp3`;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName.innerText = `${src} `;
        
        
    });
})

document.getElementById('next').addEventListener('click',()=>
{
    if(songIndex>=7)
    {
        songIndex == 0;
    }
    else
    {
        songIndex+=1;
    }
    src = songs[songIndex].songName;
    audioElement.src = `${src}.mp3`;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText = `${src} `;
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex ==0)
    {
        songIndex == 7;
    }
    else
    {
        songIndex -=1;
    }

    src = songs[songIndex].songName;
    audioElement.src =`${src}.mp3`;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText = `${src} `;
})
