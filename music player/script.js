var audio = new Audio()
var allsong = document.querySelector("#allsong")
var selectedsong = 0
var poster = document.querySelector("#left")
var play = document.querySelector(".playbtn")
var back = document.querySelector(".backward")
var forward = document.querySelector(".forward")
var flag = 0
let arr = [
    { songName: "Krishna Ki Chetavani", url: "song2.mp3", img: "krishna.jpg" },
    { songName: "Ram Siya Ram lofi song", url: "song4.mp3", img: "ramji.jpg" },
    { songName: "Kishori Kuch Aisa Intjam Ho Jaye ", url: "song1.mp3", img: "kishori.jpg" },
    { songName: "SHOORVEER 3", url: "song3.mp3", img: "hanumanji.jpg" },
    { songName: "Vilen - Ek Raat ", url: "song5.mp3", img: "radhaimage.jpg" },
]
function mainfunction() {
    var clutter = ""
    arr.forEach(function (elem, idx) {
        clutter += `<div class="songcard" id=${idx}>
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>3:00</h6>
</div>`
    })
    audio.src = arr[selectedsong].url
    allsong.innerHTML = clutter
    poster.style.backgroundImage = `url(${arr[selectedsong].img})`
}
mainfunction()
allsong.addEventListener("click", function (dets) {
    selectedsong = dets.target.id
    play.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`
    mainfunction()
    audio.play()

})
play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`
        mainfunction()
        audio.play()
        flag = 1
    }
    else {
        play.innerHTML = `<i class="fa-solid fa-circle-play"></i>`
        audio.pause()
        flag = 0
    }
})
forward.addEventListener("click", function () {
    if (selectedsong < arr.length - 1) {
        selectedsong++
        mainfunction()
        audio.play()
    }
    else {
        forward.style.opacity = 0.4
    }
})
back.addEventListener("click", function () {
    if (selectedsong > 0) {
        selectedsong--
        mainfunction()
        audio.play()
    }
    else {
        back.style.opacity = 0.4
    }
})
