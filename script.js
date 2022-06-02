console.log("Welcome to Spotify")


let songIndex = 0;
let audioElement =new Audio("/songs/1.mp3");
console.log(audioElement)
let masterPlay = document.getElementById('masterPlay');
let stampPlayIcon = Array.from(document.getElementsByClassName('stampPlayIcon'))
let myProgressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let songTitle = document.getElementsByClassName('songInfoText')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let currentEnd = document.getElementsByClassName('currentEnd')
let perivousSongIndex;
let songs = [
    {songName: 'Talking to the moon' , filePath: "/songs/1.mp3" , id:"1", coverPath: "./covers/1.jpg" },
    {songName: "Can't Hold Us" , filePath: "/songs/2.mp3" ,id:"2", coverPath: "./covers/cant hold us.jpg"},
    {songName: 'Imagine Dragon-Natural ' , filePath: "/songs/3.mp3" ,id:"3", coverPath: "./covers/9.jpg"},
    {songName: 'Malboro-Prince Of Falls' , filePath: "/songs/4.mp3" ,id:"4", coverPath: "./covers/prince of falls.jpg"},
    {songName: 'Flo Rida (Remix)' , filePath: "/songs/5.mp3" ,id:"5", coverPath: "./covers/8.jpg"},
    {songName: '2WEI-Survior' , filePath: "/songs/6.mp3" ,id:"6", coverPath: "./covers/10.jpg"},
    {songName: 'Imagine Dragon-Demons' , filePath: "/songs/7.mp3" ,id:"7", coverPath: "./covers/demons.jpg"}
]

    songItems.forEach((element, i)=>{
        console.log(element, i)
        element.getElementsByClassName('songCoverImg')[0].src=songs[i].coverPath;
        element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
    })

    // debugger
    masterPlay.addEventListener('click',()=>{
        if(songIndex== NaN || songIndex == undefined || songIndex == 0 ){
            songIndex = 1;
           
        }
        if(audioElement.paused || audioElement.currentTime<=0){
           
        audioElement.src = `/songs/${songIndex}.mp3`;
        console.log('songindex masterplay'  + songIndex)
        audioElement.currentTime =0,
        audioElement.play();
        masterPlay.classList.remove('fa-regular');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-solid');
        masterPlay.classList.add('fa-circle-pause');
        let song_title =songs.filter((ele)=>{
            return ele.id == songIndex})
         song_title.forEach(ele=>{
            let {songName}= ele;
            songTitle[0].innerHTML = 'Playing'+ ' - ' + "'"+ songName  + '.mp3'+ "'" ;});

        gif.style.opacity=1;
       var a =  document.getElementById(songIndex)
       
       a.classList.remove('fa-regular');
       a.classList.remove('fa-circle-play');
        a.classList.add('fa-solid');
        a.classList.add('fa-circle-pause');
            
        }
         else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-regular');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        makeAllPlays();

    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=> {
    audioElement.currentTime = (myProgressbar.value * audioElement.duration)/100
});

const makeAllPlays =()=>{
    
    Array.from(document.getElementsByClassName('stampPlayIcon')).forEach((element)=>{
        element.classList.remove('fa-solid');
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-regular');
        element.classList.add('fa-circle-play');
        gif.style.opacity=0;
    })
};

Array.from(document.getElementsByClassName('stampPlayIcon')).forEach((element)=>{
    element.addEventListener('click', (e)=> {
        perivousSongIndex =  songIndex
        songIndex = parseInt(e.target.id);
   
            if( perivousSongIndex != songIndex ){
                console.log('perivousSongIndex', perivousSongIndex)
                makeAllPlays(); 
                e.target.classList.remove('fa-regular');
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-solid');
                e.target.classList.add('fa-circle-pause');
                audioElement.src = `/songs/${songIndex}.mp3`;
                audioElement.currentTime= 0;
                audioElement.play();
                let song_title =songs.filter((ele)=>{
                    return ele.id == songIndex;})
                song_title.forEach(ele=>{
                    let {songName}= ele;
                    songTitle[0].innerHTML = 'Playing'+ ' - ' + "'"+ songName  + '.mp3'+ "'" ;})
                masterPlay.classList.remove('fa-regular');
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-solid');
                masterPlay.classList.add('fa-circle-pause');
                gif.style.opacity=1;
            }
            else if( perivousSongIndex == songIndex && e.target.classList[3] == 'fa-circle-play'){
                
            
                makeAllPlays(); 
                e.target.classList.remove('fa-regular');
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-solid');
                e.target.classList.add('fa-circle-pause');
                audioElement.src = `/songs/${songIndex}.mp3`;
                audioElement.currentTime= 0;
                audioElement.play();
                let song_title =songs.filter((ele)=>{
                    return ele.id == songIndex;})
                song_title.forEach(ele=>{
                    let {songName}= ele;
                    songTitle[0].innerHTML = 'Playing'+ ' - ' + "'"+ songName  + '.mp3'+ "'" ;})
                masterPlay.classList.remove('fa-regular');
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-solid');
                masterPlay.classList.add('fa-circle-pause');
                gif.style.opacity=1;
            }
            else{
                audioElement.pause();
                audioElement.currentTime= 0;
                e.target.classList.remove('fa-solid');
                e.target.classList.remove('fa-circle-pause');
                e.target.classList.add('fa-regular');
                e.target.classList.add('fa-circle-play');
             
                masterPlay.classList.remove('fa-solid');
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-regular');
                masterPlay.classList.add('fa-circle-play');
                gif.style.opacity=0;
        }
})
});


                document.getElementById('next').addEventListener('click', ()=>{
                    if(songIndex>6){
                        songIndex=1
                    }
                    else{
                        songIndex+=1
                    }
                audioElement.src = `songs/${songIndex}.mp3`;
                audioElement.currentTime= 0;
                audioElement.play();
                masterPlay.classList.remove('fa-regular');
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-solid');
                masterPlay.classList.add('fa-circle-pause');
                let song_title =songs.filter((ele)=>{
                    
                    return ele.id == songIndex;

                })
                song_title.forEach(ele=>{
                    let {songName}= ele;
                    songTitle[0].innerHTML = 'Playing'+ ' - ' + "'"+ songName  + '.mp3'+ "'" ;

                })
                gif.style.opacity=1;
                });


                document.getElementById('previous').addEventListener('click', ()=>{
                    if(songIndex<=1 ){
                        songIndex=7
                    }
                    else{
                    songIndex-=1
                    }
                audioElement.src = `songs/${songIndex}.mp3`;
                audioElement.currentTime= 0;
                audioElement.play();
                masterPlay.classList.remove('fa-regular');
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-solid');
                masterPlay.classList.add('fa-circle-pause');
                let song_title =songs.filter((ele)=>{
                    
                    return ele.id == songIndex;

                })
                song_title.forEach(ele=>{
                    let {songName}= ele;
                    songTitle[0].innerHTML = 'Playing'+ ' - ' + "'"+ songName  + '.mp3'+ "'" ;

                })
                gif.style.opacity=1;
                });


                let min = 0 ;
                let sec = 0;

    audioElement.addEventListener('timeupdate',()=>{  
        let music_dur = audioElement.duration;
        let runTime = audioElement.duration-audioElement.currentTime

       
         min =Math.floor (runTime/60);
         sec =Math.floor (runTime%60);
    


        if ( sec < 10  ){ sec = "0"+sec }
        if ( min < 10  ){ min = "0"+min }

        currentEnd[0].innerHTML =`${min}:${sec}`

    });   
    