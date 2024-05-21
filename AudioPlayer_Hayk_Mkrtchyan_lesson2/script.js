let data  = {
    title : [
        "Vagharshapati Par - Dance of Vagharshapati",
        "The Sky Is Cloudy",
        "The Cave of Rebirth",
        "Levitation 21",
        "Masquerade waltz",
        "La boheme",
        "Wind of change",
        "Moonlight Sonata",
        "Requiem in D Minor, K. 626_ Sequence_ VI. Lacrimosa dies illa"
    ],
    
    song : [
        "music/Vagharshapati Par - Dance of Vagharshapati.mp3",
        "music/The Sky Is Cloudy.mp3",
        "music/The Cave of Rebirth.mp3",
        "music/Levitation 21.mp3",
        "music/Masquerade waltz.mp3",
        "music/La boheme.mp3",
        "music/Wind of change.mp3",
        "music/Moonlight Sonata.mp3",
        "music/Requiem in D Minor, K. 626_ Sequence_ VI. Lacrimosa dies illa.mp3"
    ],

    poster : [
        "https://i.ytimg.com/vi/5HOBekpVx_M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAT_T4YN72JAOH3FCvBbQl3l0aOxw",
        "https://www.shutterstock.com/image-photo/sky-full-dark-clouds-bad-600nw-1436785388.jpg",
        "https://f4.bcbits.com/img/a4233994720_65",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-ZE3WUepa6oc1DKBsvD3B_ekZTec59WEU7zwVgT_Ww&s",
        "https://www.boosey.com/imagesw/shop/product/$wm1_700x0_$_1706734.jpg",
        "https://upload.wikimedia.org/wikipedia/en/6/69/La_boh%C3%A8me_album.jpg",
        "https://i.scdn.co/image/ab67616d0000b273787674b6a114f98cad6f834b",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3Eg6BjyNRppiCra4M-x7jCkb7-MGK5AcRLuCVPNI2Q&s",
        "https://i.scdn.co/image/ab67616d0000b27312ca44459e62f916ac40e6f2"
    ]
}


let song= new Audio()

window.onload = function () {
    playSong()
}

let currentSong = 0

function playSong () {
    console.log(currentSong);
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    console.log(img[0]);
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
     
    totalTime(song.duration)
}


function totalTime(seconds) {
    let min = Math.floor(seconds /60)

    let sec = Math.floor(seconds %60)


    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime[0].textContent +=  " / " + min + ":" + sec

}




function next() {
    currentSong++

    if (currentSong >= data.song.length) {
        currentSong = 0
    }

    playSong()

}


function prev() {
    


        currentSong--
    


    if (currentSong <= 0 ) {
       currentSong = data.song.length - 1

    }

    playSong()

}


var mutes = document.getElementById("mute")


function mute() {
    if (song.muted){
        song.muted = false
        mutes.src = "images/volume.png"
    }else{
        song.muted = true
        mutes.src = "images/volume-mute.png"
        
    }

}



function decrase() {
    song.volume -= 0.2
    if (song.volume <= 0.2) {
        // onstorage.volume = 
        mutes.src = "images/volume-mute.png"
    }
}



function increase() {
    song.volume += 0.2
    // if (mutes.src = "images/volume-mute.png") {
        
    // }else{
    //     mutes.src = "images/volume.png"
    // }
    
}






