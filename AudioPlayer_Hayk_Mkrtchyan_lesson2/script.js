let data  = {
    title : [
        "Vagharshapati Par - Dance of Vagharshapati",
        "The Sky Is Cloudy",
        "The Cave of Rebirth",
        "Levitation 21"
    ],
    
    song : [
        "music/Vagharshapati Par - Dance of Vagharshapati.mp3",
        "music/The Sky Is Cloudy.mp3",
        "music/The Cave of Rebirth.mp3",
        "music/Levitation 21.mp3"
    ],

    poster : [
        "https://i.ytimg.com/vi/5HOBekpVx_M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAT_T4YN72JAOH3FCvBbQl3l0aOxw",
        "https://www.shutterstock.com/image-photo/sky-full-dark-clouds-bad-600nw-1436785388.jpg",
        "https://f4.bcbits.com/img/a4233994720_65",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-ZE3WUepa6oc1DKBsvD3B_ekZTec59WEU7zwVgT_Ww&s"
    ]
}


let song= new Audio()

window.onload = function () {
    playSong()
}

let currentSong = 0

function playSong () {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.bakcgroundImage = "url(" + data.poster[currentSong] + ")"
    let main  = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play() 

}

function playOrPauseSong() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}


song.addEventListener("timeupdate" , function () {
    // console.log(song.currentTime);
    // console.log(song.duration);

    let fill = document.getElementsByClassName("fill")

    let position = song.currentTime / song.duration

    fill[0].style.width = position * 100 + "%"


    convertTime(song.currentTime)

    if (song.ended) {
            next()
    }

})



function convertTime(seconds) {
    
    currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds/60)
                                                                                                         
    let sec = Math.floor(seconds%60)


    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    currentTime[0].textContent = min + ":" + sec

}


function totalTime(seconds) {
    let min = Math.floor(seconds /60)

    let sec = Math.floor(seconds %60)


    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime[0].textContent += "/" + min + ":" + sec

}




function next() {
    currentSong++

    if (currentSong >= data.song.length) {
        currentSong = 0
    }

    playSong()

}


function prev(params) {
    currentSong--

    if (currentSong <= 0 ) {
       currentSong = data.song.length - 1

    }

    playSong()

}
